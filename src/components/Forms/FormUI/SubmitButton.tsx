import { Arrow } from '../../Icons';

interface SubmitButtonProps {
  isSubmitting: boolean;
  text: string;
}

const SubmitButton = ({ isSubmitting, text }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="mt-8 w-full group relative overflow-hidden font-fraktion_reg flex items-center justify-between text-md border-[2px] rounded-full px-9 py-4 transition-colors duration-300 ease-in-out text-content hover:text-primary border-content hover:bg-content active:bg-content"
    >
      <span className="relative z-10">{text}</span>
      <Arrow className="size-5 relative z-10 transition-all duration-300 ease-in-out stroke-content group-hover:stroke-primary rotate-[-45deg] group-hover:rotate-0 group-active:rotate-0" />
      <div className="absolute inset-0 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0 bg-content" />
    </button>
  );
};

export default SubmitButton;
