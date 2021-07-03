import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import ItemList from "./ItemList";
import Navbars from "./Navbars";

function App() {
  const outer_div = {
    backgroundColor: "#33FFFA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh", //When you set height to 100vh, the box element
    //will stretch its height to the full height of the view port regardless
    //of its parent height.
  };

  const main_div = {
    borderRadius: "15px",
    backgroundColor: "#FFE033",
    width: "50%",
    height: "70%",
    paddingTop: "15px",
    boxShadow: "5px 10px 18px #888888",
  };

  return (
    <>
      <Navbars />
      <div style={outer_div}>
        <div style={main_div}>
          <Header />
          <ItemList />
        </div>
      </div>
    </>
  );
}

export default App;
