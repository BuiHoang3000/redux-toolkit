export type CarouselItem = {
  id: number | string;
  url: string;
  title?: string;
  content?: string;
  price?: string;
};

type CarouselGoToPageTempProps = {
  data: any[];
  active: number;
  setActive: (index: number) => void;
};

const CarouselGoToPageTemp = (props: CarouselGoToPageTempProps) => {
  const { data, active, setActive } = props;

  return (
    <div className='absolute right-0 bottom-0 left-0 flex flex-initial justify-center p-0 mx-1 mb-4 z-[2] h-1 -indent-96 cursor-pointer bg-clip-padding'>
      {data.map((item: CarouselItem, index: number) => (
        <button
          key={item.id}
          className={`
                  w-8 mx-0.5 rounded-md
                  ${index === active ? 'bg-white' : 'bg-gray-500'}
                  `}
          onClick={() => setActive(index)}
        ></button>
      ))}
    </div>
  );
};

export default CarouselGoToPageTemp;
