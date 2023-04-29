import React, { Suspense, Fragment, useState, useEffect } from "react";
import TableRow from "../TableRow";
import styles from "./TableComponent.module.css";

import countriesData from "../../dummy-data/countries.json";

export const TableComponent = () => {
  const [countries, setCountries] = useState<Array<{}>>([]);
  const [countriesSlice, setCountriesSlice] = useState<Array<{}>>([]);
  const [rowsOnPage, setRowsOnPage] = useState<Number>(10);
  const [startingRow, setStartingRow] = useState<Number>(0);
  const [currentPage, setCurrentPage] = useState<int>(0);

  useEffect(() => {
    setCountries(countriesData);
    // setCountriesSlice(
    //   countries.slice(
    //     startingRow * rowsOnPage,
    //     startingRow * rowsOnPage + rowsOnPage
    //   )
    // );
  }, []);

  useEffect(() => {
    setCountriesSlice(
      countries.slice(
        currentPage * rowsOnPage,
        currentPage * rowsOnPage + rowsOnPage
      )
    );
  }, [countries, rowsOnPage, currentPage]);

  useEffect(() => {
    setCurrentPage(0);
  }, [rowsOnPage]);

  let arrLength = countries.length;
  let isFirstPage = true;
  if (currentPage < 1) {
    isFirstPage = false;
  }
  // console.log(arrLength);

  const handleRowsOnPage = (e: React.FormEvent<HTMLInputElement>) => {
    setRowsOnPage(e.target.value);
  };

  const handleFirstPage = () => {
    if (currentPage !== 0) {
      setCurrentPage(0);
      console.log(currentPage);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      console.log(currentPage);
    }
  };

  const handleNextPage = () => {
    if (currentPage < arrLength / rowsOnPage -1) {
      setCurrentPage((prevState) => {
        return (Number(++prevState));
      });
      console.log(currentPage);
      console.log(typeof currentPage);
    }
  };

  const handleLastPage = () => {
    setCurrentPage(Math.floor(arrLength / rowsOnPage));
    console.log(currentPage);
  };

  const handlePageManually = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentPage(Number(e.target.value));
  };

  if (countriesData.length > 0) {
    return (
      <Fragment>
        <table className={styles.data_grid}>
          <tbody>
            {countriesSlice.map((country, index) => (
              <TableRow key={index} country={country} />
            ))}
          </tbody>
        </table>

        <div className={styles.rows_on_page}>
          Rows on page:{" "}
          <input
            type="input"
            value={rowsOnPage}
            onChange={handleRowsOnPage}
            className={styles.rows_on_page_input}
          ></input>
        </div>

        <div className={styles.pagination}>
          <span>Page: </span>
          <button
            onClick={handleFirstPage}
            className={styles.pagination_button}
          >{`|<`}</button>
          <button
            onClick={handlePreviousPage}
            className={styles.pagination_button}
          >{`<`}</button>
          <input
            value={currentPage + 1}
            onChange={handlePageManually}
            className={styles.current_page_input}
          ></input>
          {" / "}
          {Math.floor(arrLength / rowsOnPage)+1}
          <button
            onClick={handleNextPage}
            className={styles.pagination_button}
          >{`>`}</button>
          <button
            onClick={handleLastPage}
            className={styles.pagination_button}
          >{`>|`}</button>
        </div>
      </Fragment>
    );
  } else {
    return <></>;
  }
};
