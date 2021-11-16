import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "@material-ui/core";

export default function TabItems({ items }) {
  return (
    <Tabs value={0} textColor="inherit">
      {items.map((option) => (
        <Tab label={option.label} value={option.value} />
      ))}
    </Tabs>
  );
}

TabItems.propTypes = {
  items: PropTypes.object,
};
