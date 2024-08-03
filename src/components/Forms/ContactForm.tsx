/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import api from '../../api/axios';
import { phoneRegExp, formatPhoneNumber } from '../../utils/phoneUtils';
import Input from './FormUI/Input';
import SubmitButton from './FormUI/SubmitButton';

interface ContactFormValues {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

//Define validation schema for form
const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
  message: Yup.string().required('Message is required'),
});

const ContactForm = () => {
  //Define initial values for form
  const initialValues: ContactFormValues = {
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  };

  //post to public api endpoint
  const handleSubmit = async (
    values: ContactFormValues,
    { setSubmitting, resetForm }: any
  ) => {
    try {
      const response = await api.post('/api/public/contact-messages', values);
      console.log(response.data);
      alert('Message sent successfully!');
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error sending message. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form className="space-y-6 flex flex-col pt-8">
          <Input
            name="name"
            type="text"
            placeholder="Jane Doe"
            autoComplete="given-name"
            labelTitle="Full Name"
          />

          <Input
            name="email"
            type="email"
            placeholder="j.doe@company.com"
            autoComplete="email"
            labelTitle="Email Address"
          />

          <Input
            name="phoneNumber"
            type="text"
            placeholder="000 000 0000)"
            autoComplete="tel"
            labelTitle="Phone Number"
            onChange={(e) => {
              const formattedPhoneNumber = formatPhoneNumber(e.target.value);
              setFieldValue('phoneNumber', formattedPhoneNumber);
            }}
          />

          <Input
            name="message"
            as="textarea"
            placeholder="I'm interested in one of your services..."
            autoComplete="off"
            labelTitle="Message"
            className="h-28"
          />

          <SubmitButton isSubmitting={isSubmitting} text="Send Message" />
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
