import useWindowWide from '~/hooks/useWindowWide';
//
import Footer from '../components/Footer';
import Header from '../components/Header';

export type HeaderOnlyProps = {
  children: React.ReactElement;
};

const HeaderOnly = ({ children }: HeaderOnlyProps) => {
  const width = useWindowWide();

  return (
    <div>
      <Header />
      <div
        className={`${
          width <= 768 || width >= 910 ? 'mt-[75px]' : 'mt-[105px]'
        }`}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default HeaderOnly;
