/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const SearchQuery = createContext(null);

const SearchQueryWrapper = ({ children }) => {
	const [searchQ, setSearchQ] = useState("");
	const handleSearchQ = (value) => {
		setSearchQ(value);
	};

	return (
		<SearchQuery.Provider value={{ searchQ, handleSearchQ }}>
			{children}
		</SearchQuery.Provider>
	);
};

export default SearchQueryWrapper;

export const useSearchQ = () => {
	const context = useContext(SearchQuery);
	if (context === null) {
		throw new Error("useSearchQ must be used within a SearchQueryWrapper");
	}
	return context;
};
