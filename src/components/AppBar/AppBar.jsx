import AppsIcon from "@mui/icons-material/Apps";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import {
  Badge,
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

import Profiles from "./Menus/Profiles";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Templates from "./Menus/Templates";
import Workspaces from "./Menus/Workspaces";

import { ReactComponent as TrelloIcon } from "~/assets/images/trello.svg";
import ModeSelect from "~/components/ModeSelect/ModeSelect";

const AppBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        paddingX: 2,
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <AppsIcon sx={{ color: "white" }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            fontSize="small"
            sx={{ color: "white" }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Trello
          </Typography>
        </Box>
        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            gap: 1,
          }}
        >
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button
            sx={{
              color: "white",
              border: "none",
              "&:hover": { border: "none" },
            }}
            startIcon={<LibraryAddIcon />}
            variant="outlined"
          >
            Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField
          id="outlined-search"
          label="Search"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          sx={{
            minWidth: "120px",
            maxWidth: "180px",
            "& label": { color: "white" },
            "& input": { color: "white" },
            "& label.Mui-focused": { color: "white" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize="small"
                sx={{
                  color: searchValue ? "white" : "transparent",
                  cursor: "pointer",
                }}
                onClick={() => setSearchValue("")}
              />
            ),
          }}
        />
        <ModeSelect />

        <Badge color="warning" variant="dot" sx={{ cursor: "pointer" }}>
          <Tooltip title="Notification">
            <NotificationsNoneIcon sx={{ color: "white" }} />
          </Tooltip>
        </Badge>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: "pointer", color: "white" }} />
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  );
};

export default AppBar;
