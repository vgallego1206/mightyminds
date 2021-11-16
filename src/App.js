import React from "react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import HomeTab from "./components/Tabs/HomeTab";

function App() {
  return (
    <React.Fragment>
      <Header />
      <SubHeader />
      <HomeTab />
    </React.Fragment>
  );
}

export default App;
