import { AddRounded } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button/Button";
import RoleCard from "../components/RoleCard/RoleCard";
import { ModalsContext } from "../contexts/ModalsContext";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getRoles } from "../store/rolesSlice";
import { AppDispatch, RootState } from "../store/store";

const RolesSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { roles, isLoading } = useSelector((state: RootState) => state.roles);
  const { handleOpenRoleModal } = useContext(ModalsContext);

  const handleAddRole = () => {
    handleOpenRoleModal("addRole");
  };

  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  return (
    <PrimaryContainer className={`grid justify-stretch items-center gap-8`}>
      <Box className={`flex justify-end items-center`}>
        <Button
          icon={<AddRounded />}
          handling={handleAddRole}
          title={"Add Role"}
        />
      </Box>
      <Box>
        {!isLoading && roles
          ? roles.map((role, i) => <RoleCard role={role} key={i} />)
          : ""}
      </Box>
    </PrimaryContainer>
  );
};

export default RolesSection;
