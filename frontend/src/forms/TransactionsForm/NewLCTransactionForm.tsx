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
import { handleDate } from "../../functions/handleDate";
import { handleDateForInput } from "../../functions/handleDateForInput";
import { handleGetCardTypes } from "../../functions/handleGetCardTypes";
import { handleGetNextCardType } from "../../functions/handleGetNextCardType";
import useAxios from "../../hooks/useAxios";
import { getCompanies } from "../../store/companiesSlice";
import { getJobs } from "../../store/jobsSlice";
import { getNationalities } from "../../store/nationalitiesSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";
import { EmployeeTypes, TransactionTypes } from "../../types/store.types";

const NewLCTransactionForm = ({
  type,
  register,
  errors,
  setValue,
  getValues,
}: FormiksTypes) => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { server } = useAxios(token || "");
  const { formsLoading, editableTransactionData, setEditableTransactionData } =
    useContext(FormsContext);
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
  const [cardType, setCardType] = useState("");
  const [addBySearch, setAddBySearch] = useState(false);

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
    await server
      .get(`/transactions?search=${value}&page=0&limit=10`)
      .then(async (res) => {
        const transactions: TransactionTypes[] = res.data;
        if (transactions.length > 0) {
          const transaction = transactions[0];
          console.log(transaction);
          if (transaction.type === "new" || transaction.type === "approved") {
            if (transaction.type === "approved") {
              setValue("editable", "0");
            } else {
              setEditableTransactionData(transaction);
              setValue("lcNumber", transaction.lcNumber);
              setValue(
                "lcExpiryDate",
                transaction.lcExpiryDate
                  ? handleDateForInput(new Date(transaction.lcExpiryDate))
                  : ""
              );
              setValue("transactionNo", transaction.transactionNo);
              setValue("editable", "1");
            }
            setValue("gender", transaction.gender);
            setValue("personCode", transaction.personCode);
            setValue("companyCode", (transaction.companyId as string) || "");
            setValue("companyId", (transaction.companyId as string) || "");
            setValue("companyName", transaction.companyName || "");
            setValue("employeeId", transaction?._id || "");
            setValue("employeeName", transaction.employeeName);
            setValue("employeeNameAr", transaction.employeeNameAr);
            setValue("dob", handleDateForInput(new Date(transaction.dob)));
            setValue("idNationality", transaction.idNationality);
            setValue("nationality", transaction.nationality);
            setValue("emiratesNo", transaction.emiratesNo);
            setValue("uid", transaction.uid);
            setValue("salary", transaction.salary);
            setValue("job", transaction.job);
            const nextType =
              transaction.type === "approved"
                ? handleGetNextCardType(transaction.cardType)
                : transaction.cardType;
            setValue("cardType", nextType ? nextType : transaction.cardType);
            setValue(
              "passportExpiry",
              handleDateForInput(new Date(transaction.passportExpiry))
            );
            setValue("passportNumber", transaction.passportNumber);
            setValue("status", transaction.status);
            setValue("statusDate", transaction.statusDate);
            setValue(
              "tawjeehDate",
              transaction.tawjeehDate
                ? handleDateForInput(new Date(transaction.tawjeehDate))
                : ""
            );
            setValue(
              "changeStatusDate",
              transaction.changeStatusDate
                ? handleDateForInput(new Date(transaction.changeStatusDate))
                : ""
            );
            setValue(
              "medicalDate",
              transaction.medicalDate
                ? handleDateForInput(new Date(transaction.medicalDate))
                : ""
            );
            setValue(
              "residenceExpiryDate",
              transaction.residenceExpiryDate
                ? handleDateForInput(new Date(transaction.residenceExpiryDate))
                : ""
            );
            setAddBySearch(true);
          } else {
            handleAlert({ msg: "No Result Found", status: "error" });
          }
        } else {
          await server.get(`/employees?search=${value}`).then((res) => {
            const employees: EmployeeTypes[] = res.data;
            if (employees.length > 0) {
              const employee = employees[0];
              setValue("gender", employee.gender);
              setValue("personCode", employee.personCode);
              setValue("companyCode", (employee.companyId[0] as string) || "");
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
              const nextType = handleGetNextCardType(employee.cardType);
              setValue("cardType", nextType ? nextType : employee.cardType);
              setValue(
                "passportExpiry",
                handleDateForInput(employee.passportExpiry)
              );
              setValue("passportNumber", employee.passportNumber);
              setValue("status", employee.status);
              setAddBySearch(true);
            } else {
              handleAlert({ msg: "No Result Found", status: "error" });
            }
          });
        }
      });

    setLoading(false);
  };

  useEffect(() => {
    if (
      editableTransactionData &&
      type === "newLCTransaction" &&
      !addBySearch
    ) {
      setValue(
        "cardType",
        handleGetNextCardType(editableTransactionData.cardType)
      );
    }
  }, [editableTransactionData]);

  useEffect(() => {
    dispatch(getCompanies({ limit: -1 }));
    dispatch(getNationalities({ limit: -1 }));
    dispatch(getJobs({ limit: -1 }));
  }, [dispatch]);

  useEffect(() => {
    if (editableTransactionData) {
      if (editableTransactionData.tawjeehDate) {
        setTawjeeh(true);
      }
      if (
        editableTransactionData.changeStatusDate ||
        editableTransactionData.medicalDate ||
        editableTransactionData.residenceExpiryDate
      ) {
        setIMMG(true);
      }
    }
  }, [editableTransactionData, type, getValues]);

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

      {!(
        cardType === "NATIONAL AND GCC ELECTRONIC WORK PERMIT" ||
        editableTransactionData?.cardType ===
          "NATIONAL AND GCC ELECTRONIC WORK PERMIT"
      ) && (
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
      )}

      <Box
        className={`grid justify-stretch items-end grid-cols-3 md:grid-cols-2 sm:!grid-cols-1 gap-6`}
      >
        <Input
          register={register}
          errors={errors}
          label={"Transaction Date"}
          name={"createdAt"}
          type={"date"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Transaction Number"}
          name={"transactionNo"}
        />
        {editableTransactionData || addBySearch ? (
          <Input
            label={"Card Type"}
            name={"cardType"}
            register={register}
            errors={errors}
            disabled
          />
        ) : (
          <Input
            label={"Card Type"}
            name={"cardType"}
            register={register}
            errors={errors}
            options={handleGetCardTypes("newLC")}
            select
            change={(val) => setCardType(val)}
          />
        )}
      </Box>

      {cardType === "NATIONAL AND GCC ELECTRONIC WORK PERMIT" ||
      addBySearch ||
      type === "editNewLCTransaction" ? (
        <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
          <Input
            register={register}
            errors={errors}
            label={"Employee English Name"}
            name={"employeeName"}
            labeled={addBySearch ? getValues("employeeName") : ""}
          />
          <Input
            register={register}
            errors={errors}
            label={"Employee Arabic Name"}
            name={"employeeNameAr"}
            labeled={addBySearch ? getValues("employeeNameAr") : ""}
          />
          {companies &&
            companies.length > 0 &&
            (addBySearch && getValues("companyName") ? (
              <Input
                name={"companyId"}
                register={register}
                label={"Company"}
                errors={errors}
                labeled={getValues("companyName") as string}
              />
            ) : (
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
            ))}
          <Input
            register={register}
            errors={errors}
            label={"Person Code"}
            name={"personCode"}
            labeled={addBySearch ? getValues("personCode") : ""}
          />
          <Input
            register={register}
            errors={errors}
            label={"Gender"}
            select
            options={["Male", "Female"]}
            name={"gender"}
            labeled={addBySearch ? getValues("gender") : ""}
          />
          <Input
            register={register}
            errors={errors}
            label={"Date of Birth"}
            name={"dob"}
            type={"date"}
            labeled={addBySearch ? handleDate(getValues("dob")) : ""}
          />
          {nationalities &&
            nationalities.length > 0 &&
            (addBySearch && getValues("job") ? (
              <Input
                name={"nationality"}
                register={register}
                label={"Nationality"}
                errors={errors}
                labeled={getValues("nationality")}
              />
            ) : (
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
            ))}
          <Input
            register={register}
            errors={errors}
            label={"Passport Number"}
            name={"passportNumber"}
            labeled={addBySearch ? getValues("passportNumber") : ""}
          />
          <Input
            register={register}
            errors={errors}
            label={"Passport Expire Date"}
            name={"passportExpiry"}
            type={"date"}
            labeled={
              addBySearch
                ? handleDate(new Date(getValues("passportExpiry") || ""))
                : ""
            }
          />
          {jobs &&
            jobs.length > 0 &&
            (addBySearch && getValues("job") ? (
              <Input
                name={"job"}
                register={register}
                label={"Job"}
                errors={errors}
                labeled={getValues("job")}
              />
            ) : (
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
            ))}
          <Input
            register={register}
            errors={errors}
            label={"UID Number"}
            name={"uid"}
            labeled={addBySearch ? getValues("uid") : ""}
          />
          <Input
            register={register}
            errors={errors}
            label={"Emirates Id Number"}
            name={"emiratesNo"}
            labeled={addBySearch ? getValues("emiratesNo") : ""}
          />
          <Input
            register={register}
            errors={errors}
            label={"Salary"}
            name={"salary"}
            labeled={addBySearch ? getValues("salary") : ""}
          />
          <Input
            register={register}
            errors={errors}
            label={"Remarks"}
            name={"remarks"}
            textarea
            labeled={addBySearch ? getValues("remarks") : ""}
          />
        </Box>
      ) : (
        <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
          <Input
            register={register}
            errors={errors}
            label={"Company Name"}
            name={"companyName"}
            labeled={`${getValues("companyName")}`}
          />
          <Input
            register={register}
            errors={errors}
            label={"Employee English Name"}
            name={"employeeName"}
            labeled={getValues("employeeName")}
          />
          <Input
            register={register}
            errors={errors}
            label={"Person Code"}
            name={"personCode"}
            labeled={getValues("personCode")}
          />
        </Box>
      )}

      {(cardType === "NATIONAL AND GCC ELECTRONIC WORK PERMIT" ||
        editableTransactionData?.cardType ===
          "NATIONAL AND GCC ELECTRONIC WORK PERMIT") &&
        type === "newLCTransaction" && (
          <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
            <Input
              label={"Status"}
              register={register}
              errors={errors}
              name={"status"}
              options={["In Process", "Rejected", "Nawakes"]}
              select
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
          <Input
            register={register}
            errors={errors}
            label={"Labour Card Status"}
            name={"lcStatus"}
            options={["Active", "Cancel"]}
            select
            value="Active"
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
