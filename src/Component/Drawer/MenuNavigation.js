import DashboardIcon from "@mui/icons-material/Dashboard";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import CampaignIcon from "@mui/icons-material/Campaign";
import FestivalIcon from "@mui/icons-material/Festival";
import {
  blue,
  deepOrange,
  deepPurple,
  green,
  red,
  grey,
  yellow,
} from "@mui/material/colors";

export const NavigationMenu = [
  {
    tag: "tampilan depan",
    label: "Beranda",
    path: "/web-desa/dashboard",
    color: yellow[700],
    icon: <DashboardIcon />,
  },
  {
    tag: "galery",
    label: "Dokumen",
    path: "/web-desa/document",
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
    tag: "pengaduan masyarakat",
    label: "Pengaduan",
    path: "/web-desa/complain",
    color: grey[500],
    icon: <CampaignIcon />,
  },
  {
    tag: "pengaturan lainnya",
    label: "Lainnya",
    path: "/web-desa/more",
    color: deepPurple[500],
    icon: <DragIndicatorIcon />,
  },
  {
    tag: "keluar halaman",
    label: "Log out",
    path: "?log-out",
    color: red[500],
    icon: <ExitToAppIcon />,
  },
];
