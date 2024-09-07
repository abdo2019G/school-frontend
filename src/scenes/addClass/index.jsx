import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const AddClass = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="ADD Class" subtitle="Create a New Class" />

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
                label="Class Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.className}
                name="className"
                error={!!touched.className && !!errors.className}
                helperText={touched.className && errors.className}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="text"
                label="Class Fee"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fees}
                name="classFee"
                error={!!touched.classFee && !!errors.classFee}
                helperText={touched.classFee && errors.classFee}
                sx={{ gridColumn: "span 2" }}
              />
                 <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="dcription"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 4" }}
              />
                 
            </Box>
            <Box display="flex" justifyContent="end" mt="30px">
              <Button type="submit"  style={{backgroundColor: '#3cb371',}} variant="contained">
                Create New Class
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};


const checkoutSchema = yup.object().shape({
  className: yup.string().required("required"),
  classFee: yup.number().required("required"),
  description: yup.string(),
});
const initialValues = {
  className: "",
  classFee: "",
  description: "",
};

export default AddClass;