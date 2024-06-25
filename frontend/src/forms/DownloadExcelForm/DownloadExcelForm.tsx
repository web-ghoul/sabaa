import { Box } from "@mui/material";
import { useContext } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { FormiksTypes } from "../../types/forms.types";

const DownloadExcelForm = ({ register, errors }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);
  const { handleCloseDownloadExcelModal } = useContext(ModalsContext);
  return (
    <Box className={`grid justify-stretch items-center gap-16`}>
      <Title head={"h4"} align={"center"} title={"Download Excel"} />
      <Input
        name={"fileName"}
        label={"File Name"}
        register={register}
        errors={errors}
      />
      <Box className={`flex justify-center items-center gap-8`}>
        <SubmitButton loading={formsLoading}>Download</SubmitButton>
        <Button
          title={"Cancel"}
          handling={handleCloseDownloadExcelModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Box>
  );
};

export default DownloadExcelForm;
