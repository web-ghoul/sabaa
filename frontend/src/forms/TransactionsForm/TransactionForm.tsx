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
import useAxios from "../../hooks/useAxios";
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
  const [tawjeeh, setTawjeeh] = useState(false);
  const [IMMG, setIMMG] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const handleTawjeehChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setTawjeeh(checked);
  };
  const handleIMMGChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIMMG(checked);
  };
  const { handleCloseTransactionModal } = useContext(ModalsContext);
  const dispatch = useDispatch<AppDispatch>();
  const { nationalities } = useSelector(
    (state: RootState) => state.nationalities
  );
  const { jobs } = useSelector((state: RootState) => state.jobs);

  const handleSearch = async (value: string) => {
    setLoading(true);
    await server.get(`/Employee?search=${value}`).then((res) => {
      const employees:EmployeeTypes[] = res.data
      if(employees.length > 0){
        const employee = employees[0]
        setValue("gender",employee.gender)
      }
    });
    setLoading(false);
  };

  useEffect(() => {
    dispatch(getNationalities({ limit: -1 }));
    dispatch(getJobs({ limit: -1 }));
  }, [dispatch]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      {(type === "addPreTransaction" || type === "editPreTransaction") && (
        <>
          <Title head={"h4"} align={"left"} title={"New Work Permit"} />
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
          <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
            <Input
              register={register}
              errors={errors}
              label={"Transaction Number"}
              name={"transactionNo"}
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
              label={"Company Name"}
              name={"companyName"}
            />
            <Input
              register={register}
              errors={errors}
              label={"Employee Name"}
              name={"employeeName"}
            />
            <Input
              register={register}
              errors={errors}
              label={"Date of Birth"}
              name={"dob"}
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
            {type === "editPreTransaction" && (
              <>
                <Input
                  label={"Status"}
                  register={register}
                  errors={errors}
                  options={["InProcess", "Approved", "Rejected", "Nawakes"]}
                  name={"wpStatus"}
                  select
                />
                <Input
                  label={"Status Date"}
                  register={register}
                  errors={errors}
                  type={"date"}
                  name={"statusDate"}
                />
              </>
            )}
          </Box>
        </>
      )}
      {type === "newTransaction" ||
        (type === "renewTransaction" && (
          <>
            <Title head={"h4"} align={"left"} title={"New Labour Card"} />
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
              className={`grid grid-cols-3 justify-stretch items-start gap-6`}
            >
              <Input
                register={register}
                errors={errors}
                label={"Labour Card Number"}
                name={"lcNo"}
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
          </>
        ))}
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
