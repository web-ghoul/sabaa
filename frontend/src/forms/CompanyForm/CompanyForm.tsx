import { Box, Divider, Paper, Typography } from "@mui/material";
import { useContext, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import AutoCompleteSearch from "../../components/AutoCompleteSearch/AutoCompleteSearch";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import UploadImage from "../../components/UploadImage/UploadImage";
import { FormsContext } from "../../contexts/FormsContext";
import { getOwners } from "../../store/ownersSlice";
import { getPros } from "../../store/prosSlice";
import { AppDispatch, RootState } from "../../store/store";
import { CompanyFormTypes, FormiksTypes } from "../../types/forms.types";

const CompanyForm = ({ formik, type }: FormiksTypes) => {
  const { formsLoading, handleCloseCompanyModal, setCompanyImage } =
    useContext(FormsContext);
  const navigate = useNavigate();
  const { owners } = useSelector((state: RootState) => state.owners);
  const { pros } = useSelector((state: RootState) => state.pros);
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  const handleCancel = () => {
    if (pathname === `${import.meta.env.VITE_UPLOAD_COMPANIES_ROUTE}`) {
      handleCloseCompanyModal();
    } else {
      navigate(`${import.meta.env.VITE_COMPANIES_ROUTE}`);
    }
  };

  useEffect(() => {
    dispatch(getOwners({ limit: -1 }));
    dispatch(getPros({ limit: -1 }));
  }, [dispatch]);

  useEffect(() => {
    if (type?.startsWith("add")) {
      setCompanyImage("");
    }
  }, [setCompanyImage, type]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl transition-all h-full md:p-5 sm:!p-4 xs:!p-3`}
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

      <Box className={`grid justify-stretch items-center gap-4`}>
        <Typography variant="h4" className={`!font-[700]`}>
          Business Details
        </Typography>
        <Box
          className={`grid grid-cols-4 justify-stretch items-start gap-6 md:grid-cols-3 sm:!grid-cols-2 xs:!grid-cols-1 md:gap-5 sm:!gap-4`}
        >
          <Input formik={formik} label={"English Name"} name={"name"} />
          <Input formik={formik} label={"Arabic Name"} name={"nameAr"} />
          <Input
            formik={formik}
            label={"MOL Code"}
            name={"molCode"}
            type={"text"}
            variant={"numeric"}
          />
          <Input
            formik={formik}
            select={true}
            name={"molCategory"}
            label={"MOL Category"}
            options={["cat1", "cat2", "cat3"]}
          />
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
            type={"text"}
            variant={"numeric"}
          />
          <Input
            formik={formik}
            type={"date"}
            name={"licenseExpiryDate"}
            label={"License Expire Date"}
          />
          <Input
            formik={formik}
            label={"License Issue Place"}
            name={"licenseIssuePlace"}
            select
            options={["place 1", "place 2", "place 3"]}
          />
          <Input
            formik={formik}
            type={"date"}
            name={"licenseIssueDate"}
            label={"License Issue Date"}
          />

          <Input
            formik={formik}
            label={"Immg Card Number"}
            name={"immgCardNo"}
            type={"text"}
            variant={"numeric"}
          />
          <Input
            formik={formik}
            type={"date"}
            name={"immgCardExpiry"}
            label={"IMMG Card Expire Date"}
          />
          <Input
            formik={formik}
            label={"Tenancy Contract Value"}
            name={"tenancyContractValue"}
          />
          <Input
            formik={formik}
            type={"date"}
            name={"tenancyContractExp"}
            label={"Tenancy Contract Expire Date"}
          />
        </Box>
      </Box>
      <Divider />
      <Box className={`grid justify-stretch items-center gap-4`}>
        <Typography variant="h4" className={`!font-[700]`}>
          Company Information
        </Typography>
        <Box
          className={`grid grid-cols-4 justify-stretch items-start gap-6 md:grid-cols-3 sm:!grid-cols-2 xs:!grid-cols-1 md:gap-5 sm:!gap-4`}
        >
          <Input
            formik={formik}
            label={"Email"}
            name={"email"}
            type={"email"}
          />
          <Input
            formik={formik}
            label={"Phone"}
            name={"phone"}
            type={"text"}
            variant={"numeric"}
          />

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
          <Input formik={formik} label={"Address"} name={"address"} />

          <Input
            formik={formik}
            label={"Website"}
            name={"website"}
            variant={"url"}
          />
          <Input
            formik={formik}
            label={"WhatsApp Number"}
            name={"whatsAppNo"}
            type={"text"}
            variant={"numeric"}
          />
          <Input
            formik={formik}
            label={"Mobile Number"}
            name={"mobileNo"}
            type={"text"}
            variant={"numeric"}
          />

          <Input formik={formik} label={"TRN"} name={"trn"} variant="numeric" />
          <Input
            formik={formik}
            label={"Zip Code"}
            name={"zipCode"}
            type={"text"}
            variant={"numeric"}
          />
        </Box>
        <Box
          className={`grid justify-stretch items-start grid-cols-2 gap-4 md:grid-cols-1 md:gap-3 sm:!gap-2`}
        >
          {owners && owners.length > 0 && (
            <AutoCompleteSearch
              label={"Owners"}
              options={owners}
              formik={formik}
              name={"ownerId"}
              multiple={true}
            />
          )}
          {pros && pros.length > 0 && (
            <AutoCompleteSearch
              label={"Officers"}
              options={pros}
              formik={formik}
              name={"proCode"}
              multiple={true}
            />
          )}
          <Input
            formik={formik}
            label={"Remarks"}
            name={"remarks"}
            textarea={true}
          />
        </Box>
      </Box>
      {(formik.values as unknown as CompanyFormTypes).state.toLowerCase() !==
      "dubai" ? (
        <>
          <Divider />
          <Box className={`grid justify-stretch items-center gap-4`}>
            <Typography variant="h4" className={`!font-[700]`}>
              E-Channel Details
            </Typography>
            <Box
              className={`grid grid-cols-4 justify-stretch items-start gap-6 md:grid-cols-3 sm:!grid-cols-2 xs:!grid-cols-1 md:gap-5 sm:!gap-4`}
            >
              <Input
                formik={formik}
                type={"date"}
                name={"echannelExpiryDate"}
                label={"E-Channel Expire Date"}
              />
              <Input formik={formik} label={"Username"} name={"userName"} />
              <Input
                formik={formik}
                label={"Password"}
                type={"password"}
                name={"password"}
              />
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Divider />
          <Box className={`grid justify-stretch items-center gap-4`}>
            <Typography variant="h4" className={`!font-[700]`}>
              GDRF Details
            </Typography>
            <Box
              className={`grid grid-cols-4 justify-stretch items-start gap-6 md:grid-cols-3 sm:!grid-cols-2 xs:!grid-cols-1 md:gap-5 sm:!gap-4`}
            >
              <Input formik={formik} label={"Username"} name={"userName"} />
              <Input
                formik={formik}
                label={"Password"}
                type={"password"}
                name={"password"}
              />
            </Box>
          </Box>
        </>
      )}
      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>
          {type?.startsWith("add") ? "Add" : "Edit"}
        </SubmitButton>
        <Button title={"Cancel"} handling={handleCancel} bg={"!bg-red-500"} />
      </Box>
    </Paper>
  );
};

export default CompanyForm;
