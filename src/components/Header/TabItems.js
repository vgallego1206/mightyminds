import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function TabItems() {

  return (
    <Tabs value={0} textColor="inherit">
      <Tab label="Home" />
      <Tab label="Classes" />
      <Tab label="Planner" />
      <Tab label="School Data" />
      <Tab label="Library" />
    </Tabs>
  );
}
