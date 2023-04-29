import React, { Suspense, Fragment, useState, useEffect } from "react";
import TableRow from "../TableRow";

import countriesData from "../../dummy-data/countries.json";

export const TableHeader = () => {
  const [countries, setCountries] = useState<Array<{}>>([]);
  const [countriesSlice, setCountriesSlice] = useState<Array<{}>>([]);
  const [rowsOnPage, setRowsOnPage] = useState<Number>(20);


  useEffect(() => {
    setCountries(countriesData);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCountriesSlice(countriesData.slice(0, rowsOnPage));


    }, 500);
  }, [rowsOnPage]);


  const handleRowsOnPage = (e: React.FormEvent<HTMLInputElement>) => {
    setRowsOnPage(e.target.value);
  }


  if (countriesData.length > 0) {
  return (
    <Fragment>
              <span style={{fontWeight: "bold"}}>Rows on page: </span><input type="input" value={rowsOnPage} onChange={handleRowsOnPage}></input>
        <table>
            <tbody>
      {countriesSlice.map((country, index) => (
        <TableRow key={index} country={country} />
      ))}
      </tbody>
      </table>
    </Fragment>
  );
} else {
    return (<></>)
}
};