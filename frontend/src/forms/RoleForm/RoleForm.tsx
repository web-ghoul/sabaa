import { Box, Paper } from "@mui/material";
import { useContext } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { FormiksTypes } from "../../types/forms.types";

const RoleForm = ({ register, errors, type }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);
  const { handleCloseRoleModal } = useContext(ModalsContext);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      {type === "addRole" ? (
        <Title head={"h4"} align={"left"} title={"Add New Role"} />
      ) : (
        type === "editRole" && (
          <Title head={"h4"} align={"left"} title={"Edit Role"} />
        )
      )}

      <Box className={`grid justify-stretch items-start gap-6`}>
        <Input
          register={register}
          errors={errors}
          label={"Role Name"}
          name={"name"}
        />
      </Box>

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>
          {type?.startsWith("add") ? "Add" : "Edit"}
        </SubmitButton>
        <Button
          title={"Cancel"}
          handling={handleCloseRoleModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default RoleForm;
