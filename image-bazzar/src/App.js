import { useEffect, useState } from "react";
import { ImagesList } from "./components/ImagesList";
import { Pagination } from "./components/Pagination";
import { SearchBar } from "./components/SearchBar";
import "./styles/app.scss";
import axios from "axios";
import { Button, Spin } from "antd";

const App = () => {
  const [apiStatus, setApiStatus] = useState("init");
  const [pageNumber, setPageNumber] = useState(1);
  const [query, setQuery] = useState("rain");
  const [data, setData] = useState(null);

  const isLoading = apiStatus === "pending" || apiStatus === "init";

  const fetchImages = async () => {
    try {
      setApiStatus("pending");
      const response = await axios({
        url: "https://api.unsplash.com/search/photos",
        method: "GET",
        params: {
          page: pageNumber,
          query,
          client_id: "6YXNHArV-pApjJMPnTDs5O-Sxtjmt3opb_RiY5hXG7U",
        },
      });
      setApiStatus("success");
      setData(response.data);
    } catch (error) {
      setApiStatus("error");
      alert("Something went wrong");
    }
  };

  const updateQuery = (newQuery) => {
    setQuery(newQuery);
    setPageNumber(1);
  };

  useEffect(() => {
    if (query && pageNumber >= 1) {
      fetchImages();
    }
  }, [query, pageNumber]);

  return (
    <div className="container">
      <SearchBar updateQuery={updateQuery} defaultValue={query} />
      <div className="images-list">
        {isLoading ? (
          <Spin className="loader" />
        ) : apiStatus === "error" ? (
          <Button onClick={fetchImages}>Retry</Button>
        ) : (
          <ImagesList data={data} />
        )}
      </div>
      <Pagination
        totalPages={data?.total_pages}
        activePage={pageNumber}
        setPageNumber={setPageNumber}
        isLoading={isLoading}
      />
    </div>
  );
};

export default App;
// optional chaining operator:
// null coelcing operator
