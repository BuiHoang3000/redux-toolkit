import { TableContextProvider } from '~/templates/Table';
import Product from './Product';

const Collection = () => {
  return (
    <div className='bg-gray-500'>
      <TableContextProvider>
        <Product />
      </TableContextProvider>
    </div>
  );
};

export default Collection;
