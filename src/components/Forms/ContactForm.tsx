/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import api from '../../api/axios';

interface ContactFormValues {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const phoneRegExp = /^(\d{3})-(\d{3})-(\d{4})$/;

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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue }) => (
        <Form className="space-y-4">
          <div>
            <label htmlFor="name" className="font-semibold text-lg">
              Name
            </label>
            <Field
              type="text"
              name="name"
              id="name"
              placeholder="Full name"
              autoComplete="given-name"
              className="w-full p-2 border-b-2 border-content-secondary bg-bg-primary font-medium text-md border-opacity-70 focus:border-content-primary focus:outline-none"
            />
            <ErrorMessage
              name="name"
              component="span"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="font-semibold text-lg">
              Email
            </label>
            <Field
              type="email"
              name="email"
              placeholder="yourname@company.com"
              id="email"
              autoComplete="email"
              className="w-full p-2 border-b-2 border-content-secondary bg-bg-primary font-medium text-md border-opacity-70 focus:border-content-primary focus:outline-none"
            />
            <ErrorMessage
              name="email"
              component="span"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="font-semibold text-lg">
              Phone Number
            </label>
            <Field name="phoneNumber">
              {({ field }: any) => (
                <input
                  {...field}
                  type="text"
                  id="phoneNumber"
                  placeholder="000 000 0000"
                  autoComplete="tel"
                  className="w-full p-2 border-b-2 border-content-secondary bg-bg-primary font-medium text-md border-opacity-70 focus:border-content-primary focus:outline-none"
                  onChange={(e) => {
                    const formattedPhoneNumber = formatPhoneNumber(
                      e.target.value
                    );
                    setFieldValue('phoneNumber', formattedPhoneNumber);
                  }}
                />
              )}
            </Field>
            <ErrorMessage
              name="phoneNumber"
              component="span"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="font-semibold text-lg">
              Message
            </label>
            <Field
              as="textarea"
              name="message"
              id="message"
              placeholder="I'm interested in your property..."
              className="w-full p-2 border-b-2 border-content-secondary h-32 bg-bg-primary font-medium text-md border-opacity-70 focus:border-content-primary focus:outline-none"
            />
            <ErrorMessage
              name="message"
              component="span"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-accent text-content-primary p-4 disabled:opacity-50 font-semibold text-xl"
          >
            Send Message
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
