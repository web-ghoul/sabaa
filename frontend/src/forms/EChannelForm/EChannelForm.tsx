import { Box, Divider, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleCatchError } from "../../functions/handleCatchError";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";
import {
  EChannelTypes,
  EmployeeTypes,
  OwnerTypes,
} from "../../types/store.types";

const EChannelForm = ({ register, errors, setValue, type }: FormiksTypes) => {
  const { formsLoading, setEditableEChannelData } = useContext(FormsContext);
  const { handleCloseEChannelModal } = useContext(ModalsContext);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const { token } = useSelector((state: RootState) => state.auth);

  const handleSearch = async () => {
    setLoading(true);
    await axios
      .get(`${import.meta.env.VITE_SERVER_URL}/e-channels/${search}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data: EChannelTypes = res.data;
        setEditableEChannelData(data);
        setValue("uid", data.uid);
        setValue("personCode", data.personCode);
        setValue("gender", data.gender);
        setValue("emiratesId", data.emiratesId);
        setValue("phone", data.phone);
        setValue(
          "type",
          data.type && data.type.toLowerCase() === "pro"
            ? "officer"
            : data.type || "employee"
        );
        if (data.owner) {
          setValue("owner", (data.owner as OwnerTypes)._id);
          setValue("name", (data.owner as OwnerTypes).name);
        } else if (data.employee) {
          setValue("employee", (data.employee as EmployeeTypes)._id);
          setValue("name", (data.employee as EmployeeTypes).name);
        } else {
          if (data.type) {
            setValue("owner", data._id);
          } else {
            setValue("employee", data._id);
          }
          setValue("name", data.name);
        }
      })
      .catch((err) => {
        handleCatchError(err);
      });
    setLoading(false);
  };

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      {type === "addEChannel" ? (
        <Title head={"h4"} align={"left"} title={"Add New E-Channel"} />
      ) : (
        type === "editEChannel" && (
          <Title head={"h4"} align={"left"} title={"Edit E-Channel"} />
        )
      )}

      {type === "addEChannel" && (
        <Box className={`flex justify-start items-end gap-4`}>
          <Input
            register={register}
            errors={errors}
            name={"searchForPerson"}
            label={"Search UID , emirates id..."}
            type={"search"}
            change={(val) => setSearch(val)}
          />
          <PrimaryButton onClick={handleSearch} loading={loading}>
            Search
          </PrimaryButton>
        </Box>
      )}

      <Box className={`grid justify-stretch items-center gap-4`}>
        <Typography variant="h4" className={`!font-[700]`}>
          E-Channel Details
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
            label={"Status"}
            name={"status"}
            select
            options={["Active", "Inactive"]}
          />
          <Input
            register={register}
            errors={errors}
            label={"Notes"}
            name={"eChannelNotes"}
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
            label={"UID Number"}
            name={"uid"}
            type={"text"}
            disabled
          />
          <Input
            register={register}
            errors={errors}
            label={"Gender"}
            name={"gender"}
            select
            options={["Male", "Female"]}
            disabled
          />
          <Input
            register={register}
            errors={errors}
            label={"Emirates ID"}
            name={"emiratesId"}
            type={"text"}
            disabled
          />
          <Input
            register={register}
            errors={errors}
            label={"Phone"}
            type={"text"}
            name={"phone"}
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
          handling={handleCloseEChannelModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default EChannelForm;
