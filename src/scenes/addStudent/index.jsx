import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AddStudent = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="ADD STUDENT" subtitle="Create a New Student Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
                 <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="text"
                label="Phone Number 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone1}
                name="phone1"
                error={!!touched.phone1 && !!errors.phone1}
                helperText={touched.phone1 && errors.phone1}
                sx={{ gridColumn: "span 2" }}
              />
                 <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="text"
                label="Phone Number 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone2}
                name="phone2"
                error={!!touched.phone2 && !!errors.phone2}
                helperText={touched.phone2 && errors.phone2}
                sx={{ gridColumn: "span 2" }}
              />
                <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="text"
                label="Mother's Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.motherName}
                name="motherName"
                error={!!touched.motherName && !!errors.motherName}
                helperText={touched.motherName && errors.motherName}
                sx={{ gridColumn: "span 2" }}
              />
                {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Date Of Birth"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.dateOfBirth}
                name="dateOfBirth"
                error={!!touched.dateOfBirth && !!errors.dateOfBirth}
                helperText={touched.dateOfBirth && errors.dateOfBirth}
                sx={{ gridColumn: "span 2" }}
              /> */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker sx={{ gridColumn: "span 2" }} label=" Select Your Birth DAte"/>
              </LocalizationProvider>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="30px">
              <Button type="submit" style={{backgroundColor: '#3cb371',}} variant="contained">
                Create New Student
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email"),
  phone1: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
    phone2: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid"),
    motherName: yup.string().required("required"),
    dateOfBirth: yup.date().required("required"),
  address1: yup.string(),
  address2: yup.string(),
});
const initialValues = {
  firstName: "",
  lastName: "",
  motherName: "",
  dateOfBirth: "",
  phone1: "",
  phone2: "",
  email: "",
  address1: "",
  address2: "",
};

export default AddStudent;