import React, { useState, useEffect } from "react";
import { SearchInput, Button } from "evergreen-ui";
import "./index.css";

const filterKeywords = ({ text, data, setData }) => {
  const resultSet = data.filter((d) => d["title"].includes(text));
  setData(resultSet);
};

const SearchBar = ({ data, setData }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    setData(data);
  }, [text]);

  return (
    <div className="searchBar">
      <SearchInput onChange={(e) => setText(e.target.value)} />
      <Button
        marginLeft={15}
        appearance="primary"
        onClick={() => filterKeywords({ text, data, setData })}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
