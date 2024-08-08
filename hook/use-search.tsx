"use client";

import { useEffect, useState } from "react";
import user_logo from "@/public/android-chrome-192x192.png";

const dummyData = [
  {
    name: "users",
    data: [
      {
        image: user_logo,
        name: "MemeMonic",
        username: "MemeMonic",
      },
      {
        image: user_logo,
        name: "MemeZila",
        username: "MemeZila",
      },
      {
        image: user_logo,
        name: "MemeBorn",
        username: "MemeBorn",
      },
    ],
  },
  {
    name: "Token",
    data: [
      {
        image: user_logo,
        name: "Meme Lord",
        username: "MemeLord",
      },

      {
        image: user_logo,
        name: "Meme Hub",
        username: "MemeHub",
      },
      {
        image: user_logo,
        name: "Meme D",
        username: "MemeD",
      },
      {
        image: user_logo,
        name: "Meme Lord",
        username: "MemeLord",
      },
      {
        image: user_logo,
        name: "Meme Lord",
        username: "MemeLord",
      },

      {
        image: user_logo,
        name: "Meme Hub",
        username: "MemeHub",
      },
      {
        image: user_logo,
        name: "Meme D",
        username: "MemeD",
      },
      {
        image: user_logo,
        name: "Meme Lord",
        username: "MemeLord",
      },
    ],
  },
];
export type TSearchData = typeof dummyData;

const useSearch = () => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState<TSearchData>([]);
  const [isActive, setIsActive] = useState(false);

  const handleSearch = (value: string) => {
    setSearch(value);

    if (value?.toLowerCase() === "meme") {
      setSearchData(dummyData);
    } else {
      setSearchData([]);
    }
  };
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        !e.target.closest(".dropdown-height") &&
        !e.target.closest(".header-search")
      ) {
        setSearchData([]);
        setIsActive(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return {
    search,
    searchData,
    handleSearch,
    dummyData,
    setSearchData,
    isActive,
    setIsActive,
  };
};

export default useSearch;
