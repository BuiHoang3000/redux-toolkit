import logo from '~/assets/images/logo.webp';
//
import MenuNavbar from './MenuNavbar';
import RightTools from './RightTools';

const Header = () => {
  return (
    <div className='inline-flex items-center p-8 w-full'>
      <div className='w-1/6'>{/* <img src={logo} alt='Logo' /> */}</div>
      <div className='inline-flex items-center flex-wrap justify-end w-full'>
        <MenuNavbar />
        <RightTools />
      </div>
    </div>
  );
};

export default Header;
