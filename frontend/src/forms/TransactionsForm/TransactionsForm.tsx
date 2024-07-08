import { Box, Paper } from "@mui/material";
import { useContext } from "react";
import Button from "../../components/Button/Button";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { FormiksTypes } from "../../types/forms.types";

const TransactionsForm = ({ register, errors, type }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);
  const { handleCloseTransactionModal } = useContext(ModalsContext);
  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      {type?.startsWith("add") ? (
        <Title head={"h4"} align={"left"} title={"Add New Work Permit"} />
      ) : (
        <Title head={"h4"} align={"left"} title={"Edit Work Permit"} />
      )}

      <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
        {/* <Input
          register={register}
          errors={errors}
          label={"Username"}
          name={"name"}
          ac={"username"}
        /> */}
      </Box>
      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>
          {type?.startsWith("add") ? "Add" : "Edit"}
        </SubmitButton>
        <Button
          title={"Cancel"}
          handling={handleCloseTransactionModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default TransactionsForm;
