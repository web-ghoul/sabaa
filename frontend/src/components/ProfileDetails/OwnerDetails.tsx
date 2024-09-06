import { Box, Divider, Paper, Typography } from "@mui/material";
import { ReactNode, useContext } from "react";
import { useSelector } from "react-redux";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleDate } from "../../functions/handleDate";
import { handleGetFlag } from "../../functions/handleGetFlag";
import { RootState } from "../../store/store";
import { OwnerTypes } from "../../types/store.types";
import Button from "../Button/Button";
import StatusBox from "../StatusBox/StatusBox";
import Title from "../Title/Title";
import UserBox from "../UserBox/UserBox";
import DataBox from "./DataBox";

const OwnerDetails = ({
  data,
  title,
  classes,
  natwasalBox,
  eChannelBox,
  tasheelBox,
}: {
  data: OwnerTypes;
  title: string;
  classes: { [key: string]: string };
  natwasalBox: ReactNode;
  eChannelBox: ReactNode;
  tasheelBox: ReactNode;
}) => {
  const {
    handleOpenLinkToCompanyModal,
    handleOpenOwnerModal,
    handleOpenDeleteModal,
  } = useContext(ModalsContext);
  const { setEditableOwnerData } = useContext(FormsContext);
  const { owner } = useSelector((state: RootState) => state.owner);

  //Owner
  const handleOwnerLink = () => {
    handleOpenLinkToCompanyModal("linkOwner");
    setEditableOwnerData(owner);
  };
  const handleEditOwner = () => {
    setEditableOwnerData(owner);
    handleOpenOwnerModal("editOwner");
  };
  const handleDeleteOwner = () => {
    handleOpenDeleteModal("owner");
    setEditableOwnerData(owner);
  };
  return (
    <Paper className={classes.profileClasses} elevation={11}>
      <Title align={"left"} head={"h4"} title={title} />
      <Box className={classes.profileDataClasses}>
        <UserBox
          avatar={(data as OwnerTypes).avatar}
          username={(data as OwnerTypes).name}
          size={"3xlarge"}
          head={"h5"}
          res={true}
        />
        <Box className={classes.profileButtonsClasses}>
          <Button
            title={"Link"}
            handling={handleOwnerLink}
            bg={"!bg-zinc-500"}
          />
          <Button
            title={"Edit"}
            handling={handleEditOwner}
            bg={`!bg-green-500`}
          />
          <Button
            title={"Delete"}
            bg={`!bg-red-500`}
            handling={handleDeleteOwner}
          />
        </Box>
      </Box>
      <Divider />
      <Box className={classes.sectionClasses}>
        <Typography variant="h4" className={`!font-[700]`}>
          Owner Information
        </Typography>
        <Box className={classes.profileInfoClasses}>
          <DataBox title={"Arabic Name"} value={(data as OwnerTypes).nameAr} />
          <DataBox
            title={"Person Code"}
            value={(data as OwnerTypes).personCode}
          />
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
          <DataBox title={"Job Title"} value={(data as OwnerTypes).job} />
          <DataBox title={"Gender"} value={(data as OwnerTypes).gender} />
          <DataBox
            title={"Emirates Id"}
            value={(data as OwnerTypes).emiratesId}
          />
          <DataBox title={"UID Number"} value={(data as OwnerTypes).uid} />
          <DataBox
            title={"File Immigration Number"}
            value={(data as OwnerTypes).fileImmgNo}
          />
          <DataBox
            title={"Residence Expire Date"}
            value={handleDate((data as OwnerTypes).residenceExpiryDate)}
          />
          <DataBox
            title={"Status"}
            value={<StatusBox status={(data as OwnerTypes).status} />}
          />
          <DataBox title={"Sponsor"} value={(data as OwnerTypes).sponsor} />
          <DataBox title={"Remarks"} value={(data as OwnerTypes).remarks} />
          <DataBox
            title={"Created At"}
            value={handleDate((data as OwnerTypes).createdAt, true)}
          />
        </Box>
      </Box>
      {eChannelBox}
      {tasheelBox}
      {natwasalBox}
      {(data as OwnerTypes)?.medical && (
        <>
          <Divider />
          <Box className={classes.sectionClasses}>
            <Typography variant="h4" className={`!font-[700]`}>
              Medical Insurance
            </Typography>
            <Box className={classes.profileInfoClasses}>
              <DataBox
                title={"Insurance Company"}
                value={(data as OwnerTypes)?.medical?.insurance}
              />
              <DataBox
                title={"Policy Number"}
                value={(data as OwnerTypes)?.medicalPolicyNo}
              />
              <DataBox
                title={"Expire Date"}
                value={handleDate((data as OwnerTypes)?.medical?.expireDate)}
              />
            </Box>
          </Box>
        </>
      )}
      {(data as OwnerTypes).iLOE && (
        <>
          <Divider />
          <Box className={classes.sectionClasses}>
            <Typography variant="h4" className={`!font-[700]`}>
              Involuntary Loss Of Employment (ILOE)
            </Typography>
            <Box className={classes.profileInfoClasses}>
              <DataBox
                title={"Insurance Company"}
                value={(data as OwnerTypes).iLOE.insurance}
              />
              <DataBox
                title={"Policy Number"}
                value={(data as OwnerTypes).iLOEPolicyNo}
              />
              <DataBox
                title={"Expire Date"}
                value={handleDate((data as OwnerTypes).iLOE.expireDate)}
              />
            </Box>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default OwnerDetails;
