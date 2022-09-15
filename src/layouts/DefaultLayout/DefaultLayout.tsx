import Footer from '../components/Footer';
import Header from '../components/Header';

type DefaultLayoutProps = {
  children: React.ReactElement;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
