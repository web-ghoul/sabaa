import { Box, Paper } from "@mui/material";
import { useContext } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { FormiksTypes } from "../../types/forms.types";

const ApprovalWorkPermitForm = ({ register, errors }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);
  const { handleCloseApprovalWorkPermitModal } = useContext(ModalsContext);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      <Title head={"h4"} align={"left"} title={"Approval Work Permit"} />

      <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
        <Input
          register={register}
          errors={errors}
          label={"Personal Number"}
          name={"personCode"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Work Permit Number"}
          name={"workPermit"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Work Permit Expire Date"}
          name={"workPermitExpiryDate"}
          type={"date"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Visit Visa Expire Date"}
          name={"visitExpiryDate"}
          type={"date"}
        />
      </Box>
      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>Add</SubmitButton>
        <Button
          title={"Cancel"}
          handling={handleCloseApprovalWorkPermitModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default ApprovalWorkPermitForm;
