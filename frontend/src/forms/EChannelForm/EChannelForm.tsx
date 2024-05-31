import { Box, Divider, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { handleCatchError } from "../../functions/handleCatchError";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";
import { EChannelTypes } from "../../types/store.types";

const EChannelForm = ({ formik, type }: FormiksTypes) => {
  const { formsLoading, handleCloseEChannelModal, setEditableEChannelData } =
    useContext(FormsContext);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const { token } = useSelector((state: RootState) => state.auth);

  const handleSearch = async () => {
    setLoading(true);
    await axios
      .get(`${import.meta.env.VITE_SERVER_URL}/e-channel/${search}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        setEditableEChannelData({} as EChannelTypes);
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
          <Title head={"h4"} align={"left"} title={"Edit Owner"} />
        )
      )}

      <Box className={`flex justify-start items-end gap-4`}>
        <Input
          formik={formik}
          label={"Search uid , emirates id..."}
          name={"search_for_person"}
          type={"search"}
          change={(val) => setSearch(val)}
        />
        <PrimaryButton onClick={handleSearch} loading={loading}>
          Search
        </PrimaryButton>
      </Box>

      <Box className={`grid justify-stretch items-center gap-4`}>
        <Typography variant="h4" className={`!font-[700]`}>
          E-Channel Details
        </Typography>
        <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
          <Input formik={formik} label={"Username"} name={"username"} />
          <Input
            formik={formik}
            label={"Password"}
            name={"password"}
            type={"password"}
          />
        </Box>
      </Box>

      <Divider />

      <Box className={`grid justify-stretch items-center gap-4`}>
        <Typography variant="h4" className={`!font-[700]`}>
          Person Information
        </Typography>
        <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
          <Input
            formik={formik}
            label={"English Name"}
            name={"name"}
            disabled
          />
          <Input
            formik={formik}
            label={"UID Number"}
            name={"uid"}
            type={"text"}
            variant={"numeric"}
            disabled
          />
          <Input
            formik={formik}
            label={"Person Code"}
            name={"personCode"}
            type={"text"}
            variant={"numeric"}
            disabled
          />
          <Input
            formik={formik}
            label={"Emirates ID"}
            name={"emiratesId"}
            type={"text"}
            variant={"numeric"}
            disabled
          />
          <Input
            formik={formik}
            label={"Phone"}
            type={"text"}
            variant={"numeric"}
            name={"phone"}
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
          <Input
            formik={formik}
            label={"Status"}
            name={"status"}
            select
            options={["Active", "Inactive"]}
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
