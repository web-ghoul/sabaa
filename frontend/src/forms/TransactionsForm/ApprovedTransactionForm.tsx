import { Box, Divider, Paper } from "@mui/material";
import { useContext, useEffect } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { FormiksTypes } from "../../types/forms.types";

const ApprovedTransactionForm = ({
  register,
  setValue,
  errors,
}: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);
  const { handleCloseTransactionModal } = useContext(ModalsContext);

  useEffect(() => {
    setValue("status", "Approved");
  }, []);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      <Title head={"h4"} align={"left"} title={"Approval Transaction"} />

      <Box
        className={`grid justify-stretch items-end grid-cols-3 md:grid-cols-2 sm:!grid-cols-1 gap-6`}
      >
        <Input
          register={register}
          errors={errors}
          label={"Transaction Number"}
          name={"transactionNo"}
          disabled
        />
        <Input
          register={register}
          errors={errors}
          label={"Card Type"}
          name={"cardType"}
          disabled
        />
      </Box>

      <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
        <Input
          register={register}
          errors={errors}
          label={"Employee English Name"}
          name={"employeeName"}
          disabled
        />
        <Input
          register={register}
          errors={errors}
          label={"Employee Arabic Name"}
          name={"employeeNameAr"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Person Number"}
          name={"personCode"}
        />
      </Box>

      <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
        <Input
          label={"Status"}
          register={register}
          errors={errors}
          name={"status"}
          value="Approved"
          disabled
        />
        <Input
          label={"Status Date"}
          register={register}
          errors={errors}
          type={"date"}
          name={"statusDate"}
        />
      </Box>
      <Divider />
      <Box
        className={`grid justify-stretch items-center gap-8 md:gap-6 sm:!gap-5`}
      >
        <Title head={"h5"} align={"left"} title={"Approval"} />

        <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
          <Input
            register={register}
            errors={errors}
            label={"Labour Card Number"}
            name={"lcNumber"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Labour Card Expire Date"}
            name={"lcExpiryDate"}
            type={"date"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Labour Card Status"}
            name={"lcStatus"}
            options={["Active", "Cancel"]}
            select
          />
          <Input
            register={register}
            errors={errors}
            label={"Visit Visa Expire Date"}
            name={"visitExpiryDate"}
            type={"date"}
          />
        </Box>
      </Box>

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>Submit</SubmitButton>
        <Button
          title={"Cancel"}
          handling={handleCloseTransactionModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default ApprovedTransactionForm;
