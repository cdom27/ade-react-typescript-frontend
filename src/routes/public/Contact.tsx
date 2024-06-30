import ContactForm from '../../components/Forms/ContactForm';
import PageLayout from '../../layouts/PageLayout';

const Contact = () => {
  return (
    <PageLayout>
      <div className="space-y-10 pb-28 px-6">
        <ContactForm />
      </div>
    </PageLayout>
  );
};

export default Contact;
