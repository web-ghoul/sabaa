import { Box, Paper } from "@mui/material";
import { useContext } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { FormiksTypes } from "../../types/forms.types";

const ConvertCustomerForm = ({ formik }: FormiksTypes) => {
  const { formsLoading, handleCloseConvertCustomerModal } =
    useContext(FormsContext);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      <Title head={"h4"} align={"left"} title={"Convert Customer"} />

      <Input
        formik={formik}
        label={"Type"}
        name={"type"}
        select
        options={["Owner", "Officer"]}
      />

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>Convert</SubmitButton>
        <Button
          title={"Cancel"}
          handling={handleCloseConvertCustomerModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default ConvertCustomerForm;
