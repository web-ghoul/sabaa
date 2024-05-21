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
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const EmployeeForm = ({ formik, type }: FormiksTypes) => {
  const { formsLoading, setEmployeeImage } = useContext(FormsContext);
  const { nationalities } = useSelector(
    (state: RootState) => state.nationalities
  );
  const { companies } = useSelector((state: RootState) => state.companies);
  const { jobs } = useSelector((state: RootState) => state.jobs);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleCloseEmployee = () => {
    navigate(`${import.meta.env.VITE_EMPLOYEES_ROUTE}`);
  };

  useEffect(() => {
    dispatch(getNationalities({ limit: -1 }));
    dispatch(getJobs({ limit: -1 }));
    dispatch(getCompanies({ limit: -1 }));
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
          <Input formik={formik} label={"English Name"} name={"name"} />
          <Input formik={formik} label={"Arabic Name"} name={"nameAr"} />
          <Input
            formik={formik}
            label={"Gender"}
            name={"gender"}
            select
            options={["Male", "Female"]}
          />
          {nationalities && nationalities.length > 0 && (
            <AutoCompleteSearch
              label={"Nationality"}
              options={nationalities}
              formik={formik}
              name={"nationality"}
            />
          )}
          <Input
            formik={formik}
            label={"Person Code"}
            name={"personCode"}
            type={"text"}
            variant={"numeric"}
          />
          <Input
            formik={formik}
            label={"Mobile Number"}
            type={"text"}
            variant={"numeric"}
            name={"mobileNumber"}
          />
          <Input
            formik={formik}
            label={"Email"}
            name={"email"}
            type={"email"}
          />
          <Input
            formik={formik}
            label={"Salary"}
            name={"salary"}
            type={"number"}
          />
          <Input
            formik={formik}
            label={"Status"}
            name={"status"}
            select
            options={["Active", "Cancel", "Abscond", "Complaint"]}
          />
          {jobs && jobs.length > 0 && (
            <AutoCompleteSearch
              label={"Job"}
              options={jobs}
              formik={formik}
              name={"job"}
            />
          )}
          <Input
            formik={formik}
            label={"UID Number"}
            name={"uid"}
            type={"text"}
            variant={"numeric"}
          />
          <Input
            formik={formik}
            label={"Emirates ID"}
            name={"emiratesId"}
            type={"text"}
            variant={"numeric"}
          />
          <Input
            formik={formik}
            type={"number"}
            name={"visaFileNumber"}
            label={"Visa File Number"}
          />
          <Input
            formik={formik}
            type={"date"}
            name={"dob"}
            label={"Date of Birth"}
          />
          <Input
            formik={formik}
            type={"number"}
            name={"passportNumber"}
            label={"Passport Number"}
          />
          <Input
            formik={formik}
            type={"date"}
            name={"passportExpiry"}
            label={"Passport Expire Date"}
          />
          <Input formik={formik} label={"Remarks"} name={"remarks"} textarea />
        </Box>
      </Box>
      <Divider />

      <Box className={`grid justify-stretch items-center gap-4`}>
        <Typography variant="h4" className={`!font-[700]`}>
          Business Details
        </Typography>
        <Box
          className={`grid grid-cols-4 justify-stretch items-start gap-6 md:grid-cols-3 sm:!grid-cols-2 xs:!grid-cols-1 md:gap-5 sm:!gap-4`}
        >
          <Input
            label={"Card Type"}
            name={"cardType"}
            formik={formik}
            options={[
              "PRE APPROVAL FOR WORK PERMIT",
              "NEW ELECTRONIC WORK PERMIT",
              "RENEW ELECTRONIC WORK PERMIT",
              "RELATIVE PRE APPROVAL FOR WORK PERMIT",
              "NEW ON HUSBAND/FATHER SPONSORSHIP",
              "NATIONAL AND GCC ELECTRONIC WORK PERMIT",
              "RENEWAL NATIONAL AND GCC ELECTRONIC WORK PERMIT",
              "PART TIME PRE APPROVAL FOR WORK PERMIT",
              "ELECTRONIC WORK PERMIT FOR PART TIME",
            ]}
            select
          />

          <Input
            formik={formik}
            type={"date"}
            name={"residenceExpireDate"}
            label={"Residence Expire Date"}
          />
          <Input
            formik={formik}
            label={"Card Number"}
            type={"number"}
            name={"cardNumber"}
          />
          <Input
            formik={formik}
            type={"date"}
            name={"lcExpireDate"}
            label={"Labour Card Expire Date"}
          />

          {companies && companies.length > 0 && (
            <AutoCompleteSearch
              label={"Company"}
              options={companies}
              formik={formik}
              name={"companyId"}
              variant={"employee"}
              multiple={true}
            />
          )}
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
            formik={formik}
            label={"Medical Insurance Company"}
            name={"medicalInsuranceCompany"}
          />
          <Input
            formik={formik}
            name={"medicalPolicyNo"}
            label={"Medical Policy Number"}
          />
          <Input
            formik={formik}
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
            formik={formik}
            label={"IOLE Insurance Company"}
            name={"iLOEInsuranceCompany"}
          />
          <Input
            formik={formik}
            name={"iLOEPolicyNo"}
            label={"IOLE Policy Number"}
          />
          <Input
            formik={formik}
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
