type ChipProps = {
  label: string;
  color?: 'red' | 'blue' | 'gray';
};

const colorConstant = {
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  gray: 'bg-gray-500',
};

const Chip = (props: ChipProps) => {
  const { label, color = 'blue' } = props;
  const chipColor: string = colorConstant[color];

  return (
    <div
      className={`relative inline-block align-baseline font-sans text-xs font-bold uppercase center leading-none whitespace-nowrap py-2 px-3.5 rounded-lg select-none ${chipColor} text-white`}
    >
      <div className='mt-px'>{label}</div>
    </div>
  );
};

export default Chip;
