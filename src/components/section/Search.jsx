import React from "react";

const Search = () => {
  return (
    <div id="search">
      <div className="search__inner">
        <label htmlFor="searchInput">
          <span className="ir">검색</span>
        </label>
        <input
          type="search" // 검색 필드 제공 일반적으로 자동 완성 및 검색과 관련된 UI
          id="searchInput"
          placeholder="검색어를 입력해주세요"
          autoComplete="off" // 자동 완성 비활성화 보안 상의 이유로 사용
          className="search__input"
        />
      </div>
    </div>
  );
};

export default Search;
