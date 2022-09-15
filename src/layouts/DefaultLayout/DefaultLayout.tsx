import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from './Sidebar';

type DefaultLayoutProps = {
  children: React.ReactElement;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      <Header />
      <div className='mt-[136px] flex max-w-[1350px] mx-auto px-4'>
        <Sidebar />
        <div className='w-full'>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
