"use client";

import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";

type TSearchComp = {
  search?: string;
  onChange?: (value: string) => void;
  onFocusChange?: (value: boolean) => void;
  className?: string;
  autofocus?: boolean;
  onClick?: () => void;
};

const SearchComp: React.FC<TSearchComp> = ({
  search,
  onChange,
  onFocusChange,
  className,
  autofocus = false,
  onClick,
}) => {
  return (
    <div
      className={cn("relative w-[330px]", className)}
      onClick={(e) => {
        e.stopPropagation();
        onClick && onClick();
      }}
    >
      <Input
        id="search"
        autoFocus={autofocus}
        className="h-[48px] w-full rounded-[30px] bg-accent pl-[3rem] text-base"
        placeholder="Search for a token"
        value={search || ""}
        onChange={(e) => onChange && onChange(e.target.value)}
        onFocus={() => onFocusChange && onFocusChange(true)}
        autoComplete="off"
      />
      <SearchIcon className="absolute left-3 top-[50%] h-5 w-5 -translate-y-1/2 transform opacity-80" />
      {search?.trim() && (
        <X
          className="absolute right-[16px] top-[50%] h-5 w-5 -translate-y-1/2 transform cursor-pointer opacity-80"
          onClick={() => onChange && onChange("")}
          color="#878787"
        />
      )}
    </div>
  );
};

export default SearchComp;
