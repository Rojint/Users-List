import Head from "next/head";
import Link from "next/link";
import Styles from "../Styles/SideBar.module.css";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import ArticleIcon from "@mui/icons-material/Article";
import TaskIcon from "@mui/icons-material/Task";
import QueuePlayNextIcon from "@mui/icons-material/QueuePlayNext";
export default function SideBar() {
  const items = [
    {
      name: "Home",
      icon: HomeIcon,
    },
    {
      name: "Users",
      icon: GroupIcon,
    },
    {
      name: "Reports",
      icon: ArticleIcon,
    },
    {
      name: "Projects",
      icon: QueuePlayNextIcon,
    },
    {
      name: "Tasks",
      icon: TaskIcon,
    },
  ];

  return (
    <>
      <Box className={Styles.sidebarContainer}>
        <List>
          {items.map((item, index) => (
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}
