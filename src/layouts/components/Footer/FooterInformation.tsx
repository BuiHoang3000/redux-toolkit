import bct from '~/assets/images/bct.webp';

const FooterInformation = () => {
  return (
    <div className='py-4 px-3 bg-black text-white text-sm'>
      <div className='flex flex-col sm:flex-row flex-wrap xl:w-[1300px] xl:mx-auto'>
        <div className='my-12 px-4 sm:w-1/2 md:w-4/12'>
          <p className='text-base'>
            NEM FASHION - OFFICE FASHION An Thanh Service and Trading Co., Ltd.
          </p>
          <div>
            Business registration number: 0107861393, Department of Planning and
            investment Hanoi City.
          </div>
          <div>
            Address: Room 1002, floor 10, NEM Tower - 545 Nguyen Van Cu street,
            LongBie, Hanoi.
          </div>
          <div>Hotline: 0243.9388512 - 0246.2909098.</div>
          <div>Email: nem@stripe-vn.com</div>
        </div>

        <div className='my-12 px-4 sm:w-1/2 md:w-1/4'>
          <ul>
            <li>
              <a href='#'>Introduce</a>
            </li>
            <li>
              <a href='#'>Business philosophy at IU2000 Fashion</a>
            </li>
            <li>
              <a href='#'>IU2000's Blog</a>
            </li>
            <li>
              <a href='#'>Recruit</a>
            </li>
            <li>
              <a href='#'>Showroom system</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>

        <div className='my-12 px-4 sm:w-1/2 md:w-1/4'>
          <ul>
            <li>
              <a href='#'>Delivery and shipping policy</a>
            </li>
            <li>
              <a href='#'>Payment guide</a>
            </li>
            <li>
              <a href='#'>Order lookup</a>
            </li>
            <li>
              <a href='#'>Size choice guide</a>
            </li>
            <li>
              <a href='#'>Terms of exchange</a>
            </li>
            <li>
              <a href='#'>Terms of warranty and repair</a>
            </li>
            <li>
              <a href='#'>Loyal customers</a>
            </li>
          </ul>
        </div>

        <div className='my-12 px-4 sm:w-1/2 md:w-2/12'>
          <p className='mb-4'>Payment methods</p>
          <img src={bct} alt='bct' width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default FooterInformation;
