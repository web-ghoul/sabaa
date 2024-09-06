import { Box, Checkbox, Divider, FormControlLabel, Paper } from "@mui/material";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AutoCompleteSearch from "../../components/AutoCompleteSearch/AutoCompleteSearch";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleDateForInput } from "../../functions/handleDateForInput";
import { handleGetNextCardType } from "../../functions/handleGetNextCardType";
import useAxios from "../../hooks/useAxios";
import { getCompanies } from "../../store/companiesSlice";
import { getJobs } from "../../store/jobsSlice";
import { getNationalities } from "../../store/nationalitiesSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";
import { EmployeeTypes } from "../../types/store.types";

const NewLCTransactionForm = ({
  register,
  errors,
  setValue,
  getValues,
}: FormiksTypes) => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const { formsLoading } = useContext(FormsContext);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const { handleCloseTransactionModal } = useContext(ModalsContext);
  const dispatch = useDispatch<AppDispatch>();
  const { nationalities } = useSelector(
    (state: RootState) => state.nationalities
  );
  const { companies } = useSelector((state: RootState) => state.companies);
  const { jobs } = useSelector((state: RootState) => state.jobs);
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

  const handleSearch = async (value: string) => {
    setLoading(true);
    await server.get(`/employees?search=${value}`).then((res) => {
      const employees: EmployeeTypes[] = res.data;
      if (employees.length > 0) {
        const employee = employees[0];
        setValue("gender", employee.gender);
        setValue("personCode", employee.personCode);
        setValue("companyId", (employee.companyId[0] as string) || "");
        setValue("companyName", employee.companyName[0] || "");
        setValue("employeeId", employee?._id || "");
        setValue("employeeName", employee.name);
        setValue("employeeNameAr", employee.nameAr);
        setValue("name", employee.name);
        setValue("nameAr", employee.nameAr);
        setValue("dob", handleDateForInput(employee.dob));
        setValue("idNationality", employee.idNationality);
        setValue("nationality", employee.nationality);
        setValue("emiratesNo", employee.emiratesId);
        setValue("uid", employee.uid);
        setValue("salary", employee.salary);
        setValue("job", employee.job);
        const nextType = handleGetNextCardType(employee.cardType);
        setValue("cardType", nextType ? nextType : employee.cardType);
        setValue("passportExpiry", handleDateForInput(employee.passportExpiry));
        setValue("passportNumber", employee.passportNumber);
      } else {
        handleAlert({ msg: "No Employees Found", status: "error" });
      }
    });
    setLoading(false);
  };

  useEffect(() => {
    dispatch(getCompanies({ limit: -1 }));
    dispatch(getNationalities({ limit: -1 }));
    dispatch(getJobs({ limit: -1 }));
  }, [dispatch]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      <Title head={"h4"} align={"left"} title={"New Labour Card"} />

      <Box className={`flex justify-start items-end  gap-4`}>
        <Input
          register={register}
          errors={errors}
          type={"search"}
          label={"Search By Card Number , UID"}
          name={"searchForEmployee"}
          change={(value: string) => setSearch(value)}
        />
        <Button
          title="Search"
          handling={() => handleSearch(search)}
          loading={loading}
        />
      </Box>

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

      <Box
        className={`grid justify-stretch items-end grid-cols-3 md:grid-cols-2 sm:!grid-cols-1 gap-6`}
      >
        <Input
          register={register}
          errors={errors}
          label={"Transaction Number"}
          name={"transactionNo"}
        />
        <Input
          label={"Card Type"}
          name={"cardType"}
          register={register}
          errors={errors}
          options={[]}
          select
        />
      </Box>

      <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
        <Input
          register={register}
          errors={errors}
          label={"Employee English Name"}
          name={"employeeName"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Employee Arabic Name"}
          name={"employeeNameAr"}
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
            variant={"transaction"}
            flag={loading}
          />
        )}

        <Input
          register={register}
          errors={errors}
          label={"Person Code"}
          name={"personCode"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Gender"}
          select
          options={["Male", "Female"]}
          name={"gender"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Date of Birth"}
          name={"dob"}
          type={"date"}
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
            flag={loading}
          />
        )}
        <Input
          register={register}
          errors={errors}
          label={"Passport Number"}
          name={"passportNumber"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Passport Expire Date"}
          name={"passportExpiry"}
          type={"date"}
        />
        {jobs && jobs.length > 0 && (
          <AutoCompleteSearch
            label={"Job"}
            options={jobs}
            register={register}
            errors={errors}
            setValue={setValue}
            getValues={getValues}
            name={"job"}
            flag={loading}
          />
        )}
        <Input
          register={register}
          errors={errors}
          label={"UID Number"}
          name={"uid"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Emirates Id Number"}
          name={"emiratesNo"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Salary"}
          name={"salary"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Remarks"}
          name={"remarks"}
          textarea
        />
      </Box>

      <Box className={`grid justify-stretch items-center gap-4`}>
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
            <Box
              className={`grid grid-cols-3 justify-stretch items-start gap-6`}
            >
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
            <Box
              className={`grid grid-cols-3 justify-stretch items-start gap-6`}
            >
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
      </Box>

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>Submit</SubmitButton>
        <Button
          title={"Cancel"}
          handling={handleCloseTransactionModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default NewLCTransactionForm;
