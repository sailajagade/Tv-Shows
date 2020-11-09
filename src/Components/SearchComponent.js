import React from "react";
import "../Css/Shows.css";

const SearchComponent = (props) => {
  const { onShowSearch } = props;

  return (
    <div class="row nav">
      <div class="col-lg-2 mt-4 marginLeft" >
       <b><h1 className=" mt-3 color" >TV Shows</h1></b>
      </div>
      <div class="col-lg-5 mt-3">
        <input
          id="searchbox"
          placeholder=""
          onKeyUp={(event) => onShowSearch(event)}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
