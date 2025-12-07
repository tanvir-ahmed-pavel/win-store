import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <>
      <div className="bg-white rounded-md text-gray-400 text-sm flex items-center lg:w-[534px] h-[39px]">
        <div className="px-3 h-full border-r-2">
          <select className="outline-none bg-transparent h-full">
            <option selected>All categories</option>
            <option>Test 1</option>
            <option>Test 2</option>
          </select>
        </div>

        <input
          type="text"
          name="search"
          placeholder="Search"
          className="outline-none bg-transparent w-full h-full px-3"
        ></input>

        <div className="bg-gray-400 h-full px-3 py-2 rounded-r-md text-white">
          <Search size={20}></Search>
        </div>
      </div>
    </>
  );
}
