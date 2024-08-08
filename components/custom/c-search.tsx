"use client";

import React from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { users } from "@/utils/data";
import { Button } from "../ui/button";
import Image from "next/image";

type TRRSearch = {
  placeholder?: string;
};

const RRCSearch: React.FC<TRRSearch> = (props) => {
  return (
    <Autocomplete
      classNames={{
        base: "max-w-xs !rounded-lg",
        listboxWrapper: "max-h-[320px] overflow-scroll",
        listbox: "flex items-center justify-between",
        selectorButton:
          "data-[open=true]:rotate-180 transition-all duration-500 size-[20px]",
        clearButton:
          " data-[visible=true]:opacity-100 opacity-0 pr-1 size-[20px] hover:opacity-100",
      }}
      className="mt-2 border"
      defaultItems={users}
      inputProps={{
        classNames: {
          input: "ml-1 bg-transparent ",
          inputWrapper: "h-[48px]",
        },
      }}
      listboxProps={{
        hideSelectedIcon: false,
        itemClasses: {
          base: [
            "rounded-lg",
            "transition-opacity",
            "transition-all duration-300",
            "data-[hover=true]:bg-secondary",
          ],
        },
      }}
      placeholder={props.placeholder || "Search"}
      popoverProps={{
        classNames: {
          content: "border rounded-lg shadow-lg bg-background",
        },
      }}
      startContent={
        <SearchIcon className="mr-1 text-default" strokeWidth={2.5} size={20} />
      }
      radius="full"
      variant="bordered"
      aria-label="Select an employee"
    >
      {(item) => (
        <AutocompleteItem key={item.id} textValue={item.name}>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Image
                alt={item.name}
                className="flex-shrink-0 w-[32px] h-[32px] rounded-full"
                src={item.avatar}
                width={32}
                height={32}
              />
              <div className="flex flex-col">
                <span className="text-base">{item.name}</span>
                <span className="text-xs text-muted-foreground">
                  {item.team}
                </span>
              </div>
            </div>
            <Button className=" absolute right-2 bg-transparent hover:bg-transparent  text-foreground">
              Add
            </Button>
          </div>
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
};

export default RRCSearch;

const SearchIcon = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}: {
  size?: number;
  strokeWidth?: number;
  width?: number;
  height?: number;
  [x: string]: any;
}) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={height || size}
    role="presentation"
    viewBox="0 0 24 24"
    width={width || size}
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    />
  </svg>
);
