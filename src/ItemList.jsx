import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { InputGroup, FormControl } from "react-bootstrap";
import ToDo from "./ToDos";
import PlusOneIcon from "@material-ui/icons/PlusOne";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

function ItemList() {
  const pty = {
    marginTop: "5px",
    //marginLeft: "3px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  };

  const main_content = {
    overflowY: "auto",
    overflowY: "-moz-scrollbars-none",
    maxHeight: "50%",
    marginTop: "35px",
    padding: "3px",
  };

  const changeIcon = (event) => {
    event.target.style.color = "red";
  };

  const changeIco = (event) => {
    event.target.style.color = "black";
  };

  const ol_style_none = {
    listStyleType: "none",
  };

  let empty = "";

  const [currItem, updateCurrItem] = useState("");
  const [itemList, updateItems] = useState([]);

  const onChanging = (event) => {
    updateCurrItem(event.target.value);
  };

  const addItem = () => {
    if (currItem === "") {
      alert("No Data input");
    } else {
      updateItems((oldItems) => {
        return [...oldItems, currItem];
      });
    }
    updateCurrItem("");
  };

  const onSubmitting = (event) => {
    event.preventDefault();
  };

  const deleteItem = (id) => {
    updateItems((oldItems) => {
      return oldItems.filter((value, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form inline onSubmit={onSubmitting}>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    <BookmarksIcon style={{ color: "#3E9896" }} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Add Item here..."
                  aria-label="item"
                  aria-describedby="basic-addon1"
                  onChange={onChanging}
                  value={currItem}
                  required="required"
                />
              </InputGroup>
            </Form>
          </Col>
          <Col>
            <div
              onClick={addItem}
              onMouseOver={changeIcon}
              onMouseOut={changeIco}
            >
              <Tooltip title="Add">
                <AddIcon
                  style={{ backgroundColor: "whitesmoke", cursor: "pointer" }}
                  fontSize="large"
                />
              </Tooltip>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={main_content}>
        <ol style={ol_style_none}>
          {itemList.map((cvalue, indexum) => {
            return (
              <ToDo
                work={cvalue}
                index={indexum}
                key={indexum}
                onSelect={deleteItem}
              />
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default ItemList;
