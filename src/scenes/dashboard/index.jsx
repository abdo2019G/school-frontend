import { Box, Button, colors, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";



const Dashboard = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Hello, Al Mahir for Holy Quran" />
            

            <Box>
                <Button sx={{backgroundColor: "#354c7c", color: colors.blue[100], fontSize: "14px", fontWeight: "bold", padding: "10px 20px"}}>
                    <DownloadOutlinedIcon sx={{ mr: "10px" }}/>
                    Download Reports
                </Button>
            </Box>
            </Box>

            {/* GRID & CHARTS */}
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gridAutoRows="140px" gap="20px">
                {/*ROW 1*/}
                <Box gridColumn="span 3" backgroundColor="#dfdfdd" display="flex" alignItems="center" justifyContent="center" borderRadius="10px">
                    <StatBox title="822" 
                    subtitle="Number of Students" 
                    progress="0.75" 
                    increase="+14%" 
                    icon={<PeopleOutlinedIcon />}/>
                </Box>
                <Box gridColumn="span 3" backgroundColor="#dfdfdd" display="flex" alignItems="center" justifyContent="center" borderRadius="10px">
                    <StatBox title="32" 
                    subtitle="Number of Classes" 
                    progress="0.25" 
                    increase="+10%" 
                    icon={<ContactsOutlinedIcon />}/>
                </Box>
                <Box gridColumn="span 3" backgroundColor="#dfdfdd" display="flex" alignItems="center" justifyContent="center" borderRadius="10px">
                    <StatBox title="24" 
                    subtitle="Number of Teachers " 
                    progress="0.35" 
                    increase="+5%" 
                    icon={<PeopleOutlinedIcon />}/>
                </Box>
                <Box gridColumn="span 3" backgroundColor="#dfdfdd" display="flex" alignItems="center" justifyContent="center" borderRadius="10px">
                    <StatBox title="61" 
                    subtitle="New Students" 
                    progress="0.10" 
                    increase="+2%" 
                    icon={<PeopleOutlinedIcon />}/>
                </Box>
            </Box>
        </Box>
    );
};
export default Dashboard;