import { ReactNode } from 'react';

type CheckboxProps = {
  id: string;
  checked: boolean;
  children: ReactNode;
};

const Checkbox = (props: CheckboxProps) => {
  const { id, checked, children } = props;
  return (
    <div className='inline-flex items-center'>
      <label
        className='relative flex items-center cursor-pointer p-3 rounded-full'
        htmlFor={id}
      >
        <input
          type='checkbox'
          className="peer relative appearance-none w-5 h-5 border rounded-md border-blue-gray-200 cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-blue-500 checked:border-blue-500 checked:before:bg-blue-500"
          id={id}
          defaultChecked={checked}
        />
        <div className='text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-3.5 w-3.5'
            viewBox='0 0 20 20'
            fill='currentColor'
            stroke='currentColor'
            strokeWidth='1'
          >
            <path
              fillRule='evenodd'
              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
              clipRule='evenodd'
            ></path>
          </svg>
        </div>
      </label>
      <label
        className='text-gray-700 font-light select-none cursor-pointer mt-px'
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
