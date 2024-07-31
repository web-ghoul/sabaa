import { Box, Divider, Paper } from "@mui/material";
import { useContext, useEffect, useState } from "react";
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
import useAxios from "../../hooks/useAxios";
import { getCompanies } from "../../store/companiesSlice";
import { getJobs } from "../../store/jobsSlice";
import { getNationalities } from "../../store/nationalitiesSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";
import { EmployeeTypes } from "../../types/store.types";

const TransactionForm = ({
  register,
  errors,
  type,
  setValue,
  getValues,
}: FormiksTypes) => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const { formsLoading } = useContext(FormsContext);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const { handleCloseTransactionModal } = useContext(ModalsContext);
  const dispatch = useDispatch<AppDispatch>();
  const { nationalities } = useSelector(
    (state: RootState) => state.nationalities
  );
  const { companies } = useSelector((state: RootState) => state.companies);
  const { jobs } = useSelector((state: RootState) => state.jobs);

  const handleSearch = async (value: string) => {
    setLoading(true);
    await server.get(`/Employee?search=${value}`).then((res) => {
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
        setValue("dob", handleDateForInput(employee.dob));
        setValue("idNationality", employee.idNationality);
        setValue("nationality", employee.nationality);
        setValue("emiratesNo", employee.emiratesId);
        setValue("uid", employee.uid);
        setValue("salary", employee.salary);
        setValue("job", employee.job);
        setValue("cardType", employee.cardType);
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

  useEffect(() => {
    setStatus(getValues("status"));
  }, []);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      <Title
        head={"h4"}
        align={"left"}
        title={
          type === "addTransaction" ? "New Work Permit" : "Edit Work Permit"
        }
      />

      {type === "addTransaction" && (
        <Box className={`flex justify-start items-end  gap-4`}>
          <Input
            register={register}
            errors={errors}
            type={"search"}
            label={"Search By Person Code"}
            name={"searchForEmployee"}
            change={(value: string) => setSearch(value)}
          />
          <Button
            title="Search"
            handling={() => handleSearch(search)}
            loading={loading}
          />
        </Box>
      )}

      {(type === "addTransaction" || type === "editTransaction") && (
        <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
          <Input
            register={register}
            errors={errors}
            label={"Serial Number"}
            name={"serialNo"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Transaction Number"}
            name={"transactionNo"}
          />
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
            label={"Employee English Name"}
            name={"employeeName"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Employee Arabic Name"}
            name={"employeeNameAr"}
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
            label={"Card Type"}
            name={"cardType"}
            register={register}
            errors={errors}
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
      )}

      {type === "editTransaction" && (
        <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
          <Input
            label={"Status"}
            register={register}
            errors={errors}
            options={["In Process", "Approved", "Rejected", "Nawakes"]}
            name={"status"}
            select
            change={(val) => setStatus(val)}
          />
          <Input
            label={"Status Date"}
            register={register}
            errors={errors}
            type={"date"}
            name={"statusDate"}
          />
        </Box>
      )}

      {status.toLowerCase() === "approved" && (
        <>
          <Divider />
          <Box
            className={`grid justify-stretch items-center gap-8 md:gap-6 sm:!gap-5`}
          >
            <Title head={"h5"} align={"left"} title={"Approval Work Permit"} />

            <Box
              className={`grid grid-cols-3 justify-stretch items-start gap-6`}
            >
              <Input
                register={register}
                errors={errors}
                label={"Work Permit Number"}
                name={"workPermit"}
              />
              <Input
                register={register}
                errors={errors}
                label={"Work Permit Expire Date"}
                name={"workPermitExpiryDate"}
                type={"date"}
              />
              <Input
                register={register}
                errors={errors}
                label={"Visit Visa Expire Date"}
                name={"visitExpiryDate"}
                type={"date"}
              />
            </Box>
          </Box>
        </>
      )}

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

export default TransactionForm;
