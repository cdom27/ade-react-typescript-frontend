/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, ErrorMessage, useField } from 'formik';

interface InputProps {
  name: string;
  type?: string;
  placeholder: string;
  autoComplete: string;
  className?: string;
  labelTitle: string;
  onChange?: (e: any) => void;
  as?: string;
}

const Input = ({
  name,
  type,
  placeholder,
  autoComplete,
  className = ``,
  labelTitle,
  onChange,
  as,
}: InputProps) => {
  const [field, meta] = useField(name);

  //Update Formik state & call custom onChange if needed
  const handleChange = (e: any) => {
    field.onChange(e);
    if (onChange) onChange(e);
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-lg">
        {labelTitle}*
      </label>
      <Field
        name={name}
        type={type}
        as={as}
        placeholder={placeholder}
        id={name}
        autoComplete={autoComplete}
        className={`bg-primary border-b-2 border-content border-opacity-20 focus:border-opacity-100 focus:outline-none ${className}`}
        onChange={handleChange}
      />
      {meta.touched && meta.error && (
        <ErrorMessage
          name={name}
          component="span"
          className="text-red-500 text-sm"
        />
      )}
    </div>
  );
};

export default Input;
