/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import api from '../../api/axios';
import { Formik, Form, ErrorMessage } from 'formik';
import { phoneRegExp, formatPhoneNumber } from '../../utils/phoneUtils';
import { Plus } from '../Icons';
import Input from './FormUI/Input';
import SubmitButton from './FormUI/SubmitButton';

interface VisitReqModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface VisitRequestFormValues {
  visitorName: string;
  visitorEmail: string;
  visitorPhoneNumber: string;
  visitorComment: string;
  requestedDate: Date;
}

const formatDateForInput = (date: Date): string => {
  const pad = (num: number): string => (num < 10 ? '0' + num : num.toString());
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};

//Define validation schema for form
const VisitRequestSchema = Yup.object().shape({
  visitorName: Yup.string().required('Name is required'),
  visitorEmail: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  visitorPhoneNumber: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
  visitorComment: Yup.string()
    .required('Comment is required')
    .max(1000, 'Message must be less than 1000 characters'),
  requestedDate: Yup.date()
    .min(new Date(), 'Date must be in the future')
    .required('Date to schedule visit is required'),
});

const VisitRequestModalForm = ({ isOpen, onClose }: VisitReqModalProps) => {
  const { homeId } = useParams();

  //Define initial values for form
  const initialValues: VisitRequestFormValues = {
    visitorName: '',
    visitorEmail: '',
    visitorPhoneNumber: '',
    visitorComment: '',
    requestedDate: new Date(),
  };

  //post to public api endpoint
  const handleSubmit = async (
    values: VisitRequestFormValues,
    { setSubmitting, resetForm }: any
  ) => {
    try {
      const response = await api.post('/api/public/visit-requests', {
        ...values,
        home: { id: homeId },
        requestedDate: formatDateForInput(values.requestedDate),
      });
      console.log(response.data);
      alert(
        'Request submitted successfully! Our agents will be in touch soon.'
      );
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting request. Please try again.');
    }
    setSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-content z-50">
      <div className="bg-primary p-8 rounded-lg w-full flex flex-col items-center max-h-screen overflow-y-auto sm:mx-5 md:mx-20 lg:w-1/2 lg:h-5/6">
        <button type="button" onClick={onClose} className="mx-auto">
          <Plus className="size-5 stroke-content rotate-45 mb-8 sm:size-10" />
        </button>
        <h2 className="text-4xl font-editorial_ul text-center sm:text-5xl">
          Schedule a Visit!
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={VisitRequestSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className="space-y-6 flex flex-col pt-8 sm:w-[90%] sm:text-xl">
              <Input
                name="visitorName"
                type="text"
                placeholder="Jane Doe"
                autoComplete="given-name"
                labelTitle="Full Name"
              />
              <Input
                name="visitorEmail"
                type="email"
                placeholder="j.doe@company.com"
                autoComplete="email"
                labelTitle="Email Address"
              />
              <Input
                name="visitorPhoneNumber"
                type="text"
                placeholder="000 000 0000"
                autoComplete="tel"
                labelTitle="Phone Number"
                onChange={(e) => {
                  const formattedPhoneNumber = formatPhoneNumber(
                    e.target.value
                  );
                  setFieldValue('visitorPhoneNumber', formattedPhoneNumber);
                }}
              />
              <div className="flex flex-col gap-1">
                <label htmlFor="requestedDate" className="text-lg">
                  Preferred Date of Visit*
                </label>
                <input
                  name="requestedDate"
                  id="requestedDate"
                  type="datetime-local"
                  value={formatDateForInput(values.requestedDate)}
                  onChange={(e) =>
                    setFieldValue('requestedDate', new Date(e.target.value))
                  }
                  className="bg-primary border-b-2 border-content border-opacity-20 focus:border-opacity-100 focus:outline-none"
                />
                <ErrorMessage
                  name="requestedDate"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>

              <Input
                name="visitorComment"
                as="textarea"
                placeholder="I'm interested in one of your homes..."
                autoComplete="off"
                labelTitle="Comment"
                className="h-28"
              />
              <div className="flex justify-end space-x-2">
                <SubmitButton
                  isSubmitting={isSubmitting}
                  text={isSubmitting ? 'Submitting...' : 'Submit'}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default VisitRequestModalForm;
