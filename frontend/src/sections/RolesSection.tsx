import { AddRounded } from "@mui/icons-material";
import { Box, Paper } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button/Button";
import LoadingRoleCard from "../components/RoleCard/LoadingRoleCard";
import RoleCard from "../components/RoleCard/RoleCard";
import Title from "../components/Title/Title";
import { handleRandomNumber } from "../functions/handleRandomNumber";
import { getRoles } from "../store/rolesSlice";
import { AppDispatch, RootState } from "../store/store";

const RolesSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { roles, isLoading } = useSelector((state: RootState) => state.roles);
  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  return (
    <Paper className={`paper`}>
      <Title title={"Permissions"} align="left" />
      <Box className={`!grid justify-stretch items-center gap-8`}>
        <Box className={`flex justify-end items-center`}>
          <Button icon={<AddRounded />} title={"Add Role"} />
        </Box>
        <Box
          className={`grid justify-stretch items-center grid-cols-4 gap-8 md:grid-cols-2 sm:!grid-cols-1 md:gap-6 sm:!gap-4`}
        >
          {!isLoading && roles
            ? roles.map((role, i) => <RoleCard role={role} key={i} />)
            : Array.from({ length: handleRandomNumber(5, 10) }).map((_, i) => (
                <LoadingRoleCard key={i} />
              ))}
        </Box>
      </Box>
    </Paper>
  );
};

export default RolesSection;
