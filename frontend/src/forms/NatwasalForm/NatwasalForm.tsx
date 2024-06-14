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
import { FormiksTypes, NatwasalFormikTypes } from "../../types/forms.types";
import {
  CompanyTypes,
  EmployeeTypes,
  NatwasalTypes,
  OwnerTypes,
  ProTypes,
  TasheelTypes,
} from "../../types/store.types";

const NatwasalForm = ({ formik, type }: FormiksTypes) => {
  const {
    formsLoading,
    handleCloseNatwasalModal,
    setEditableNatwasalData,
    editableNatwasalData,
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

  const handleChangeValues = (d: NatwasalTypes, reset?: boolean) => {
    (formik as unknown as NatwasalFormikTypes).values.name = d.name || "";
    (formik as unknown as NatwasalFormikTypes).values.nameAr = d.nameAr || "";
    (formik as unknown as NatwasalFormikTypes).values.personCode =
      d.personCode || "";
    (formik as unknown as NatwasalFormikTypes).values.email = d.email;
    (formik as unknown as NatwasalFormikTypes).values.name = d.name;
    (formik as unknown as NatwasalFormikTypes).values.type =
      d.type && d.type.toLowerCase() === "pro"
        ? "officer"
        : d.type || "employee";
    if (d.owner) {
      (formik as unknown as NatwasalFormikTypes).values.owner = (
        d.owner as OwnerTypes
      )._id;
      (formik as unknown as NatwasalFormikTypes).values.emiratesId = (
        d.owner as OwnerTypes
      ).emiratesId;
    } else if (d.employee) {
      (formik as unknown as NatwasalFormikTypes).values.employee = (
        d.employee as EmployeeTypes
      )._id;
      (formik as unknown as NatwasalFormikTypes).values.emiratesId = (
        d.employee as EmployeeTypes
      ).emiratesId;
    } else {
      if (d.type) {
        (formik as unknown as NatwasalFormikTypes).values.owner = d._id;
      } else {
        (formik as unknown as NatwasalFormikTypes).values.employee = d._id;
      }
      (formik as unknown as NatwasalFormikTypes).values.emiratesId =
        d.emiratesId;
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
            formik={formik}
            label={"Search person code , MOL code..."}
            name={"search_for_person"}
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
          <Input formik={formik} label={"Username"} name={"username"} />
          <Input
            formik={formik}
            label={"Password"}
            name={"password"}
            type={"password"}
          />
          <Input
            formik={formik}
            label={"Security question 1"}
            name={"security1"}
            type={"text"}
          />
          <Input
            formik={formik}
            label={"Security question 2"}
            name={"security2"}
            type={"text"}
          />
          <Input
            formik={formik}
            label={"Mobile"}
            name={"mobile"}
            variant="numeric"
          />
          <Input
            formik={formik}
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
            formik={formik}
            label={"English Name"}
            name={"name"}
            disabled
          />
          <Input
            formik={formik}
            label={"Arabic Name"}
            name={"nameAr"}
            disabled
          />
          <Input
            formik={formik}
            label={"Person Code"}
            name={"personCode"}
            disabled
          />
          <Input
            formik={formik}
            label={"Emirates Id"}
            name={"emiratesId"}
            disabled
          />
          <Input
            formik={formik}
            label={"Email"}
            name={"email"}
            type={"email"}
            disabled
          />
          <Input
            formik={formik}
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
          handling={handleCloseNatwasalModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default NatwasalForm;
