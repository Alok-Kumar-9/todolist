import { Button } from "bootstrap";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Tooltip } from "@material-ui/core";

function ToDo(props) {
  const delete_icon = {
    marginRight: "15px",
    marginLeft: "5px",
    cursor: "pointer",
  };

  const colorOrange = (event) => {
    event.target.style.color = "#6E1DA1";
  };

  const colorRed = (e) => {
    e.target.style.color = "red";
  };

  //let exma = props.index ;

  return (
    <li>
      {/*{props.index}*/}{" "}
      <Tooltip title="Delete">
        <DeleteIcon
          style={delete_icon}
          onMouseOver={colorOrange}
          onMouseOut={colorRed}
          onClick={() => {
            props.onSelect(props.index);
          }}
          color="primary"
        />
      </Tooltip>{" "}
      <b>{props.work}</b>{" "}
    </li>
  );
}

export default ToDo;
