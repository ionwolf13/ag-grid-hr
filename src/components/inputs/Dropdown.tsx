import React from "react";
import { ChevronDown } from "lucide-react";

interface DropdownInterface {
  items: string[];
}
const mockItems = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Grape",
  "Kiwi",
  "Mango",
  "Orange",
  "Peach"
];

export const Dropdown: React.FC<DropdownInterface> = ({
  items = mockItems
}) => {
  const [query, setQuery] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  // Filter items based on query
  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-64">
      <ChevronDown
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-2 top-1.5"
      />
      <input
        type="text"
        className="w-full px-4 py-1 border rounded dark:bg-[#182230] focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="All Departments"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        onBlur={() => {
          // Delay hiding so click on dropdown works
          setTimeout(() => setIsOpen(false), 100);
        }}
      />

      {isOpen && filtered.length > 0 && (
        <ul className="absolute z-10 w-full dark:bg-[#182230] border rounded mt-1 max-h-40 overflow-auto shadow-lg">
          {filtered.map((item) => (
            <li
              key={item}
              className="px-4 py-2 hover:bg-[#374c86] cursor-pointer"
              onMouseDown={() => {
                setQuery(item);
                setIsOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
