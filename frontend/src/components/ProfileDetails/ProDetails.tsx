import { Box, Divider, Paper, Typography } from "@mui/material";
import { ReactNode, useContext } from "react";
import { useSelector } from "react-redux";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleDate } from "../../functions/handleDate";
import { handleGetFlag } from "../../functions/handleGetFlag";
import { RootState } from "../../store/store";
import { OwnerTypes, ProTypes } from "../../types/store.types";
import Button from "../Button/Button";
import StatusBox from "../StatusBox/StatusBox";
import Title from "../Title/Title";
import UserBox from "../UserBox/UserBox";
import DataBox from "./DataBox";

const ProDetails = ({
  data,
  title,
  classes,
  natwasalBox,
  eChannelBox,
  tasheelBox,
}: {
  data: ProTypes;
  title: string;
  classes: { [key: string]: string };
  natwasalBox: ReactNode;
  eChannelBox: ReactNode;
  tasheelBox: ReactNode;
}) => {
  const { setEditableProData } = useContext(FormsContext);
  const {
    handleOpenLinkToCompanyModal,
    handleOpenProModal,
    handleOpenDeleteModal,
  } = useContext(ModalsContext);
  const { pro } = useSelector((state: RootState) => state.pro);

  const handleProLink = () => {
    handleOpenLinkToCompanyModal("linkPro");
    setEditableProData(pro);
  };
  const handleEditPro = () => {
    setEditableProData(pro);
    handleOpenProModal("editPro");
  };
  const handleDeletePro = () => {
    handleOpenDeleteModal("pro");
    setEditableProData(pro);
  };

  return (
    <Paper className={classes.profileClasses} elevation={11}>
      <Title align={"left"} head={"h4"} title={title} />
      <Box className={classes.profileDataClasses}>
        <UserBox
          avatar={(data as ProTypes).avatar}
          username={(data as ProTypes).name}
          size={"3xlarge"}
          head={"h5"}
          res={true}
        />
        <Box className={classes.profileButtonsClasses}>
          <Button title={"Link"} handling={handleProLink} bg={"!bg-zinc-500"} />
          <Button
            title={"Edit"}
            handling={handleEditPro}
            bg={`!bg-green-500`}
          />
          <Button
            title={"Delete"}
            bg={`!bg-red-500`}
            handling={handleDeletePro}
          />
        </Box>
      </Box>
      <Divider />
      <Box className={classes.sectionClasses}>
        <Typography variant="h4" className={`!font-[700]`}>
          Officer Information
        </Typography>
        <Box className={classes.profileInfoClasses}>
          <DataBox title={"Arabic Name"} value={(data as ProTypes).nameAr} />
          <DataBox
            title={"Person Code"}
            value={(data as ProTypes).personCode}
          />
          <DataBox title={"Email"} value={(data as ProTypes).email} />
          <DataBox title={"Phone"} value={(data as ProTypes).phone} />
          <DataBox title={"Address"} value={(data as ProTypes).address} />
          <DataBox
            title={"Date of Birth"}
            value={handleDate((data as ProTypes).dob)}
          />
          <DataBox title={"State"} value={(data as ProTypes).state} />
          <DataBox
            title={"Nationality"}
            flag={handleGetFlag((data as ProTypes).nationality)}
            value={(data as ProTypes).nationality}
          />
          <DataBox title={"Job Title"} value={(data as ProTypes).job} />
          <DataBox title={"Gender"} value={(data as ProTypes).gender} />
          <DataBox
            title={"Emirates Id"}
            value={(data as ProTypes).emiratesId}
          />
          <DataBox title={"UID Number"} value={(data as ProTypes).uid} />
          <DataBox
            title={"File Immigration Number"}
            value={(data as ProTypes).fileImmgNo}
          />
          <DataBox
            title={"Residence Expire Date"}
            value={handleDate((data as ProTypes).residenceExpiryDate)}
          />
          <DataBox
            title={"Status"}
            value={<StatusBox status={(data as ProTypes).status} />}
          />
          <DataBox title={"Sponsor"} value={(data as OwnerTypes).sponsor} />
          <DataBox title={"Remarks"} value={(data as ProTypes).remarks} />
          <DataBox
            title={"Created At"}
            value={handleDate((data as ProTypes).createdAt, true)}
          />
        </Box>
      </Box>
      {eChannelBox}
      {tasheelBox}
      {natwasalBox}
      {(data as ProTypes)?.medical && (
        <>
          <Divider />
          <Box className={classes.sectionClasses}>
            <Typography variant="h4" className={`!font-[700]`}>
              Medical Insurance
            </Typography>
            <Box className={classes.profileInfoClasses}>
              <DataBox
                title={"Insurance Company"}
                value={(data as ProTypes)?.medical?.insurance}
              />
              <DataBox
                title={"Policy Number"}
                value={(data as ProTypes)?.medicalPolicyNo}
              />
              <DataBox
                title={"Expire Date"}
                value={handleDate((data as ProTypes)?.medical?.expireDate)}
              />
            </Box>
          </Box>
        </>
      )}
      {(data as ProTypes).iLOE && (
        <>
          <Divider />
          <Box className={classes.sectionClasses}>
            <Typography variant="h4" className={`!font-[700]`}>
              Involuntary Loss Of Employment (ILOE)
            </Typography>
            <Box className={classes.profileInfoClasses}>
              <DataBox
                title={"Insurance Company"}
                value={(data as ProTypes).iLOE.insurance}
              />
              <DataBox
                title={"Policy Number"}
                value={(data as ProTypes).iLOEPolicyNo}
              />
              <DataBox
                title={"Expire Date"}
                value={handleDate((data as ProTypes).iLOE.expireDate)}
              />
            </Box>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default ProDetails;
