type InputProps = {
  placeholder?: string;
};

const Input = (props: InputProps) => {
  const { placeholder } = props;

  return (
    <div className='relative w-full min-w-[200px] h-10'>
      <input
        type='text'
        className='w-full h-full bg-transparent text-blue-gray-700 font-normal outline outline-0 focus:outline-0 transition-all border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500'
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
