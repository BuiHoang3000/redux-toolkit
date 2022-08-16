type RadioProps = {
  id: string;
  name: string;
  label: string;
};

const Radio = (props: RadioProps) => {
  const { id, name, label } = props;
  return (
    <div className='inline-flex items-center'>
      <label className='relative flex items-center cursor-pointer p-3 rounded-full'>
        <input
          id={id}
          name={name}
          type='radio'
          className='relative w-5 h-5 border rounded-full border-blue-gray-200 cursor-pointer transition-all'
        />
      </label>
      <label
        className='text-gray-700 font-light select-none cursor-pointer mt-px'
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;
