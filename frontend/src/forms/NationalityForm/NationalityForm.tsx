import { Box } from "@mui/material";
import { useContext } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { FormiksTypes } from "../../types/forms.types";

const NationalityForm = ({ formik, type }: FormiksTypes) => {
  const { formsLoading, handleCloseNationalityModal } =
    useContext(FormsContext);

  return (
    <Box
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      {type === "addNationality" ? (
        <Title head={"h4"} align={"left"} title={"Add New Nationality"} />
      ) : (
        type === "editNationality" && (
          <Title head={"h4"} align={"left"} title={"Edit Nationality"} />
        )
      )}

      <Box className={`grid grid-cols-2 justify-stretch items-start gap-6`}>
        <Input
          formik={formik}
          label={"Nationality Id"}
          name={"id"}
          type={"text"}
          variant={"numeric"}
        />
        <Input
          formik={formik}
          name={"nationality"}
          label={"Nationality"}
          variant={"english"}
        />
      </Box>

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>
          {type?.startsWith("add") ? "Add" : "Edit"}
        </SubmitButton>
        <Button
          title={"Cancel"}
          handling={handleCloseNationalityModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Box>
  );
};

export default NationalityForm;
