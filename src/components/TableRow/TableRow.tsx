import { Fragment, useState, useEffect } from "react";
import styles from "./TableRow.module.css";

export const TableRow = (props: any) => {
  return (
    <Fragment>
      <tr className={styles.data_tr}>
        <td className={styles.data_td}>
          {props.country.name}
        </td>
        <td className={styles.data_td}>{props.country.code}</td>
        <td className={styles.data_td}>{props.country.capitol}</td>
        <td className={styles.data_td}>{props.country.population}</td>
      </tr>
    </Fragment>
  );
};
