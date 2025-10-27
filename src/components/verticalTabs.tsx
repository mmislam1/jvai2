import React from "react";

interface DataTab {
  id: string | number;
  title: string;
  content: React.ReactNode;
  color?:string;
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
      className={`flex flex-col w-full overflow-y-auto hide-scrollbar gap-4 ${className}`}
      
    >
      {data.map((tab) => (
        <div
          key={tab.id}
          className={`w-full cursor-pointer p-3 border rounded-lg  ${
            currentActiveId === tab.id ? "bg-gray-200 font-semibold" : ""
          } ${tabClassName} ${
            currentActiveId === tab.id ? activeTabClassName : ""
          }`}
          onClick={() => handleTabClick(tab.id)}
        >
          <div>{tab.title}</div>
          {currentActiveId === tab.id && (
            <div className="mt-2 text-sm text-gray-700">{tab.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VerticalTabs;
