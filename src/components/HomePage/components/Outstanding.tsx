import { CarouselItem } from '~/templates/Carousel';
import outstanding1 from '~/assets/images/outstanding_1.webp';
import outstanding2 from '~/assets/images/outstanding_2.webp';

const listOutstanding: CarouselItem[] = [
  {
    id: 1,
    url: outstanding1,
    title: 'MIDI DRESS',
  },
  {
    id: 2,
    url: outstanding2,
    title: 'NEW COLLECTION',
  },
];

const Outstanding = () => {
  return (
    <div className='flex relative'>
      {listOutstanding.map((item: CarouselItem) => (
        <div className='p-1 w-1/2' key={item.id}>
          <img src={item.url} className='w-full object-cover' />
          <div className={`inline-flex justify-between p-4 w-full bg-gray-200`}>
            <h5 className='text-xs font-semibold text-gray-800'>
              {item.title}
            </h5>
            <h5 className='text-xs text-gray-800'>SHOP NOW</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Outstanding;
