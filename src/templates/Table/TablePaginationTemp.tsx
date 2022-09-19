type TablePaginationTempProps = {
  current: number;
  total: number;
};

const TablePaginationTemp = (props: TablePaginationTempProps) => {
  const { total } = props;

  const renderPagination = () => {
    const page: any[] = [];
    for (let i = 1; i <= total; i++) {
      page.push(<span>i</span>);
    }
    return page;
  };

  return <div>{renderPagination()}</div>;
};

export default TablePaginationTemp;
