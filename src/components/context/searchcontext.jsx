import { createContext, useState } from "react";

export const SearchContext = createContext({})

const SearchProvider = (props) => {
    const [search, setSearch] = useState(false);

    const hideSearch = () => {
      setSearch(false);
    };
  
    const showSearch = () => {
      setSearch(true);
    };

    return <SearchContext.Provider value={{search, hideSearch, showSearch}}>{props.children}</SearchContext.Provider>
}

export default SearchProvider