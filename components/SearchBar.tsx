"use client";

// import { SearchManufacturer } from "@/components";
import { useState } from "react";
import { SearchManufacturer } from "./SearchManufacturer";

export const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");
  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
};
