import { Box, Paper } from "@mui/material";
import { handleDate } from "../../functions/handleDate";
import { handleGetFlag } from "../../functions/handleGetFlag";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { ProfileDetailsTypes } from "../../types/components.types";
import { OwnerTypes, UserTypes } from "../../types/store.types";
import Title from "../Title/Title";
import UserBox from "../UserBox/UserBox";
import DataBox from "./DataBox";

const ProfileDetails = ({
  title,
  data,
  variant,
  isLoading,
}: ProfileDetailsTypes) => {
  const handleEditUser = () => {};
  const handleDeleteUser = () => {};

  return !isLoading && variant === "user" ? (
    <Paper
      className={`grid justify-stretch items-center gap-10 p-6 !rounded-xl`}
      elevation={11}
    >
      <Title align={"left"} head={"h5"} title={title} />
      <Box className={`flex justify-between items-center gap-6`}>
        <UserBox
          avatar={(data as UserTypes).avatar}
          username={(data as UserTypes).name}
          size={"3xlarge"}
          head={"h4"}
        />
        <Box className={`flex justify-end items-center gap-2`}>
          <PrimaryButton
            onClick={handleEditUser}
            className={`!bg-green-500 hover:!bg-green-600`}
          >
            Edit
          </PrimaryButton>
          <PrimaryButton
            onClick={handleDeleteUser}
            className={`!bg-red-500 hover:!bg-red-600`}
          >
            Delete
          </PrimaryButton>
        </Box>
      </Box>
      <Box className={`grid justify-start items-center gap-8 grid-cols-2 `}>
        <DataBox title={"English Name"} value={(data as UserTypes).name} />
        <DataBox title={"Email"} value={(data as UserTypes).email} />
        <DataBox title={"Phone"} value={(data as UserTypes).phone} />
        <DataBox title={"Role"} value={(data as UserTypes).role} />
        <DataBox title={"Status"} value={(data as UserTypes).status} />
      </Box>
    </Paper>
  ) : !isLoading && variant === "owner" ? (
    <Paper
      className={`grid justify-stretch items-center gap-10 p-6 !rounded-xl`}
      elevation={11}
    >
      <Title align={"left"} head={"h5"} title={title} />
      <Box className={`flex justify-between items-center gap-6`}>
        <UserBox
          avatar={(data as UserTypes).avatar}
          username={(data as UserTypes).name}
          size={"3xlarge"}
          head={"h4"}
        />
        <Box className={`flex justify-end items-center gap-2`}>
          <PrimaryButton
            onClick={handleEditUser}
            className={`!bg-green-500 hover:!bg-green-600`}
          >
            Edit
          </PrimaryButton>
          <PrimaryButton className={`!bg-red-500 hover:!bg-red-600`}>
            Delete
          </PrimaryButton>
        </Box>
      </Box>
      <Box className={`grid justify-start items-center gap-8 grid-cols-2 `}>
        <DataBox title={"English Name"} value={(data as OwnerTypes).name} />
        <DataBox title={"Arabic Name"} value={(data as OwnerTypes).nameAr} />
        <DataBox title={"Email"} value={(data as OwnerTypes).email} />
        <DataBox title={"Phone"} value={(data as OwnerTypes).phone} />
        <DataBox title={"Address"} value={(data as OwnerTypes).address} />
        <DataBox
          title={"Date of Birth"}
          value={handleDate((data as OwnerTypes).dob)}
        />
        <DataBox title={"State"} value={(data as OwnerTypes).state} />
        <DataBox
          title={"Nationality"}
          flag={handleGetFlag((data as OwnerTypes).nationality)}
          value={(data as OwnerTypes).nationality}
        />
        <DataBox
          title={"Emirates Id"}
          value={(data as OwnerTypes).emiratesId}
        />
      </Box>
    </Paper>
  ) : (
    !isLoading && variant === "company" && <></>
  );
};

export default ProfileDetails;
