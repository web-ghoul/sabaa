import { Box, Paper } from "@mui/material";
import { useContext, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import UploadImage from "../../components/UploadImage/UploadImage";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { getRoles } from "../../store/rolesSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const UserForm = ({ register, errors, type }: FormiksTypes) => {
  const { formsLoading, setUserImage } = useContext(FormsContext);
  const { handleCloseUserModal } = useContext(ModalsContext);
  const dispatch = useDispatch<AppDispatch>();
  const { roles } = useSelector((state: RootState) => state.roles);

  useEffect(() => {
    if (type?.startsWith("add")) {
      setUserImage("");
    }
  }, [setUserImage, type]);

  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      {type?.startsWith("add") ? (
        <Title head={"h4"} align={"left"} title={"Add New User"} />
      ) : (
        <Title head={"h4"} align={"left"} title={"Edit User"} />
      )}

      {useMemo(
        () => type && <UploadImage title={"User Avatar"} variant={type} />,
        [type]
      )}

      <Box className={`grid grid-cols-3 justify-stretch items-start gap-6`}>
        <Input
          register={register}
          errors={errors}
          label={"Username"}
          name={"name"}
          ac={"username"}
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
          label={"Phone"}
          type={"text"}
          name={"phone"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Role"}
          select={true}
          options={roles ? roles.map((role) => role.name) : ["loading..."]}
          name={"role"}
        />
        <Input
          register={register}
          errors={errors}
          label={"Status"}
          name={"status"}
          select={true}
          options={["Active", "Pending", "Blocked"]}
        />
        {type?.startsWith("add") && (
          <Input
            register={register}
            errors={errors}
            label={"Password"}
            type={"password"}
            name={"password"}
            ac={"current-password"}
          />
        )}
      </Box>

      <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
        <SubmitButton loading={formsLoading}>
          {type?.startsWith("add") ? "Add" : "Edit"}
        </SubmitButton>
        <Button
          title={"Cancel"}
          handling={handleCloseUserModal}
          bg={"!bg-red-500"}
        />
      </Box>
    </Paper>
  );
};

export default UserForm;
