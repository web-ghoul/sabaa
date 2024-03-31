import { Box } from "@mui/material";
import { useContext } from "react";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { ExcelsContext } from "../../contexts/ExcelsContext";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";

const CreateOwnersSheetForm = ({ index }: { index: number }) => {
  const { formsLoading } = useContext(FormsContext);
  const { handleRemoveOwnersSheet, setOwnerIndex } = useContext(ExcelsContext);

  const handleRemoveSheet = () => {
    handleRemoveOwnersSheet(index);
    handleAlert({
      msg: "Owners Sheet is Removed Successfully",
      status: "success",
    });
  };

  return (
    <Box
      onClick={() => setOwnerIndex({ fileIndex: index, index: 0 })}
      className={`flex justify-center items-center gap-8`}
    >
      <SubmitButton loading={formsLoading}>Create</SubmitButton>
      <PrimaryButton
        className={`!bg-red-500 hover:!bg-red-600`}
        onClick={handleRemoveSheet}
      >
        Remove
      </PrimaryButton>
    </Box>
  );
};

export default CreateOwnersSheetForm;
