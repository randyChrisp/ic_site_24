import { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
  const storedWatchList = localStorage.getItem("watchList")?.split(",") || [
    "GOOGL",
    "MSFT",
    "AMZN",
  ];
  const [watchList, setWatchList] = useState(storedWatchList);

  useEffect(() => {
    localStorage.setItem("watchList", watchList);
  }, [watchList]);

  const addStock = (stock) => {
    if (watchList.indexOf(stock) === -1) {
      setWatchList([...watchList, stock]);
    }
  };

  const deleteStock = (stock) => {
    setWatchList(
      watchList.filter((item) => {
        return item !== stock;
      })
    );
  };

  return (
    <WatchListContext.Provider value={{ watchList, addStock, deleteStock }}>
      {props.children}
    </WatchListContext.Provider>
  );
};
