const Spinner = () => {
  return (
    <div className='fixed grid h-[100vh] w-[100vw] top-0 left-0 bg-white opacity-50 z-[999]'>
      <div
        className='mx-auto my-[50vh] spinner-border animate-spin inline-block w-8 h-8 border-t-2 border-l-2 border-b-2 rounded-full border-teal-600'
        role='status'
      ></div>
    </div>
  );
};

export default Spinner;
