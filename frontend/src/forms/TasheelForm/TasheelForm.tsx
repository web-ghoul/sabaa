import { Box, Divider, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { handleCatchError } from "../../functions/handleCatchError";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { RootState } from "../../store/store";
import PersonsTable from "../../tables/PersonsTable/PersonsTable";
import { FormiksTypes } from "../../types/forms.types";
import {
  CompanyTypes,
  EmployeeTypes,
  OwnerTypes,
  ProTypes,
  TasheelTypes,
} from "../../types/store.types";

const TasheelForm = ({ register, errors, setValue, type }: FormiksTypes) => {
  const {
    formsLoading,
    handleCloseTasheelModal,
    setEditableTasheelData,
    editableTasheelData,
  } = useContext(FormsContext);
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

  const handleChangeValues = (d: TasheelTypes, reset?: boolean) => {
    setValue("name", d.name || "");
    setValue("nameAr", d.nameAr || "");
    setValue("personCode", d.personCode || "");
    setValue("emiratesId", d.emiratesId || "");
    setValue("email", d.email || "");
    setValue(
      "type",
      d.type && d.type.toLowerCase() === "pro"
        ? "officer"
        : d.type || "employee"
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
      .get(`${import.meta.env.VITE_SERVER_URL}/tasheels/${search}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data: TasheelTypes | CompanyTypes = res.data;
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
          const d = data as TasheelTypes;
          setEditableTasheelData(d);
          handleChangeValues(d);
        }
      })
      .catch((err) => {
        handleCatchError(err);
      });
    setLoading(false);
  };

  useEffect(() => {
    if (editableTasheelData) {
      handleChangeValues(editableTasheelData);
    }
  }, [editableTasheelData]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      {type === "addTasheel" ? (
        <Title head={"h4"} align={"left"} title={"Add New Tasheel"} />
      ) : (
        type === "editTasheel" && (
          <Title head={"h4"} align={"left"} title={"Edit Tasheel"} />
        )
      )}

      {type === "addTasheel" && (
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
          Tasheel Details
        </Typography>
        <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
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
            label={"Security 1"}
            name={"security1"}
            type={"text"}
          />
          <Input
            register={register}
            errors={errors}
            label={"Security 2"}
            name={"security2"}
            type={"text"}
          />
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
            disabled
          />
          <Input
            register={register}
            errors={errors}
            label={"Arabic Name"}
            name={"nameAr"}
            disabled
          />
          <Input
            register={register}
            errors={errors}
            label={"Person Code"}
            name={"personCode"}
            disabled
          />
          <Input
            register={register}
            errors={errors}
            label={"Emirates Id"}
            name={"emiratesId"}
            disabled
          />
          <Input
            register={register}
            errors={errors}
            label={"Email"}
            name={"email"}
            type={"email"}
            disabled
          />
          <Input
            register={register}
            errors={errors}
            label={"type"}
            name={"type"}
            select
            options={["owner", "customer", "officer", "employee"]}
            disabled
          />
        </Box>
      </Box>

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>
          {type?.startsWith("add") ? "Add" : "Edit"}
        </SubmitButton>
        <Button
          title={"Cancel"}
          handling={handleCloseTasheelModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default TasheelForm;
