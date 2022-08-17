type RadioProps = {
  id: string;
  name: string;
  label: string;
  color?: 'red' | 'blue' | 'gray';
};

const colorConstant = {
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  gray: 'bg-gray-500',
};

const Radio = (props: RadioProps) => {
  const { id, name, label, color = 'gray' } = props;
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
        className={`${colorConstant[color]} font-light select-none cursor-pointer mt-px px-2 text-white rounded-lg`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;
