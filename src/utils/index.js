import { HomeOutlined, Event, Call, SettingsOutlined } from "@mui/icons-material";

export const menu = [
  {
    title: "Beranda",
    path: "/web-desa/user/home",
    icon: <HomeOutlined />,
  },
  {
    title: "Program",
    path: "/web-desa/user/program",
    icon: <Event />,
  },
  {
    title: "Pengaduan",
    path: "/web-desa/user-complaint",
    icon: <Call />,
  },
  {
    title: "Pengaturan",
    path: "/web-desa/user-settings",
    icon: <SettingsOutlined />,
  },
];
