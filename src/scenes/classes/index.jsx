import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Classes = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    // { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Class Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="CLASSES LIST" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            fontFamily: "sans-serif"
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            // color: colors.white[300],
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#f5f5f5",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[1000],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#f5f5f5",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataContacts} columns={columns}  slots={{
          toolbar: GridToolbar,
        }} />
      </Box>
    </Box>
  );
};

export default Classes;