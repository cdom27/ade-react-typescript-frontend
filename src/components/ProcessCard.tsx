interface ProcessCardProps {
  title: string;
  children: React.ReactNode;
  imgUrl: string;
  imgClassName?: string;
}

const ProcessCard = ({ title, children, imgUrl }: ProcessCardProps) => {
  return (
    <div className="text-left">
      <img
        src={imgUrl}
        alt={title}
        className="rounded-xl object-cover h-[300px] w-full"
      />
      <div>
        <h3 className="text-3xl font-editorial_ul pt-4 text-left">{title}</h3>
        <div className="pt-4 space-y-4">{children}</div>
      </div>
    </div>
  );
};

export default ProcessCard;
