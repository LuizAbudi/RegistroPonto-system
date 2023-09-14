import React from "react";
import HomePage from "../components/Home/HomePage";
import DataContextProvider from "../utils/DataProviderContext";

function Home() {
  return (
    <DataContextProvider>
      <HomePage />
    </DataContextProvider>
  );
}

export default Home;
