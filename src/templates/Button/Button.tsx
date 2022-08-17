type ButtonProps = {
  label: string;
};

const Button = (props: ButtonProps) => {
  const { label } = props;
  return (
    <button className='middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'>
      {label}
    </button>
  );
};

export default Button;
