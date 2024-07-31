interface IconsProps {
  className: string;
}

const Icons = () => {
  return <div>Icons</div>;
};

export const Arrow = ({ className }: IconsProps) => {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.999768 5.81371H16.6272M16.6272 5.81371L11.418 0.604569M16.6272 5.81371L11.418 11.0228"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Plus = ({ className }: IconsProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 1V15M1 8H15"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Minus = ({ className }: IconsProps) => {
  return (
    <svg
      width="16"
      height="2"
      viewBox="0 0 16 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 1H15"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const X = ({ className }: IconsProps) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13 1L1 13M1 1L13 13"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Icons;
