import { Box, Paper } from "@mui/material";
import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import UploadImage from "../../components/UploadImage/UploadImage";
import { FormsContext } from "../../contexts/FormsContext";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { FormiksTypes } from "../../types/forms.types";

const AddUserForm = ({ formik }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);
  const navigate = useNavigate();

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      <Title head={"h4"} align={"left"} title={"Add New Owner"} />

      {useMemo(
        () => (
          <UploadImage title={"User Avatar"} variant="addUser" />
        ),
        []
      )}

      <Box className={`grid grid-cols-3 justify-stretch items-end gap-6`}>
<<<<<<< HEAD
        <Input
          formik={formik}
          label={"Username"}
          name={"name"}
          ac={"username"}
        />
        <Input formik={formik} label={"Email"} name={"email"} />
        <Input formik={formik} label={"Phone"} type={"tel"} name={"phone"} />
=======
        <Input formik={formik} label={"Username"} name={"_id"} />
        <Input formik={formik} label={"Email"} name={"name"} />
        <Input formik={formik} label={"Phone"} type={"tel"} name={"nameAr"} />
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
        <Input
          formik={formik}
          label={"Role"}
          select={true}
          options={["User", "Admin"]}
          name={"role"}
        />
        <Input
          formik={formik}
          label={"Status"}
          name={"status"}
          select={true}
          options={["Active", "Pending", "Blocked"]}
        />
        <Input
          formik={formik}
          label={"Password"}
          type={"password"}
          name={"password"}
<<<<<<< HEAD
          ac={"current-password"}
=======
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
        />
      </Box>

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>Add</SubmitButton>
        <PrimaryButton
<<<<<<< HEAD
          onClick={() => navigate(`${import.meta.env.VITE_USERS_ROUTE}`)}
=======
          onClick={() => navigate(`${import.meta.env.VITE_COMPANIES_ROUTE}`)}
>>>>>>> 768a4ccac306df0ce52eeea2f158f4aece41e949
          className={`!bg-error`}
        >
          Cancel
        </PrimaryButton>
      </Box>
    </Paper>
  );
};

export default AddUserForm;
