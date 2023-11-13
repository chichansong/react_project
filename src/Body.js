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
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          marginTop: "8px",
        }}
      >
        {/* dev 1 start */}
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
        {/* dev 1 end */}

        <Divider variant="inset" component="li" />

        {/* <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="TEST" secondary="Jan 9999" />
        </ListItem>

        <Divider variant="inset" component="li" /> */}

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
    );
  }
}

export default Body;
