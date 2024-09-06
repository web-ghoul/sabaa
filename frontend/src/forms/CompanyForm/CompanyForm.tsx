import { Box, Divider, Paper, Typography } from "@mui/material";
import { useContext, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import AutoCompleteSearch from "../../components/AutoCompleteSearch/AutoCompleteSearch";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import UploadImage from "../../components/UploadImage/UploadImage";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { getOwners } from "../../store/ownersSlice";
import { getPros } from "../../store/prosSlice";
import { getSelectors } from "../../store/selectorsSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";
import { selectorsKeysTypes } from "../../types/store.types";

const CompanyForm = ({
  register,
  errors,
  setValue,
  getValues,
  type,
}: FormiksTypes) => {
  const { formsLoading, setCompanyImage, editableCompanyData } =
    useContext(FormsContext);
  const { handleCloseCompanyModal } = useContext(ModalsContext);
  const navigate = useNavigate();
  const { owners } = useSelector((state: RootState) => state.owners);
  const { pros } = useSelector((state: RootState) => state.pros);
  const { selectors } = useSelector((state: RootState) => state.selectors);
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const [state, setState] = useState("");
  const [states, setStates] = useState<string[]>(["loading..."]);
  const [molCategories, setMolCategories] = useState<string[]>(["loading..."]);
  const [licenseIssuePlaces, setLicenseIssuePlaces] = useState<string[]>([
    "loading...",
  ]);
  const [establishmentTypes, setEstablishmentTypes] = useState<string[]>([
    "loading...",
  ]);

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
    dispatch(getSelectors());
  }, [dispatch]);

  useEffect(() => {
    if (type?.startsWith("add")) {
      setCompanyImage("");
    }
  }, [setCompanyImage, type]);

  useEffect(() => {
    if (selectors) {
      selectors.map((selector) => {
        const sKeys = Object.keys(selector);
        if (sKeys.length > 0) {
          if (sKeys[0] === "state") {
            setStates(selector[sKeys[0] as selectorsKeysTypes].data);
          }
          if (sKeys[0] === "establishmentType") {
            setEstablishmentTypes(
              selector[sKeys[0] as selectorsKeysTypes].data
            );
          }
          if (sKeys[0] === "molCategory") {
            setMolCategories(selector[sKeys[0] as selectorsKeysTypes].data);
          }
          if (sKeys[0] === "licenseIssuePlace") {
            setLicenseIssuePlaces(
              selector[sKeys[0] as selectorsKeysTypes].data
            );
          }
        }
      });
    }
  }, [selectors]);

  useEffect(() => {
    if (editableCompanyData) {
      if (states) {
        setValue("state", editableCompanyData.state);
      }
      if (molCategories) {
        setValue("molCategory", editableCompanyData.molCategory);
      }
      if (establishmentTypes) {
        setValue("establishmentType", editableCompanyData.establishmentType);
      }
      if (licenseIssuePlaces) {
        setValue("licenseIssuePlace", editableCompanyData.licenseIssuePlace);
      }
    }
  }, [editableCompanyData, establishmentTypes, molCategories]);

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
            label={"MOL Code"}
            name={"molCode"}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            select={true}
            name={"molCategory"}
            label={"MOL Category"}
            options={molCategories}
          />
          <Input
            register={register}
            errors={errors}
            label={"Establishment Type"}
            name={"establishmentType"}
            select
            options={establishmentTypes}
          />
          <Input
            register={register}
            errors={errors}
            label={"License Number"}
            name={"licenseNo"}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            type={"date"}
            name={"licenseExpiryDate"}
            label={"License Expire Date"}
          />
          <Input
            register={register}
            errors={errors}
            label={"License Issue Place"}
            name={"licenseIssuePlace"}
            select
            options={licenseIssuePlaces}
          />
          <Input
            register={register}
            errors={errors}
            type={"date"}
            name={"licenseIssueDate"}
            label={"License Issue Date"}
          />

          <Input
            register={register}
            errors={errors}
            label={"Immg Card Number"}
            name={"immgCardNo"}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            type={"date"}
            name={"immgCardExpiry"}
            label={"IMMG Card Expire Date"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Tenancy Contract Value"}
            name={"tenancyContractValue"}
          />
          <Input
            register={register}
            errors={errors}
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
            register={register}
            errors={errors}
            label={"Email"}
            name={"email"}
            type={"email"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Phone"}
            name={"phone"}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Mobile Number"}
            name={"mobileNo"}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            label={"WhatsApp Number"}
            name={"whatsAppNo"}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Address"}
            name={"address"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Country"}
            name={"country"}
          />
          <Input
            register={register}
            errors={errors}
            select={true}
            name={"state"}
            label={"State"}
            options={states}
            change={setState}
          />
          <Input
            register={register}
            errors={errors}
            label={"Website"}
            name={"website"}
          />
          <Input
            register={register}
            errors={errors}
            select={true}
            name={"status"}
            label={"Status"}
            options={["Active", "Inactive"]}
          />
          <Input
            register={register}
            errors={errors}
            label={"TRN"}
            name={"trn"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Zip Code"}
            name={"zipCode"}
            type={"text"}
          />
        </Box>
        <Box
          className={`grid justify-stretch items-start grid-cols-2 gap-4 md:grid-cols-1 md:gap-3 sm:!gap-2`}
        >
          {owners && owners.length > 0 && (
            <AutoCompleteSearch
              label={"Owners"}
              options={owners}
              register={register}
              setValue={setValue}
              getValues={getValues}
              errors={errors}
              name={"ownerId"}
              multiple={true}
            />
          )}
          {pros && pros.length > 0 && (
            <AutoCompleteSearch
              label={"Officers"}
              options={pros}
              register={register}
              setValue={setValue}
              getValues={getValues}
              errors={errors}
              name={"proCode"}
              multiple={true}
            />
          )}
          <Input
            register={register}
            errors={errors}
            label={"Remarks"}
            name={"remarks"}
            textarea={true}
          />
        </Box>
      </Box>
      <Divider />
      {state.toLowerCase() !== "dubai" ? (
        <Box className={`grid justify-stretch items-center gap-4`}>
          <Typography variant="h4" className={`!font-[700]`}>
            E-Channel Details
          </Typography>
          <Box
            className={`grid grid-cols-4 justify-stretch items-start gap-6 md:grid-cols-3 sm:!grid-cols-2 xs:!grid-cols-1 md:gap-5 sm:!gap-4`}
          >
            <Input
              register={register}
              errors={errors}
              type={"date"}
              name={"echannelExpiryDate"}
              label={"E-Channel Expire Date"}
            />
            <Input
              register={register}
              errors={errors}
              label={"Username"}
              name={"userName"}
              type={"text"}
            />
            <Input
              register={register}
              errors={errors}
              label={"Password"}
              type={"password"}
              name={"password"}
            />
            <Input
              register={register}
              errors={errors}
              label={"E-Channel Remarks"}
              type={"text"}
              name={"echannelRemarks"}
            />
          </Box>
        </Box>
      ) : (
        <Box className={`grid justify-stretch items-center gap-4`}>
          <Typography variant="h4" className={`!font-[700]`}>
            GDRF Details
          </Typography>
          <Box
            className={`grid justify-stretch items-start gap-6 md:gap-5 sm:!gap-4`}
          >
            <Box
              className={`grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-stretch items-start gap-6 md:gap-5 sm:!gap-4`}
            >
              <Input
                register={register}
                errors={errors}
                label={"Username"}
                name={"userName"}
                type={"text"}
              />
              <Input
                register={register}
                errors={errors}
                label={"Password"}
                type={"password"}
                name={"password"}
              />
            </Box>
            <Box
              className={`grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-stretch items-start gap-6 md:gap-5 sm:!gap-4`}
            >
              <Input
                register={register}
                errors={errors}
                label={"Noqodi Wallet"}
                name={"noqodiWalet"}
                type={"text"}
              />
              <Input
                register={register}
                errors={errors}
                label={"Noqodi Pass"}
                name={"noqodiPass"}
                type={"text"}
              />
              <Input
                register={register}
                errors={errors}
                label={"Pin Token"}
                name={"pinToken"}
                type={"text"}
              />
            </Box>
            <Box
              className={`grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-stretch items-start gap-6 md:gap-5 sm:!gap-4`}
            >
              <Input
                register={register}
                errors={errors}
                label={"Noqodi New"}
                name={"noqodiNew"}
                type={"text"}
              />
              <Input
                register={register}
                errors={errors}
                label={"Noqodi Reg"}
                name={"noqodiReg"}
                type={"text"}
              />
              <Input
                register={register}
                errors={errors}
                label={"Noqodi NPass"}
                name={"noqodiNPass"}
                type={"text"}
              />
            </Box>
          </Box>
        </Box>
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
