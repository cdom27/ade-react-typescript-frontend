/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import api from '../../api/axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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

const phoneRegExp = /^(\d{3})-(\d{3})-(\d{4})$/;

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

  const formatPhoneNumber = (value: string) => {
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7)
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Request a Tour</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={VisitRequestSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className="space-y-4">
              <div>
                <Field
                  name="visitorName"
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage
                  name="visitorName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <Field
                  name="visitorEmail"
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage
                  name="visitorEmail"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <Field name="visitorPhoneNumber">
                  {({ field }: any) => (
                    <input
                      {...field}
                      type="text"
                      id="visitorPhoneNumber"
                      placeholder="000 000 0000"
                      autoComplete="tel"
                      className="w-full p-2 border rounded"
                      onChange={(e) => {
                        const formattedPhoneNumber = formatPhoneNumber(
                          e.target.value
                        );
                        setFieldValue(
                          'visitorPhoneNumber',
                          formattedPhoneNumber
                        );
                      }}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="visitorPhoneNumber"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <input
                  name="requestedDate"
                  type="datetime-local"
                  value={formatDateForInput(values.requestedDate)}
                  onChange={(e) =>
                    setFieldValue('requestedDate', new Date(e.target.value))
                  }
                  className="w-full p-2 border rounded"
                />
                <ErrorMessage
                  name="requestedDate"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <Field
                  name="visitorComment"
                  as="textarea"
                  placeholder="Message"
                  className="w-full p-2 border rounded h-24"
                />
                <ErrorMessage
                  name="visitorComment"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-200 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default VisitRequestModalForm;
