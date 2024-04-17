import { Box, Paper } from "@mui/material";
import { useContext, useMemo } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import UploadImage from "../../components/UploadImage/UploadImage";
import { FormsContext } from "../../contexts/FormsContext";
import { FormiksTypes } from "../../types/forms.types";

const UserForm = ({ formik, type }: FormiksTypes) => {
  const { formsLoading, handleCloseUserModal } = useContext(FormsContext);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      {type?.startsWith("add") ? (
        <Title head={"h4"} align={"left"} title={"Add New User"} />
      ) : (
        <Title head={"h4"} align={"left"} title={"Edit User"} />
      )}

      {useMemo(
        () => type && <UploadImage title={"User Avatar"} variant={type} />,
        [type]
      )}

      <Box className={`grid grid-cols-3 justify-stretch items-end gap-6`}>
        <Input
          formik={formik}
          label={"Username"}
          name={"name"}
          ac={"username"}
          variant="english"
        />
        <Input formik={formik} label={"Email"} name={"email"} type={"email"} />
        <Input formik={formik} label={"Phone"} type={"number"} name={"phone"} />
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
        {type?.startsWith("add") && (
          <Input
            formik={formik}
            label={"Password"}
            type={"password"}
            name={"password"}
            ac={"current-password"}
          />
        )}
      </Box>

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>
          {type?.startsWith("add") ? "Add" : "Edit"}
        </SubmitButton>
        <Button
          title={"Cancel"}
          handling={handleCloseUserModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default UserForm;
