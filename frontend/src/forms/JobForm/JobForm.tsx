import { Box } from "@mui/material";
import { useContext } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { FormiksTypes } from "../../types/forms.types";

const JobForm = ({ formik, type }: FormiksTypes) => {
  const { formsLoading, handleCloseJobModal } = useContext(FormsContext);
  return (
    <Box
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4`}
    >
      {type === "addJob" ? (
        <Title head={"h4"} align={"left"} title={"Add New Job"} />
      ) : (
        type === "editJob" && (
          <Title head={"h4"} align={"left"} title={"Edit Job"} />
        )
      )}
      <Box className={`grid justify-stretch items-start gap-6 grid-cols-3`}>
        <Input
          formik={formik}
          label={"Job Title"}
          name={"jobTitle"}
          variant={"english"}
        />
        <Input
          formik={formik}
          label={"ENSCO Code"}
          name={"ENSCOCode"}
          type={"text"}
          variant={"numeric"}
        />
        <Input
          formik={formik}
          type={"text"}
          variant={"numeric"}
          label={"MOHRE Code"}
          name={"MOHRE"}
        />
      </Box>
      <Box className={`flex justify-center items-center gap-4`}>
        <SubmitButton loading={formsLoading}>
          {type?.startsWith("add") ? "Add" : "Edit"}
        </SubmitButton>
        <Button
          title={"Cancel"}
          handling={handleCloseJobModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Box>
  );
};

export default JobForm;
