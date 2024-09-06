import { Box, Divider, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { RootState } from "../../store/store";
import PersonsTable from "../../tables/PersonsTable/PersonsTable";
import { FormiksTypes } from "../../types/forms.types";
import {
  CompanyTypes,
  EmployeeTypes,
  NatwasalTypes,
  OwnerTypes,
  ProTypes,
  TasheelTypes,
} from "../../types/store.types";

const NatwasalForm = ({
  register,
  errors,
  setValue,
  getValues,
  type,
}: FormiksTypes) => {
  const { formsLoading, setEditableNatwasalData, editableNatwasalData } =
    useContext(FormsContext);
  const { handleCloseNatwasalModal } = useContext(ModalsContext);
  const [loading, setLoading] = useState(false);
  const [persons, setPersons] = useState<
    | {
        name: string;
        nameAr: string;
        email: string;
        type: string;
        personCode: string;
        owner?: OwnerTypes;
        employee?: EmployeeTypes;
      }[]
    | null
  >(null);
  const [search, setSearch] = useState("");
  const { token } = useSelector((state: RootState) => state.auth);

  const handleChangeValues = (d: NatwasalTypes, reset?: boolean) => {
    if (d?.password) {
      handleAlert({ msg: "Person has already Natwasal Service" });
    }
    setValue("name", d.name || "");
    setValue("nameAr", d.nameAr || "");
    setValue("personCode", d.personCode || "");
    setValue("emiratesId", d.emiratesId || "");
    setValue("personEmail", d.email || "");
    setValue(
      "type",
      d.type && d.type.toLowerCase() === "pro"
        ? "officer"
        : d.type === "customer"
        ? "customer"
        : d.type === "owner"
        ? "owner"
        : d.type === "employee"
        ? "employee"
        : ""
    );
    if (d.owner) {
      setValue("owner", (d.owner as OwnerTypes)._id);
      setValue("emiratesId", (d.owner as OwnerTypes).emiratesId);
    } else if (d.employee) {
      setValue("employee", (d.employee as EmployeeTypes)._id);
      setValue("emiratesId", (d.employee as EmployeeTypes).emiratesId);
    } else {
      if (d.type) {
        setValue("owner", d._id);
      } else {
        setValue("employee", d._id);
      }
      setValue("emiratesId", d.emiratesId);
    }
    if (reset) {
      setPersons(null);
    }
  };

  const handleSearch = async () => {
    setLoading(true);
    await axios
      .get(`${import.meta.env.VITE_SERVER_URL}/natwasals/${search}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data: NatwasalTypes | CompanyTypes = res.data;
        if ((data as CompanyTypes).molCode) {
          const owners = (data as CompanyTypes).ownerId as OwnerTypes[];
          const pros = (data as CompanyTypes).proCode as ProTypes[];
          const employees = (data as CompanyTypes).employees as EmployeeTypes[];
          const p: {
            name: string;
            nameAr: string;
            email: string;
            type: string;
            personCode: string;
            owner?: OwnerTypes;
            employee?: EmployeeTypes;
          }[] = [];
          owners.map((owner) => {
            p.push({
              name: owner.name,
              nameAr: owner.nameAr,
              email: owner.email,
              type: "owner",
              personCode: owner.personCode,
              owner: owner,
            });
          });
          pros.map((pro) => {
            p.push({
              name: pro.name,
              nameAr: pro.nameAr,
              email: pro.email,
              type: "officer",
              personCode: pro.personCode,
              owner: pro,
            });
          });
          employees.map((employee) => {
            p.push({
              name: employee.name,
              nameAr: employee.nameAr,
              email: employee.email,
              type: "employee",
              personCode: employee.personCode,
              employee: employee,
            });
          });
          setPersons(p);
        } else {
          if (!data.name) {
            handleAlert({ msg: "No Data Found", status: "error" });
            setValue("name", "");
            setValue("nameAr", "");
            setValue("personCode", "");
            setValue("emiratesId", "");
            setValue("personEmail", "");
            setValue("type", "");
            return;
          }
          const d = data as TasheelTypes;
          setEditableNatwasalData(d);
          handleChangeValues(d);
        }
      })
      .catch((err) => {
        handleCatchError(err);
      });
    setLoading(false);
  };

  useEffect(() => {
    if (editableNatwasalData) {
      handleChangeValues(editableNatwasalData);
    }
  }, [editableNatwasalData]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      {type === "addNatwasal" ? (
        <Title head={"h4"} align={"left"} title={"Add New Natwasal"} />
      ) : (
        type === "editNatwasal" && (
          <Title head={"h4"} align={"left"} title={"Edit Natwasal"} />
        )
      )}

      {type === "addNatwasal" && (
        <Box className={`flex justify-start items-end gap-4`}>
          <Input
            register={register}
            errors={errors}
            label={"Search person code , MOL code..."}
            name={"searchForPerson"}
            type={"search"}
            change={(val) => setSearch(val)}
          />
          <PrimaryButton onClick={handleSearch} loading={loading}>
            Search
          </PrimaryButton>
        </Box>
      )}

      {persons && (
        <PersonsTable
          count={persons.length}
          data={persons}
          clicked={handleChangeValues}
        />
      )}

      <Box className={`grid justify-stretch items-center gap-4`}>
        <Typography variant="h4" className={`!font-[700]`}>
          Natwasal Details
        </Typography>
        <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
          <Input
            register={register}
            errors={errors}
            label={"Email"}
            name={"email"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Username"}
            name={"username"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Password"}
            name={"password"}
            type={"password"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Security question 1"}
            name={"security1"}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Security question 2"}
            name={"security2"}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Mobile"}
            name={"mobile"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Notes"}
            name={"notes"}
            type={"text"}
            textarea
          />
        </Box>
      </Box>

      {type === "addNatwasal" && (
        <>
          <Divider />

          <Box className={`grid justify-stretch items-center gap-4`}>
            <Typography variant="h4" className={`!font-[700]`}>
              Person Information
            </Typography>
            <Box
              className={`grid grid-cols-3 justify-stretch items-start gap-6`}
              sx={{
                "& input , & select": {
                  textFillColor: (theme) =>
                    `${theme.palette.primary.main} !important`,
                },
              }}
            >
              <Input
                register={register}
                errors={errors}
                label={"English Name"}
                name={"name"}
                labeled={getValues("name") || "-"}
              />
              <Input
                register={register}
                errors={errors}
                label={"Arabic Name"}
                name={"nameAr"}
                labeled={getValues("nameAr") || "-"}
              />
              <Input
                register={register}
                errors={errors}
                label={"Person Code"}
                name={"personCode"}
                labeled={getValues("personCode") || "-"}
              />
              <Input
                register={register}
                errors={errors}
                label={"Emirates Id"}
                name={"emiratesId"}
                labeled={getValues("emiratesId") || "-"}
              />
              <Input
                register={register}
                errors={errors}
                label={"Email"}
                name={"personEmail"}
                labeled={getValues("personEmail") || "-"}
              />
              <Input
                register={register}
                errors={errors}
                label={"type"}
                name={"type"}
                labeled={getValues("type") || "-"}
              />
            </Box>
          </Box>
        </>
      )}

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>
          {type?.startsWith("add") ? "Add" : "Edit"}
        </SubmitButton>
        <Button
          title={"Cancel"}
          handling={handleCloseNatwasalModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default NatwasalForm;
