type InputProps = {
  placeholder?: string;
  value: string;
  onChange: (e: any) => void;
};

const Input = (props: InputProps) => {
  const { placeholder, value, onChange } = props;

  return (
    <div className='relative w-full min-w-[200px] h-9'>
      <input
        type='text'
        className='w-full h-full bg-transparent text-gray-700 font-normal outline outline-0 focus:outline-0 transition-all border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] border-gray-200 focus:border-gray-400'
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Input;
