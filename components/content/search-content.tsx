import React from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { TSearchData } from "@/hook/use-search";

type THeaderSearchContent = {
  searchData: TSearchData;
};

const HeaderSearchContent: React.FC<THeaderSearchContent> = ({
  searchData,
}) => {
  return (
    <ul>
      {searchData.map((data, index) => (
        <li key={index} className="px-3">
          <div className="mb-4">
            <h3 className="mt-6 text-xs font-bold uppercase">
              {data.name}
              <span className="inline-block pl-1 text-title">
                {data.data.length}
              </span>
            </h3>

            <Separator className="mt-4 h-[2px] w-full bg-accent" />
          </div>
          <ul className="flex flex-col">
            {data.data.map((item, index) => (
              <li key={index} className=" cursor-pointer">
                <div
                  className="flex items-center gap-4  hover:bg-accent p-3 rounded-sm my-[-2px] 
                
                transition-all duration-200 ease-in out"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="mb-[-2px] text-sm font-medium">{item.name}</p>
                    <span className="text-xs text-title">{item.username}</span>
                  </div>
                </div>

                <Separator className="w-[98%] m-auto border-accent rounded-md" />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default HeaderSearchContent;
