import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { grey } from "@mui/material/colors";

const Item = ({ title, to, icon, selected, setSelected }) => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `	#153851 !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
          fontSize: "18px",
        },
        "& .pro-inner-item:hover": {
          // color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#ffffff !important",
          border: "6px solid #3cb371",
          borderRadius: "20px",
          backgroundColor: "#3cb371",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: "#ffffff",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography fontSize="20px" fontFamily="sans-serif" font variant="h3" color="#ffffff">
                  Managemint
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              {/* <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="70px"
                  height="70px"
                  src={`../../assets/AlMahirLogo2.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]} 
                  fontSize="25px"
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Al MAhir
                </Typography>
                <Typography variant="h5" color={colors.grey[100]} fontSize="14px">
                For Holy Quran
                </Typography>
              </Box> */}
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "3%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              $
            />

            {/* <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography> */}
       
            <SubMenu
              title="Students"
              icon={<PeopleOutlinedIcon />}
            >
                <Item
              title="Students List"
              to="/students"
              selected={selected}
              setSelected={setSelected}
              />
              <Item
              title="add student"
              to="/new/student"
              selected={selected}
              setSelected={setSelected}
            />
            </SubMenu>

            <SubMenu
              title="Classes"
              icon={<ContactsOutlinedIcon />}
            >
                <Item
              title="Classes List"
              to="/classes"
              selected={selected}
              setSelected={setSelected}
              />
              <Item
              title="add Class"
              to="/new/class"
              selected={selected}
              setSelected={setSelected}
            />
            </SubMenu>

            <SubMenu
              title="Invoices"
              icon={<ReceiptOutlinedIcon />}
            >
              <Item
              title="Invoces List"
              to="/Invoices"
              selected={selected}
              setSelected={setSelected}
              />
              <Item
              title="New Invoice"
              to="/new/invoice"
              selected={selected}
              setSelected={setSelected}
            />
            </SubMenu>
       
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;