import React, { Component } from "react";

import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

class Header extends Component {
  //   static defaultProps = {
  //     name: "기본이름",
  //   };
  render() {
    return (
      <div style={{ marginBottom: "8px" }}>
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
          <ThemeProvider theme={darkTheme}>
            <AppBar position="static" color="primary" enableColorOnDark>
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <HomeIcon
                    onClick={() => {
                      window.location.href = "./";
                    }}
                  />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  {"REACT PROJECT"}
                </Typography>
              </Toolbar>
            </AppBar>
          </ThemeProvider>
        </Stack>
      </div>
    );
  }
}

export default Header;
