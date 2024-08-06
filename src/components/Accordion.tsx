import React, { useState, ReactNode, ReactElement } from 'react';
import { Minus } from './Icons';

interface AccordionProps {
  children: ReactElement<AccordionItemProps>[];
}

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  onClick?: () => void;
}

const AccordionItem = ({
  title,
  children,
  isOpen = false,
  onClick,
}: AccordionItemProps) => {
  return (
    <div className="border-t-[1px] border-b-[1px] border-content h-full">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="font-haas_md w-3/4">{title}</span>

        <div className="relative w-4 h-4">
          <Minus className="stroke-content size-4 absolute top-0 left-0" />
          <Minus
            className={`stroke-content size-4 absolute top-0 left-0 transform transition-transform duration-200 ${
              isOpen ? 'rotate-0' : 'rotate-90'
            }`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'h-full opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-6 font-haas_roman">{children}</div>
      </div>
    </div>
  );
};

const Accordion = ({ children }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border-t-[1px] border-b-[1px] border-content">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen: openIndex === index,
            onClick: () => handleItemClick(index),
          });
        }
        return child;
      })}
    </div>
  );
};

export { Accordion, AccordionItem };
