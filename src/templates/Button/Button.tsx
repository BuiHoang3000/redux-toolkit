type ButtonProps = {
  label: string;
  className?: string;
  onClick: () => void;
};

const Button = (props: ButtonProps) => {
  const { label, className, onClick } = props;
  return (
    <button
      className={`middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-black text-white shadow-md focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
