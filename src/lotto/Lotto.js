import React, { Component } from "react";

import "./Lotto.css";

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
    return (
      <div>
        {/* [1] [2]
        <LooksOneIcon /> */}
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
      </div>
    );
  }
}

export default Lotto;
