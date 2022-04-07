import React from "react";

const BookMark = ({ status, ...rest }) => {
  let classes = status ? "bi bi-bookmark-fill" : "bi bi-bookmark";
  return (
    <td>
      <button {...rest}>
        <i className={classes}></i>
      </button>
    </td>
  );
};

export default BookMark;
