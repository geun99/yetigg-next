"use client";

import { useState } from "react";
import { SearchBoxStyle } from "./style";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <SearchBoxStyle>
      <form className="searchBox" onSubmit={handleSearch}>
        <input
          type="text"
          className="search"
          placeholder="몬스터나 아이템 이름을 입력하세요"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="searchButton">
          🔍
        </button>
      </form>
    </SearchBoxStyle>
  );
};

export default SearchBox;
