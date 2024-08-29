import { Box, Paper } from "@mui/material";
import { useContext, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import UploadImage from "../../components/UploadImage/UploadImage";
import { FormsContext } from "../../contexts/FormsContext";
import { getCustomizes } from "../../store/customizesSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const CompanyInfoForm = ({ register, errors, type,setValue }: FormiksTypes) => {
  const { formsLoading,setCompanyInfoLogo } = useContext(FormsContext);
  const dispatch = useDispatch<AppDispatch>();
  const { customizes } = useSelector((state: RootState) => state.customizes);

  useEffect(() => {
    dispatch(getCustomizes());
  }, [dispatch]);

  useEffect(()=>{
    if(customizes){
      setCompanyInfoLogo(customizes.logo)
      setValue("logo",customizes.logo) 
      setValue("companyName",customizes.companyName) 
      setValue("mobile",customizes.mobile) 
      setValue("officialEmail",customizes.officialEmail) 
      setValue("websiteLink",customizes.websiteLink) 
    }
  },[customizes])

  return (
    <Paper className={`paper`}>
      <Title title={"Company Info"} align="left" />
      <Box
        className={`grid  justify-stretch items-start gap-6 sm:flex sm:flex-wrap sm:justify-center`}
      >
        {useMemo(
          () => type && <UploadImage title={"Company Logo"} variant={type} />,
          [type]
        )}
        <Box className={`grid justify-stretch items-center grid-cols-3 gap-6`}>
          <Input
            register={register}
            errors={errors}
            label={"Company Number"}
            name={"companyName"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Mobile Number"}
            name={"mobile"}
            type={"tel"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Official Email"}
            name={"officialEmail"}
            type={"email"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Website URL"}
            name={"websiteLink"}
          />
        </Box>
      </Box>
      <SubmitButton loading={formsLoading}>Edit</SubmitButton>
    </Paper>
  );
};

export default CompanyInfoForm;
