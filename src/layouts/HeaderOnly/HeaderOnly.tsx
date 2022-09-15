import Footer from '../components/Footer';
import Header from '../components/Header';

type HeaderOnlyProps = {
  children: React.ReactElement;
};

const HeaderOnly = ({ children }: HeaderOnlyProps) => {
  return (
    <div>
      <Header />
      <div className='mt-[136px]'>{children}</div>
      <Footer />
    </div>
  );
};

export default HeaderOnly;
