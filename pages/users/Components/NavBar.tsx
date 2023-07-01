import Image from "next/image";
import Styles from "../Styles/navbar.module.css";
import { IconButton, Stack, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { TypeFormatFlags } from "typescript";
export default function Navbar() {
  return (
    <>
      <Stack className={Styles.navbar}>
        <IconButton className={Styles.navbarSvg1} aria-label="profile">
          <AccountCircleIcon sx={{ ml: "3px" }} fontSize="large" />
        </IconButton>
        <IconButton className={Styles.navbarSvg2} aria-label="profile">
          <CircleNotificationsIcon sx={{ ml: "3px" }} fontSize="large" />
        </IconButton>

        <Typography variant="h5" className={Styles.logo}>
          LOGO
        </Typography>
      </Stack>
    </>
  );
}
