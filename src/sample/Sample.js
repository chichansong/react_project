import React, { Component } from "react";

import LooksOneIcon from "@mui/icons-material/LooksOne";
import "./Sample.css";

class Sample extends Component {
  render() {
    return (
      <div>
        {"Hellow Sample!!"}
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
