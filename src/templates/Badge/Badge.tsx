import classNames from 'classnames/bind';

type BadgeProps = {
  point: number;
};

const Badge = (props: BadgeProps) => {
  const { point } = props;
  return (
    <div className='relative'>
      <div
        className={classNames(
          'box-content absolute top-[-35px] left-4 leading-5 bg-red-500 border-white border-2 rounded-full text-center',
          point < 10 ? 'w-5' : 'w-[130%]',
        )}
      >
        <span className='text-white text-sm'>{point}</span>
      </div>
    </div>
  );
};

export default Badge;
