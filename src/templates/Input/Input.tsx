type InputProps = {
  placeholder?: string;
  value: string;
  className?: string;
  onChange: (e: any) => void;
};

const Input = (props: InputProps) => {
  const { placeholder, value, className, onChange } = props;

  return (
    <div className='relative w-full min-w-[200px] h-10'>
      <input
        type='text'
        className={`w-full h-full bg-transparent text-gray-700 font-normal outline outline-0 focus:outline-0 transition-all border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] border-gray-400 ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Input;
