import { Box, Paper, Typography } from "@mui/material";
import { useContext, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AutoCompleteSearch from "../../components/AutoCompleteSearch/AutoCompleteSearch";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import UploadImage from "../../components/UploadImage/UploadImage";
import { FormsContext } from "../../contexts/FormsContext";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { getOwners } from "../../store/ownersSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const AddCompanyForm = ({ formik }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);
  const navigate = useNavigate();
  const { owners, isLoading } = useSelector((state: RootState) => state.owners);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getOwners({}));
  }, [dispatch]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      <Title head={"h4"} align={"left"} title={"Add New Company"} />

      {useMemo(
        () => (
          <UploadImage title={"Company Logo"} variant="addCompany" />
        ),
        []
      )}

      <Box className={`grid grid-cols-3 justify-stretch items-end gap-6`}>
        <Input formik={formik} label={"English Name"} name={"name"} />
        <Input formik={formik} label={"Arabic Name"} name={"nameAr"} />
        <Input formik={formik} label={"Phone"} type={"tel"} name={"phone"} />
        <Input
          formik={formik}
          select={true}
          name={"status"}
          label={"Status"}
          options={["Active", "Inactive"]}
        />
        <Input
          formik={formik}
          select={true}
          name={"state"}
          label={"State"}
          options={["Dubai"]}
        />
        <Input
          formik={formik}
          select={true}
          name={"molCategory"}
          label={"MOL Category"}
          options={["cat1", "cat2"]}
        />
        <AutoCompleteSearch
          label={"PROs"}
          options={[]}
          loading={isLoading}
          formik={formik}
          name={"proCode"}
          multiple
        />
        <AutoCompleteSearch
          label={"Owners"}
          options={owners}
          loading={isLoading}
          formik={formik}
          name={"ownerId"}
          multiple
        />
        <Input formik={formik} label={"MOL Code"} name={"molCode"} />
        <Input formik={formik} label={"Address"} name={"address"} />
        <Input formik={formik} label={"Phone"} name={"phone"} type={"tel"} />
        <Input formik={formik} label={"Email"} name={"email"} type={"email"} />
        <Input
          formik={formik}
          label={"Mobile Number"}
          name={"mobileNo"}
          type={"tel"}
        />
        <Input
          formik={formik}
          label={"WhatsApp Number"}
          name={"whatsAppNo"}
          type={"tel"}
        />
        <Input formik={formik} label={"Website"} name={"website"} />
        <Input
          formik={formik}
          label={"Establishment Type"}
          name={"establishmentType"}
        />
        <Input formik={formik} label={"License Number"} name={"licenseNo"} />
        <Input formik={formik} label={"Immg Card Number"} name={"immgCardNo"} />
        <Box className={`grid justify-stretch items-center gap-2`}>
          <Typography variant="h6">Immg Card Expire Date</Typography>
          <Input formik={formik} type={"date"} name={"immgCardExpiry"} />
        </Box>

        <Box className={`grid justify-stretch items-center gap-2`}>
          <Typography variant="h6">License Issue Date</Typography>
          <Input formik={formik} type={"date"} name={"licenseIssueDate"} />
        </Box>

        <Box className={`grid justify-stretch items-center gap-2`}>
          <Typography variant="h6">License Expire Date</Typography>
          <Input formik={formik} type={"date"} name={"licenseExpiryDate"} />
        </Box>
      </Box>

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>Add</SubmitButton>
        <PrimaryButton
          onClick={() => navigate(`${import.meta.env.VITE_COMPANIES_ROUTE}`)}
          className={`!bg-error`}
        >
          Cancel
        </PrimaryButton>
      </Box>
    </Paper>
  );
};

export default AddCompanyForm;
