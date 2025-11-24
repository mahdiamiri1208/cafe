import React from "react";
import Header from "../components/header/Header";
import BookTable from "../components/book table/BookTable";

function page() {
  return (
    <>
      <Header route="Reservation" />
      <BookTable />
    </>
  );
}

export default page;
