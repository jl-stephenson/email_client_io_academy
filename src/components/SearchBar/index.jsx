import React from "react";




const SearchBar = ({ setSearchTerm }) => {
  return (
    <>
      <div className="p-2">
        <label>
          <input
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            name="myInput"
            placeholder="Search..."
            className="border-grey-400 border-2 rounded-lg p-1 w-full"
          />
        </label>
      </div>
    </>
  );
};

export default SearchBar;
