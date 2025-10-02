import type React from "react";
import SearchBar from "../../filter/search/SearchBar";

const SearchBar_BTN: React.FC = () => {

    const searchfunc = (searchStr: string) => {
        console.log('Searched for ' + searchStr);
    };

  return (
    <>
        <form 
            className="h-min pl-3 py-1"
        >

            <SearchBar placeholder="Search..." searchfunc={searchfunc}/>

            <button type="submit">Search</button>
        </form>
    </>
  )
}

export default SearchBar_BTN;