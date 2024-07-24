import {
  DeleteRounded,
  EditRounded,
  VerifiedUserRounded,
} from "@mui/icons-material";
import { Box, Card, Typography } from "@mui/material";
import Button from "../Button/Button";

const RoleCard = ({ role }: { role: { _id: string; name: string } }) => {
  return (
    <Card
      className={`!rounded-lg p-4 md:p-3 sm:!p-2 grid justify-stretch items-center w-fit gap-6`}
    >
      <Box className={`flex justify-start items-center gap-10`}>
        <VerifiedUserRounded className={`text-primary`} />
        <Typography variant="h4" className={`!font-[700]`}>
          {role.name}
        </Typography>
      </Box>
      <Box className={`flex justify-between items-center gap-10`}>
        <Button icon={<EditRounded />} />
        <Button icon={<DeleteRounded />} />
      </Box>
    </Card>
  );
};

export default RoleCard;
