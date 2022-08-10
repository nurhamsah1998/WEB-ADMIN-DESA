import DashboardIcon from "@mui/icons-material/Dashboard";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import FestivalIcon from "@mui/icons-material/Festival";
import { blue, deepOrange, deepPurple, green, red } from "@mui/material/colors";

export const NavigationMenu = [
  {
    tag: "tampilan depan",
    label: "Beranda",
    path: "/web-desa/dashboard",
    color: red[500],
    icon: <DashboardIcon />,
  },
  {
    tag: "galery",
    label: "Dokumen",
    path: "/web-desa/news",
    color: blue[500],
    icon: <NewspaperIcon />,
  },
  {
    tag: "daftar akun",
    label: "Akun User",
    path: "/web-desa/account",
    color: green[500],
    icon: <SupervisorAccountIcon />,
  },
  {
    tag: "daftar event",
    label: "Program",
    path: "/web-desa/program",
    color: deepOrange[500],
    icon: <FestivalIcon />,
  },
  {
    tag: "pengaturan lainnya",
    label: "Lainnya",
    path: "/web-desa/more",
    color: deepPurple[500],
    icon: <DragIndicatorIcon />,
  },
];
