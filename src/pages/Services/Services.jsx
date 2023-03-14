import React from "react";
import Welcome from "../../container/Welcome/Welcome";
import Quality from "../../container/Quality/Quality";
import MenuOptions from "../../container/MenuOptions/MenuOptions";
import BookTable from "../../container/BookTable/BookTable";
import Updates from "../../container/Updates/Updates";

function Services() {
  return (
    <div>
      <Welcome title="what we offer" />
      <Quality />
      <MenuOptions />
      <BookTable />
      <Updates />
    </div>
  );
}

export default Services;
