import { AdminPanelSettingsRounded, PersonRounded } from "@mui/icons-material";
import { Box } from "@mui/material";

const RoleBox = ({ role }: { role: string }) => {
  const iconClasses = "text-primary !text-[20px] md:!text-[16px]";
  return (
    <Box className={`flex font-[600] justify-center items-center gap-1`}>
      {role.toLowerCase() === "admin" && (
        <AdminPanelSettingsRounded className={iconClasses} />
      )}
      {role.toLowerCase() === "user" && (
        <PersonRounded className={iconClasses} />
      )}
      {role}
    </Box>
  );
};

export default RoleBox;
