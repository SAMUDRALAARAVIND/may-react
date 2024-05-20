import { Button } from "antd";

export const Pagination = ({
  totalPages,
  activePage,
  setPageNumber,
  isLoading,
}) => {
  const next = () => {
    setPageNumber(activePage + 1);
  };

  const prev = () => {
    setPageNumber(activePage - 1);
  };

  return (
    <div className="pagination">
      <div className="box">
        <Button
          className="material-icons"
          onClick={prev}
          disabled={activePage === 1 || isLoading}
        >
          chevron_left
        </Button>
        <span>{`${activePage}  / ${totalPages ?? 0}`}</span>
        <Button
          className="material-icons"
          onClick={next}
          disabled={activePage === totalPages || isLoading}
        >
          chevron_right
        </Button>
      </div>
    </div>
  );
};
