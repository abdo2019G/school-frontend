import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Signup from "./scenes/signup/Signup";
import Login from "./scenes/login/Login";
import Dashboard from "./scenes/dashboard";
import Students from "./scenes/students";
import Classes from "./scenes/classes";
import Invoices from "./scenes/invoices";
import AddClass from "./scenes/addClass";
import AddStudent from "./scenes/addStudent";
// import { Add } from "@mui/icons-material";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from "./scenes/calendar/calendar";

function App() {
  // const [theme, colorMode] = useMode();

  return (
    // <ColorModeContext.Provider value={colorMode}>
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/students" element={<Students />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/new/student" element={<AddStudent />} />
            <Route path="/new/class" element={<AddClass />} />
          </Routes>
        </main>
      </div>
  //   </ThemeProvider>
  // </ColorModeContext.Provider>
  );
}

export default App;
