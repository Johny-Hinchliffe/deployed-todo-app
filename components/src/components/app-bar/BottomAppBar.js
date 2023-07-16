import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import Switch from "@mui/material/Switch";
import Collapse from "@mui/material/Collapse";
import FormControlLabel from "@mui/material/FormControlLabel";

import SearchBar from "../mini-components/SearchBar";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

export default function BottomAppBar({ args }) {
  const [showSearch, setShowSearch] = useState(false);
  const [checked, setChecked] = useState(false);

  const { onClick, onSearchClick } = args;

  useEffect(() => {
    console.log(showSearch);
  }, [showSearch]);
  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon onClick={() => onClick(showSearch, setShowSearch)} />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <Collapse orientation="horizontal" in={checked} collapsedSize={0}>
            <SearchBar />
          </Collapse>
          <IconButton color="inherit">
            <SearchIcon
              sx={{ display: checked ? "none" : "" }}
              onClick={() => setChecked(true)}
            />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
