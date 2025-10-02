import type React from "react";
import { useState } from "react";
import type { SearchProps } from "../../../../types/componentInters/SearchPropsInter";

const SearchBar: React.FC<SearchProps> = ({ placeholder, searchfunc }) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        searchfunc(event.target.value);
    };

  return (
    <>
        <input 
            type="text" 
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleChange}
            className="h-min pl-3 py-1"
        />
    </>
  )
}

export default SearchBar;