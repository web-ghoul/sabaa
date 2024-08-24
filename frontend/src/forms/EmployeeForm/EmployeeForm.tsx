import { Box, Divider, Paper, Typography } from "@mui/material";
import { useContext, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AutoCompleteSearch from "../../components/AutoCompleteSearch/AutoCompleteSearch";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import UploadImage from "../../components/UploadImage/UploadImage";
import { FormsContext } from "../../contexts/FormsContext";
import { getCompanies } from "../../store/companiesSlice";
import { getJobs } from "../../store/jobsSlice";
import { getNationalities } from "../../store/nationalitiesSlice";
import { getSelector } from "../../store/selectorSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const EmployeeForm = ({
  register,
  errors,
  setValue,
  getValues,
  type,
}: FormiksTypes) => {
  const { formsLoading, setEmployeeImage } = useContext(FormsContext);
  const { nationalities } = useSelector(
    (state: RootState) => state.nationalities
  );
  const { companies } = useSelector((state: RootState) => state.companies);
  const { jobs } = useSelector((state: RootState) => state.jobs);
  const { selector } = useSelector((state: RootState) => state.selector);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleCloseEmployee = () => {
    navigate(`${import.meta.env.VITE_EMPLOYEES_ROUTE}`);
  };

  useEffect(() => {
    dispatch(getNationalities({ limit: -1 }));
    dispatch(getJobs({ limit: -1 }));
    dispatch(getCompanies({ limit: -1 }));
    dispatch(getSelector({ selector: "statusofEmployee" }));
  }, [dispatch]);

  useEffect(() => {
    if (type?.startsWith("add")) {
      setEmployeeImage("");
    }
  }, [setEmployeeImage, type]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      {type === "addEmployee" ? (
        <Title head={"h4"} align={"left"} title={"Add New Employee"} />
      ) : (
        type === "editEmployee" && (
          <Title head={"h4"} align={"left"} title={"Edit Employee"} />
        )
      )}

      {useMemo(
        () => type && <UploadImage title={"Employee Avatar"} variant={type} />,
        [type]
      )}

      <Box className={`grid justify-stretch items-center gap-4`}>
        <Typography variant="h4" className={`!font-[700]`}>
          Employee Information
        </Typography>
        <Box
          className={`grid grid-cols-4 justify-stretch items-start gap-6 md:grid-cols-3 sm:!grid-cols-2 xs:!grid-cols-1 md:gap-5 sm:!gap-4`}
        >
          <Input
            register={register}
            errors={errors}
            label={"English Name"}
            name={"name"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Arabic Name"}
            name={"nameAr"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Person Code"}
            name={"personCode"}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Email"}
            name={"email"}
            type={"email"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Mobile Number"}
            type={"text"}
            name={"mobileNumber"}
          />
          <Input
            register={register}
            errors={errors}
            type={"date"}
            name={"dob"}
            label={"Date of Birth"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Gender"}
            name={"gender"}
            select
            options={["Male", "Female"]}
          />
          <Input
            register={register}
            errors={errors}
            label={"Salary"}
            name={"salary"}
            type={"number"}
          />
          {nationalities && nationalities.length > 0 && (
            <AutoCompleteSearch
              label={"Nationality"}
              options={nationalities}
              register={register}
              errors={errors}
              setValue={setValue}
              getValues={getValues}
              name={"nationality"}
            />
          )}
          {jobs && jobs.length > 0 && (
            <AutoCompleteSearch
              label={"Job"}
              options={jobs}
              register={register}
              errors={errors}
              setValue={setValue}
              getValues={getValues}
              name={"job"}
            />
          )}
          <Input
            register={register}
            errors={errors}
            label={"UID Number"}
            name={"uid"}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Emirates ID"}
            name={"emiratesId"}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Remarks"}
            name={"remarks"}
            textarea
          />
        </Box>
      </Box>
      <Divider />

      <Box className={`grid justify-stretch items-center gap-4`}>
        <Typography variant="h4" className={`!font-[700]`}>
          Employee Details
        </Typography>
        <Box
          className={`grid grid-cols-4 justify-stretch items-start gap-6 md:grid-cols-3 sm:!grid-cols-2 xs:!grid-cols-1 md:gap-5 sm:!gap-4`}
        >
          <Input
            register={register}
            errors={errors}
            name={"passportNumber"}
            label={"Passport Number"}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            type={"date"}
            name={"passportExpiry"}
            label={"Passport Expire Date"}
          />
          <Input
            register={register}
            errors={errors}
            label={"File Immgration Number"}
            type={"text"}
            name={"fileImmgNo"}
          />
          <Input
            register={register}
            errors={errors}
            type={"date"}
            name={"residenceExpireDate"}
            label={"Residence Expire Date"}
          />
          {companies && companies.length > 0 && (
            <AutoCompleteSearch
              label={"Company"}
              options={companies}
              register={register}
              setValue={setValue}
              getValues={getValues}
              errors={errors}
              name={"companyId"}
              variant={"employee"}
              multiple={true}
            />
          )}
          <Input
            label={"Card Type"}
            name={"cardType"}
            register={register}
            errors={errors}
            options={[
              "PRE APPROVAL FOR WORK PERMIT",
              "RELATIVE PRE APPROVAL FOR WORK PERMIT",
              "PART TIME PRE APPROVAL FOR WORK PERMIT",
            ]}
            select
          />
          <Input
            register={register}
            errors={errors}
            label={"Labour Card Number"}
            type={"number"}
            name={"lcNumber"}
          />
          <Input
            register={register}
            errors={errors}
            type={"date"}
            name={"lcExpireDate"}
            label={"Labour Card Expire Date"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Status"}
            name={"status"}
            select
            options={selector ? selector.data : ["Loading..."]}
          />
        </Box>
      </Box>

      <Divider />

      <Box className={`grid justify-stretch items-center gap-4`}>
        <Typography variant="h4" className={`!font-[700]`}>
          Medical Insurance
        </Typography>
        <Box
          className={`grid grid-cols-4 justify-stretch items-start gap-6 md:grid-cols-3 sm:!grid-cols-2 xs:!grid-cols-1 md:gap-5 sm:!gap-4`}
        >
          <Input
            register={register}
            errors={errors}
            label={"Medical Insurance Company"}
            name={"medicalInsuranceCompany"}
          />
          <Input
            register={register}
            errors={errors}
            name={"medicalPolicyNo"}
            label={"Medical Policy Number"}
          />
          <Input
            register={register}
            errors={errors}
            type={"date"}
            name={"medicalExpireDate"}
            label={"Medical Expire Date"}
          />
        </Box>
      </Box>

      <Divider />

      <Box className={`grid justify-stretch items-center gap-4`}>
        <Typography variant="h4" className={`!font-[700]`}>
          Involuntary Loss Of Employment (ILOE)
        </Typography>
        <Box
          className={`grid grid-cols-4 justify-stretch items-start gap-6 md:grid-cols-3 sm:!grid-cols-2 xs:!grid-cols-1 md:gap-5 sm:!gap-4`}
        >
          <Input
            register={register}
            errors={errors}
            label={"IOLE Insurance Company"}
            name={"iLOEInsuranceCompany"}
          />
          <Input
            register={register}
            errors={errors}
            name={"iLOEPolicyNo"}
            label={"IOLE Policy Number"}
          />
          <Input
            register={register}
            errors={errors}
            type={"date"}
            name={"iLOEExpireDate"}
            label={"IOLE Expire Date"}
          />
        </Box>
      </Box>

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>
          {type?.startsWith("add") ? "Add" : "Edit"}
        </SubmitButton>
        <Button
          title={"Cancel"}
          handling={handleCloseEmployee}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default EmployeeForm;
