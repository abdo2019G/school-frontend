import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
// import { render } from "@testing-library/react";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    // { field: "id", headerName: "ID" },
    {
      field: "date",
      headerName: "DATE",
      flex: 1,
     
    },
    {
      field: "invoice",
      headerName: "INVOICE#",
      flex: 1,
    },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
        field: "status",
        headerName: "STATUS",
        flex: 1,
    
    },
    {
      field: "amount",
      headerName: "AMOUNT",
      flex: 1,
    },
    {
        field: "balance",
        headerName: "BALANCE",
        flex: 0.5,
      },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES LIST" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
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
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns}  slots={{
          toolbar: GridToolbar,
        }} />
      </Box>
    </Box>
  );
};

export default Invoices;