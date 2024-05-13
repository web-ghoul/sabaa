import { Box, Paper } from "@mui/material";
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

const CustomerForm = ({ formik, type }: FormiksTypes) => {
  const { formsLoading, setCustomerImage } = useContext(FormsContext);
  const { nationalities } = useSelector(
    (state: RootState) => state.nationalities
  );
  const { companies } = useSelector((state: RootState) => state.companies);
  const { jobs } = useSelector((state: RootState) => state.jobs);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(`${import.meta.env.VITE_CUSTOMERS_ROUTE}`);
  };

  useEffect(() => {
    dispatch(getNationalities({ limit: -1 }));
    dispatch(getJobs({ limit: -1 }));
    dispatch(getCompanies({ limit: -1 }));
  }, [dispatch]);

  useEffect(() => {
    if (type?.startsWith("add")) {
      setCustomerImage("");
    }
  }, [setCustomerImage, type]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      {type === "addCustomer" ? (
        <Title head={"h4"} align={"left"} title={"Add New Customer"} />
      ) : (
        type === "editCustomer" && (
          <Title head={"h4"} align={"left"} title={"Edit Customer"} />
        )
      )}

      {useMemo(
        () => type && <UploadImage title={"Customer Avatar"} variant={type} />,
        [type]
      )}

      <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
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
          label={"Status"}
          name={"status"}
          select
          options={["Active", "Cancel", "Abscond", "Complaint"]}
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
          label={"Labout Card Expire Date"}
        />
        <Input
          formik={formik}
          label={"Mobile Number"}
          type={"text"}
          variant={"numeric"}
          name={"mobileNumber"}
        />
        <Input formik={formik} label={"Email"} name={"email"} type={"email"} />
        <Input
          formik={formik}
          label={"Salary"}
          name={"salary"}
          type={"number"}
        />
        {companies && companies.length > 0 && (
          <AutoCompleteSearch
            label={"Company"}
            options={companies}
            formik={formik}
            name={"companyId"}
          />
        )}
        <Input formik={formik} label={"Remarks"} name={"remarks"} textarea />
      </Box>

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>
          {type?.startsWith("add") ? "Add" : "Edit"}
        </SubmitButton>
        <Button title={"Cancel"} handling={handleClose} bg={"!bg-red-500"} />
      </Box>
    </Paper>
  );
};

export default CustomerForm;
