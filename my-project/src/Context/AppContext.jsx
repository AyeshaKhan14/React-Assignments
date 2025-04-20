import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { post } from "../../Data/db";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [data, setData] = useState(post || "");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const postsPerPage = 6;

  const totalPages = Math.ceil(data.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Filter data based on search input
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);
  // Recalculate total pages from filtered data
  const totalFilteredPages = Math.ceil(filteredData.length / postsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  //Search input handler
  const handleSearchClick = () => {
    if (searchInput.trim() === "") {
      toast.warning("Please enter something to search!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }
    setSearchQuery(searchInput);
    setCurrentPage(1); // Reset to first page on search
  };

  useEffect(() => {
    if (searchInput.trim() === "") {
      setSearchQuery(""); // Reset search query when input is cleared
    }
  }, [searchInput]);

  return (
    <AppContext.Provider
      value={{
        data,
        handlePrev,
        handleNext,
        currentPosts,
        currentPage,
        totalPages,
        handleSearchClick,
        filteredData,
        searchQuery,
        setSearchInput,
        searchInput,
        totalFilteredPages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
