import { Button } from "antd";
import { useState } from "react";

export const SearchBar = ({ updateQuery, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);

  const onChangeText = (e) => {
    setValue(e.target.value);
  };

  const searchImages = () => {
    updateQuery(value);
  };

  return (
    <div className="search-bar">
      <input
        placeholder="Search Images..."
        onChange={onChangeText}
        value={value}
      />
      <Button className="btn" onClick={searchImages}>
        Search
      </Button>
    </div>
  );
};
