import Header from '../components/Header';

type DefaultLayoutProps = {
  children: React.ReactElement;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default DefaultLayout;
