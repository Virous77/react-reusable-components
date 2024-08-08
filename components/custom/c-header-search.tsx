"use client";

import React from "react";
import { cn } from "@/lib/utils";
import useSearch from "@/hook/use-search";
import HeaderSearchContent from "../content/search-content";
import SearchComp from "../content/search";

const HeaderSearch = () => {
  const {
    search,
    searchData,
    handleSearch,
    setSearchData,
    dummyData,
    isActive,
    setIsActive,
  } = useSearch();

  return (
    <div className="relative">
      <div className="header-search ">
        <SearchComp
          onClick={() => setIsActive(true)}
          search={search}
          onChange={handleSearch}
          onFocusChange={(e) => {
            if (e && search.length > 0 && search?.toLowerCase() === "meme") {
              setSearchData(dummyData);
            }
          }}
        />
      </div>
      <div
        className={cn(
          "z-50",
          isActive && (searchData.length > 0 || search.length > 3)
            ? "visible translate-y-4 opacity-100 transition-all duration-500 ease-in-out"
            : "invisible opacity-0"
        )}
      >
        <div
          className={cn(
            "header-search min-h-fit max-h-[calc(100vh-200px)]  absolute z-[50] w-[21rem] overflow-y-scroll rounded-3xl border  bg-background p-3 pt-0  transition-all duration-300 shadow-2xl",
            searchData.length === 0 && search.length > 3 && "p-3"
          )}
        >
          {searchData.length === 0 && search.length > 3 && (
            <div className="flex items-center justify-center h-fit">
              <p className="text-base">No result found</p>
            </div>
          )}
          <HeaderSearchContent searchData={searchData} />
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
