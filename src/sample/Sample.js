import React, { Component } from "react";

import { useResetRecoilState, useSetRecoilState } from "recoil";
import { todoListState } from "./recoilSample";

import LooksOneIcon from "@mui/icons-material/LooksOne";
import "./Sample.css";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";

class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = { a: "1", b: "2" };
    console.log("constructor call!");
  }

  render() {
    let letText = "letText";

    function changeRecoil() {
      const setTodoList = useSetRecoilState(todoListState);
    }

    return (
      <div>
        {"Hellow Sample!!"}
        <br />
        {letText}
        <br />
        {this.state.a} {this.state.b}
        <br />
        {todoListState["Apples"]}
        <br />
        {this.todoListState}
        <br />
        <LooksOneIcon />
        <div id="wrapper">
          <div className="circle">&nbsp;&nbsp;1</div>
          <div className="markingCircle">&nbsp;&nbsp;2</div>
          <div className="circle">&nbsp;&nbsp;3</div>
          <div className="circle">&nbsp;&nbsp;4</div>
          <div className="circle">&nbsp;&nbsp;5</div>
          <div className="circle">&nbsp;&nbsp;6</div>
          <div className="circle">&nbsp;&nbsp;7</div>
        </div>
        {/* *********************************************** */}
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 300,
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} />

          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <AddIcon />
          </IconButton>

          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

          <IconButton sx={{ p: "10px" }} aria-label="directions">
            <RemoveIcon />
          </IconButton>

          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

          <Button variant="contained">조회</Button>
        </Paper>
        {/* *********************************************** */}
      </div>
    );
  }
}

export default Sample;
