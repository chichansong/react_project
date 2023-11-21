import React, { Component } from "react";

import { useResetRecoilState, useSetRecoilState } from "recoil";
import { todoListState } from "./recoilSample";

import LooksOneIcon from "@mui/icons-material/LooksOne";
import "./Sample.css";

//const setTodoList = useSetRecoilState(todoListState);

class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = { a: "1", b: "2" };
    console.log("constructor call!");
    //
  }

  //const setTodoList = useSetRecoilState(todoListState);
  // funtion test() {
  //   return <div>"test funtion"</div>
  // }
  render() {
    let letText = "letText";

    function changeRecoil() {
      const setTodoList = useSetRecoilState(todoListState);
    }
    //const [count, setCount] = useRecoilState(countState);
    //const resetCount = useResetRecoilState(countState);
    //const val = useSetRecoilState(todoListState);

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
        {/* {val} */}
        <br />
        <LooksOneIcon />
        <div id="wrapper">
          <div style={{ backgroundColor: "balck" }} className="circle">
            &nbsp;&nbsp;1
          </div>
          <div className="markingCircle">&nbsp;&nbsp;2</div>
          <div className="circle">&nbsp;&nbsp;3</div>
          <div className="circle">&nbsp;&nbsp;4</div>
          <div className="circle">&nbsp;&nbsp;5</div>
          <div className="circle">&nbsp;&nbsp;6</div>
          <div className="circle">&nbsp;&nbsp;7</div>
        </div>
      </div>
    );
  }
}

export default Sample;
