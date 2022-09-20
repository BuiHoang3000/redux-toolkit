import { TableContextProvider } from '~/templates/Table';
import Product from './Product';

const Collection = () => {
  return (
    <div>
      <TableContextProvider>
        <Product />
      </TableContextProvider>
    </div>
  );
};

export default Collection;
