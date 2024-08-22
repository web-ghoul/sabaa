import { Box, Checkbox, Divider, FormControlLabel, Paper } from "@mui/material";
import { ChangeEvent, useContext, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { FormiksTypes } from "../../types/forms.types";

const NewLCForm = ({ register, errors }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);
  const { handleCloseNewLCModal } = useContext(ModalsContext);
  const [tawjeeh, setTawjeeh] = useState(false);
  const [IMMG, setIMMG] = useState(false);

  const handleTawjeehChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setTawjeeh(checked);
  };
  const handleIMMGChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIMMG(checked);
  };

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      <Title head={"h4"} align={"left"} title={"New Labour Card"} />
      <Box className={`flex justify-start items-center gap-4`}>
        <FormControlLabel
          control={
            <Checkbox
              checked={tawjeeh}
              onChange={handleTawjeehChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label={"Tawjeeh"}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={IMMG}
              onChange={handleIMMGChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label={"IMMG Details"}
        />
      </Box>
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
          type={"date"}
          name={"lcExpiryDate"}
        />
      </Box>
      {tawjeeh && (
        <>
          <Divider />
          <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
            <Input
              register={register}
              errors={errors}
              label={"Tawjeeh Date"}
              type={"date"}
              name={"tawjeehDate"}
            />
          </Box>
        </>
      )}
      {IMMG && (
        <>
          <Divider />
          <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
            <Input
              register={register}
              errors={errors}
              label={"Change Status Date"}
              type={"date"}
              name={"changeStatusDate"}
            />
            <Input
              register={register}
              errors={errors}
              label={"Medical Date"}
              type={"date"}
              name={"medicalDate"}
            />
            <Input
              register={register}
              errors={errors}
              label={"Residence Expire Date"}
              name={"residenceExpiryDate"}
              type={"date"}
            />
          </Box>
        </>
      )}
      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>Add</SubmitButton>
        <Button
          title={"Cancel"}
          handling={handleCloseNewLCModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default NewLCForm;
