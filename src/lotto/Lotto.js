import React, { Component, useState } from "react";

import "./Lotto.css";

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

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
//import axios from "axios";

/*
{
  "totSellamnt": 81032551000,
  "returnValue": "success",
  "drwNoDate": "2019-06-01",
  "firstWinamnt": 4872108844,
  "drwtNo6": 25,
  "drwtNo4": 21,
  "firstPrzwnerCo": 4,
  "drwtNo5": 22,
  "bnusNo": 24,
  "firstAccumamnt": 19488435376,
  "drwNo": 861,
  "drwtNo2": 17,
  "drwtNo3": 19,
  "drwtNo1": 11
}
*/

class Lotto extends Component {
  render() {
    function search() {
      console.log(`Hi there,`);
      alert(`${document.location.host}`);

      var httpRequest = new XMLHttpRequest();
      /* Get 방식으로 name 파라미터와 함께 요청 */
      httpRequest.open("GET", `${document.location.host}`);
      /* Response Type을 Json으로 사전 정의 */
      httpRequest.responseType = "json";
      /* 정의된 서버에 요청을 전송 */
      httpRequest.send();
      httpRequest.onreadystatechange = () => {
        /* readyState가 Done이고 응답 값이 200일 때, 받아온 response로 name과 age를 그려줌 */
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            var result = httpRequest.response;
            console.log(result);
          } else {
            alert("Request Error!");
            console.log(result);
          }
        }
      };
    }

    return (
      <div>
        <Typography
          variant="h5"
          component="div"
          style={{ textAlign: "-webkit-right" }}
        >
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

            <IconButton sx={{ p: "10px" }} aria-label="directions">
              <RemoveIcon />
            </IconButton>

            <Button onClick={search} variant="contained">
              조회
            </Button>
          </Paper>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <div id="wrapper">
            <div style={{ backgroundColor: "balck" }} className="circle">
              &nbsp;&nbsp;1
            </div>
            <div className="circle">&nbsp;&nbsp;2</div>
            <div className="circle">&nbsp;&nbsp;3</div>
            <div className="circle">&nbsp;&nbsp;4</div>
            <div className="circle">&nbsp;&nbsp;5</div>
            <div className="circle">&nbsp;&nbsp;6</div>
            <div className="circle">&nbsp;&nbsp;7</div>
          </div>
          <div id="wrapper">
            <div className="circle">&nbsp;&nbsp;8</div>
            <div className="circle">&nbsp;&nbsp;9</div>
            <div className="circle">10</div>
            <div className="circle">11</div>
            <div className="circle">12</div>
            <div className="circle">13</div>
            <div className="circle">14</div>
          </div>
          <div id="wrapper">
            <div className="circle">15</div>
            <div className="circle">16</div>
            <div className="circle">17</div>
            <div className="circle">18</div>
            <div className="circle">19</div>
            <div className="circle">20</div>
            <div className="circle">21</div>
          </div>
          <div id="wrapper">
            <div className="circle">22</div>
            <div className="circle">23</div>
            <div className="circle">24</div>
            <div className="circle">25</div>
            <div className="circle">26</div>
            <div className="circle">27</div>
            <div className="circle">28</div>
          </div>
          <div id="wrapper">
            <div className="circle">29</div>
            <div className="circle">30</div>
            <div className="circle">31</div>
            <div className="circle">32</div>
            <div className="circle">33</div>
            <div className="circle">34</div>
            <div className="circle">35</div>
          </div>
          <div id="wrapper">
            <div className="circle">36</div>
            <div className="circle">37</div>
            <div className="circle">38</div>
            <div className="circle">39</div>
            <div className="circle">40</div>
            <div className="circle">41</div>
            <div className="circle">42</div>
          </div>
          <div id="wrapper">
            <div className="circle">43</div>
            <div className="circle">44</div>
            <div className="circle">45</div>
          </div>
        </Typography>
      </div>
    );
  }
}

export default Lotto;
