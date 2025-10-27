import React from "react";
import { FaTrash } from "react-icons/fa";
import Icon from "./icon";

interface DataTab {
  id: string | number;
  title?: string;
  content?: React.ReactNode;
  time?: string;
  read?: boolean;
}

interface VerticalTabsProps {
  data: DataTab[];
  activeId?: string | number;
  onTabSelect?: (id: string | number) => void;
  className?: string;
  tabClassName?: string;
  activeTabClassName?: string;
}

const VerticalTabs: React.FC<VerticalTabsProps> = ({
  data,
  activeId,
  onTabSelect,
  className = "",
  tabClassName = "",
  activeTabClassName = "",
}) => {
  const [currentActiveId, setCurrentActiveId] = React.useState<
    string | number | undefined
  >(activeId ?? (data.length > 0 ? data[0].id : undefined));

  const handleTabClick = (id: string | number) => {
    setCurrentActiveId(id);
    onTabSelect && onTabSelect(id);
  };

  return (
    <div
      className={`flex flex-col w-full overflow-y-scroll no-scrollbar max-h-[500px] gap-4 ${className}`}

    >
      {data.map((tab) => (
        <div className="flex flex-row justify-between">

          <div
            key={tab.id}
            className={`flex flex-row flex-[7] justify-between w-full cursor-pointer p-3 border rounded-lg  ${currentActiveId === tab.id ? "bg-gray-200 font-semibold" : ""
              } ${tabClassName} ${currentActiveId === tab.id ? activeTabClassName : ""
              }`}
            style={{ border: `1px solid ${tab.read ? 'rgba(16, 185, 129, 1)' : 'rgba(124, 58, 237, 1)'}`, backgroundColor: `${tab.read ? 'rgba(7, 255, 110, .1)' : 'rgba(124, 58, 237, .1)'}` }}
            onClick={() => handleTabClick(tab.id)}
          >
            <div className="flex flex-col flex-4 items-start ">
              <p className="text-sm text-gray-400">{tab.time}</p>
              <h1 className="">{tab.title}</h1>
              {currentActiveId === tab.id && (
                <div className="mt-4 text-gray-400 text-sm">{tab.content}</div>
              )}

            </div>
            <div className="flex flex-col flex-4 items-center justify-center ">
              <h5 className={`font-bold text-sm`} style={{ color: tab.read ? "rgba(16, 185, 129, 1)" : "rgba(124, 58, 237, 1)" }}>
                {
                  tab.read ? 'Read' : 'Unread'
                }
              </h5>
            </div>
          </div>
          <div className="flex flex-row flex-1 items-center justify-center">
            <Icon icon={FaTrash} className="text-red-700"></Icon>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTabs;
