import { AdminPanelSettingsRounded, PersonRounded } from "@mui/icons-material";
import { Box } from "@mui/material";

const RoleBox = ({ role }: { role: string }) => {
  const iconAdminClasses = "text-primary !text-[20px]";
  const iconUserClasses = "text-primary !text-[20px]";
  return (
    <Box className={`flex font-[600] justify-center items-center gap-1`}>
      {role.toLowerCase() === "admin" && (
        <AdminPanelSettingsRounded className={iconAdminClasses} />
      )}
      {role.toLowerCase() === "user" && (
        <PersonRounded className={iconUserClasses} />
      )}
      {role}
    </Box>
  );
};

export default RoleBox;
