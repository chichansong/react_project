import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";

import AnalyticsIcon from "@mui/icons-material/Analytics";
import BugReportIcon from "@mui/icons-material/BugReport";

class Body extends Component {
  static defaultProps = {
    name: "기본이름",
  };
  render() {
    return (
      <div>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          {/* 1 */}
          <ListItem
            button
            onClick={() => {
              window.location.href = "./lotto";
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <AnalyticsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Lotto analysis" secondary="Nov 2023" />
          </ListItem>

          <Divider variant="inset" component="li" />
          {/* 2 */}
          <ListItem
            button
            onClick={() => {
              window.location.href = "http://152.70.240.199:5000/lotto/300";
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <BugReportIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Lotto api" secondary="" />
          </ListItem>

          <Divider variant="inset" component="li" />
          {/* 3 */}
          <ListItem
            button
            onClick={() => {
              window.location.href = "./sample";
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <BugReportIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Sample" secondary="" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Body;
