import DashboardIcon from "@mui/icons-material/Dashboard";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export const NavigationMenu = [
  {
    label: "Dasboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    label: "Berita",
    path: "/news",
    icon: <NewspaperIcon />,
  },
  {
    label: "Menu 2",
    path: "/",
    icon: <AccountBalanceIcon />,
  },
];
