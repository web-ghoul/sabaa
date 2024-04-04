import { Box, Paper, Typography } from "@mui/material";
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
import { getOwners } from "../../store/ownersSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const CompanyForm = ({ formik, type }: FormiksTypes) => {
  const { formsLoading } = useContext(FormsContext);
  const navigate = useNavigate();
  const { owners } = useSelector((state: RootState) => state.owners);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getOwners({}));
  }, [dispatch]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      {type?.startsWith("add") ? (
        <Title head={"h4"} align={"left"} title={"Add New Company"} />
      ) : (
        <Title head={"h4"} align={"left"} title={"Edit Company"} />
      )}

      {useMemo(
        () => type && <UploadImage title={"Company Logo"} variant={type} />,
        [type]
      )}

      <Box className={`grid grid-cols-3 justify-stretch items-end gap-6`}>
        <Input formik={formik} label={"English Name"} name={"name"} />
        <Input formik={formik} label={"Arabic Name"} name={"nameAr"} />
        <Input
          formik={formik}
          select={true}
          name={"status"}
          label={"Status"}
          options={["Active", "Inactive"]}
        />
        <Input formik={formik} label={"Country"} name={"country"} />
        <Input
          formik={formik}
          select={true}
          name={"state"}
          label={"State"}
          options={["dubai"]}
        />

        {owners && owners.length > 0 && (
          <AutoCompleteSearch
            label={"Owners"}
            options={owners}
            formik={formik}
            name={"ownerId"}
            multiple={true}
          />
        )}

        <Input
          formik={formik}
          select={true}
          name={"molCategory"}
          label={"MOL Category"}
          options={["cat1", "cat2", "cat3"]}
        />
        <Input formik={formik} label={"MOL Code"} name={"molCode"} />
        <Input formik={formik} label={"Address"} name={"address"} />
        <Input formik={formik} label={"Phone"} name={"phone"} type={"number"} />
        <Input formik={formik} label={"Email"} name={"email"} type={"email"} />
        <Input
          formik={formik}
          label={"Mobile Number"}
          name={"mobileNo"}
          type={"number"}
        />
        <Input
          formik={formik}
          label={"WhatsApp Number"}
          name={"whatsAppNo"}
          type={"number"}
        />
        <Input formik={formik} label={"Website"} name={"website"} />
        <Input formik={formik} label={"Zip Code"} name={"zipCode"} />
        <Input formik={formik} label={"TRN"} name={"trn"} />
        <Input
          formik={formik}
          label={"Establishment Type"}
          name={"establishmentType"}
          select
          options={["type 1", "type 2", "type 3"]}
        />
        <Input
          formik={formik}
          label={"License Number"}
          name={"licenseNo"}
          type={"number"}
        />
        <Input
          formik={formik}
          label={"Immg Card Number"}
          name={"immgCardNo"}
          type={"number"}
        />
        <Input formik={formik} type={"date"} name={"immgCardExpiry"} />

        <Input formik={formik} type={"date"} name={"licenseIssueDate"} />

        <Input formik={formik} type={"date"} name={"licenseExpiryDate"} />

        <Input
          formik={formik}
          label={"License Issue Place"}
          name={"licenseIssuePlace"}
          select
          options={["place 1", "place 2", "place 3"]}
        />

        <Input
          formik={formik}
          label={"Tenancy Contract Value"}
          name={"tenancyContractValue"}
        />

        <Box className={`grid justify-stretch items-center gap-2`}>
          <Typography variant="h6">Tenancy Contract Expire Date</Typography>
          <Input formik={formik} type={"date"} name={"tenancyContractExp"} />
        </Box>
        <Input formik={formik} label={"Remarks"} name={"remarks"} />
      </Box>

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>
          {type?.startsWith("add") ? "Add" : "Edit"}
        </SubmitButton>
        <Button
          title={"Cancel"}
          handling={() => navigate(`${import.meta.env.VITE_COMPANIES_ROUTE}`)}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default CompanyForm;
