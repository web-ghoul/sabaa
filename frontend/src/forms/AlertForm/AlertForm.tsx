import { Box, Paper } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { getAlerts } from "../../store/alertsSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const AlertForm = ({ register, errors, setValue }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);
  const { alerts } = useSelector((state: RootState) => state.alerts);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (alerts) {
      setValue("changeStatusDate", alerts.changeStatusDate);
      setValue("lcExpiryDate", alerts.lcExpiryDate);
      setValue("passportExpiry", alerts.passportExpiry);
      setValue("residenceExpiryDate", alerts.residenceExpiryDate);
      setValue("tawjeehDate", alerts.tawjeehDate);
      setValue("visitExpiryDate", alerts.visitExpiryDate);
      setValue("workPermitExpiryDate", alerts.workPermitExpiryDate);
    }
  }, [alerts, setValue]);

  useEffect(() => {
    dispatch(getAlerts());
  }, [dispatch]);

  return (
    <Paper className={`paper`}>
      <Title title={"Alerts Controller"} align="left" />
      <Box
        className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 sm:justify-center`}
      >
        <Box className={`grid justify-stretch items-center grid-cols-4 gap-6`}>
          <Input
            register={register}
            errors={errors}
            label={"Passport Expire Date"}
            name={"passportExpiry"}
            type={"number"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Labour Card Expire Date"}
            name={"lcExpiryDate"}
            type={"number"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Visit Expire Date"}
            name={"visitExpiryDate"}
            type={"number"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Change Status Date"}
            name={"changeStatusDate"}
            type={"number"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Tawjeeh Date"}
            name={"tawjeehDate"}
            type={"number"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Residence Expire Date"}
            name={"residenceExpiryDate"}
            type={"number"}
          />
        </Box>
        <Box className={`m-auto`}>
          <SubmitButton loading={formsLoading}>Save</SubmitButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default AlertForm;
