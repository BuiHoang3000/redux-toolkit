import useWindowWide from '~/hooks/useWindowWide';
//
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from './Sidebar';

type DefaultLayoutProps = {
  children: React.ReactElement;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const width = useWindowWide();

  return (
    <div>
      <Header />
      <div
        className={`${
          width <= 768 || width >= 910 ? 'mt-[75px]' : 'mt-[105px]'
        } px-4`}
      >
        Breadcrumb
      </div>
      <div className='md:mx-auto xl:w-[1300px] flex max-w-[1350px] mx-auto px-4'>
        <Sidebar />
        <div className='w-full'>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
