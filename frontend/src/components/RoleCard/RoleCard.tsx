import {
  DeleteRounded,
  EditRounded,
  VerifiedUserRounded,
} from "@mui/icons-material";
import { Box, Card, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { RoleTypes } from "../../types/store.types";
import Button from "../Button/Button";

const RoleCard = ({ role }: { role: RoleTypes }) => {
  const { handleOpenDeleteModal } = useContext(ModalsContext);
  const { setEditableRoleData } = useContext(FormsContext);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`${import.meta.env.VITE_EDIT_PERMISSION_ROUTE}/${role._id}`);
  };

  const handleDelete = () => {
    handleOpenDeleteModal("role");
    setEditableRoleData(role);
  };

  return (
    <Card
      className={`!rounded-lg p-4 md:p-3 sm:!p-2 grid justify-stretch items-center w-full gap-14 !shadow-none`}
    >
      <Box className={`flex justify-between items-center gap-10`}>
        <VerifiedUserRounded className={`text-primary`} />
        <Typography variant="h4" className={`!font-[700]`}>
          {role.name}
        </Typography>
      </Box>
      <Box className={`flex justify-between items-center gap-10`}>
        <Button
          icon={<EditRounded />}
          bg={"!bg-green-500"}
          handling={handleEdit}
        />
        <Button
          icon={<DeleteRounded />}
          bg={"!bg-red-500"}
          handling={handleDelete}
        />
      </Box>
    </Card>
  );
};

export default RoleCard;
