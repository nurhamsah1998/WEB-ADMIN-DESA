import {
  HomeOutlined,
  Event,
  Call,
  SettingsOutlined,
} from "@mui/icons-material";
import SecureLS from "secure-ls";

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
    path: "/web-desa/user/user-complaint",
    icon: <Call />,
  },
  {
    title: "Pengaturan",
    path: "/web-desa/user-settings",
    icon: <SettingsOutlined />,
  },
];

export const capitalFirstLetter = (str) =>
  str?.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());

export const formatDate = (date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("-");
};

export const saveStorage = (key, value) => {
  const ls = new SecureLS();
  return ls.set(key, value);
};

export const getStorage = (key) => {
  const ls = new SecureLS();
  return ls.get(key);
};
