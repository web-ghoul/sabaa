import { Box, Divider, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleDate } from "../../functions/handleDate";
import { handleGetFlag } from "../../functions/handleGetFlag";
import { CustomerTypes, SponsorTypes } from "../../types/store.types";
import Button from "../Button/Button";
import StatusBox from "../StatusBox/StatusBox";
import Title from "../Title/Title";
import UserBox from "../UserBox/UserBox";
import DataBox from "./DataBox";

const SponsorDetails = ({
  data,
  title,
  classes,
}: {
  data: SponsorTypes;
  title: string;
  classes: { [key: string]: string };
}) => {
  const { setEditableSponsorData } = useContext(FormsContext);
  const { handleOpenDeleteModal, handleOpenSponsorModal } =
    useContext(ModalsContext);

  //Sponsor
  const handleEditSponsor = () => {
    setEditableSponsorData(data as SponsorTypes);
    handleOpenSponsorModal("editSponsor");
  };
  const handleDeleteSponsor = () => {
    setEditableSponsorData(data as SponsorTypes);
    handleOpenDeleteModal("sponsor");
  };

  return (
    <Paper className={classes.profileClasses} elevation={11}>
      <Title align={"left"} head={"h4"} title={title} />
      <Box className={classes.profileDataClasses}>
        <UserBox
          avatar={(data as SponsorTypes).avatar}
          username={(data as SponsorTypes).name}
          size={"3xlarge"}
          head={"h5"}
          res={true}
        />
        <Box className={classes.profileButtonsClasses}>
          <Button
            title={"Edit"}
            handling={handleEditSponsor}
            bg={`!bg-green-500`}
          />
          <Button
            title={"Delete"}
            bg={`!bg-red-500`}
            handling={handleDeleteSponsor}
          />
        </Box>
      </Box>
      <Divider />
      <Box className={classes.sectionClasses}>
        <Typography variant="h4" className={`!font-[700]`}>
          Sponsor Information
        </Typography>
        <Box className={classes.profileInfoClasses}>
          <DataBox
            title={"Arabic Name"}
            value={(data as SponsorTypes).nameAr}
          />
          <DataBox title={"Email"} value={(data as CustomerTypes).email} />
          <DataBox title={"Phone"} value={(data as CustomerTypes).phone} />
          <DataBox title={"Address"} value={(data as SponsorTypes).address} />
          <DataBox
            title={"Date of Birth"}
            value={handleDate((data as SponsorTypes).dob)}
          />
          <DataBox title={"State"} value={(data as CustomerTypes).state} />
          <DataBox
            title={"Nationality"}
            flag={handleGetFlag((data as SponsorTypes).nationality)}
            value={(data as CustomerTypes).nationality}
          />
          <DataBox title={"Job Title"} value={(data as SponsorTypes).job} />
          <DataBox title={"Gender"} value={(data as SponsorTypes).gender} />
          <DataBox
            title={"Emirates Id"}
            value={(data as SponsorTypes).emiratesId}
          />
          <DataBox title={"UID Number"} value={(data as SponsorTypes).uid} />
          <DataBox
            title={"Relative Relation"}
            value={(data as SponsorTypes).relativeRelation}
          />
          <DataBox
            title={"File Immigration Number"}
            value={(data as SponsorTypes).fileImmgNo}
          />
          <DataBox
            title={"Residence Expire Date"}
            value={handleDate((data as SponsorTypes).residenceExpiryDate)}
          />
          <DataBox
            title={"Status"}
            value={<StatusBox status={(data as SponsorTypes).status} />}
          />
          <DataBox title={"Remarks"} value={(data as SponsorTypes).remarks} />
          <DataBox
            title={"Created At"}
            value={handleDate((data as SponsorTypes).createdAt, true)}
          />
        </Box>
      </Box>
      {(data as SponsorTypes)?.medical && (
        <>
          <Divider />
          <Box className={classes.sectionClasses}>
            <Typography variant="h4" className={`!font-[700]`}>
              Medical Insurance
            </Typography>
            <Box className={classes.profileInfoClasses}>
              <DataBox
                title={"Insurance Company"}
                value={(data as SponsorTypes)?.medical?.insurance}
              />
              <DataBox
                title={"Policy Number"}
                value={(data as SponsorTypes)?.medicalPolicyNo}
              />
              <DataBox
                title={"Expire Date"}
                value={handleDate((data as SponsorTypes)?.medical?.expireDate)}
              />
            </Box>
          </Box>
        </>
      )}
      {(data as SponsorTypes).iLOE && (
        <>
          <Divider />
          <Box className={classes.sectionClasses}>
            <Typography variant="h4" className={`!font-[700]`}>
              Involuntary Loss Of Employment (ILOE)
            </Typography>
            <Box className={classes.profileInfoClasses}>
              <DataBox
                title={"Insurance Company"}
                value={(data as SponsorTypes).iLOE.insurance}
              />
              <DataBox
                title={"Policy Number"}
                value={(data as SponsorTypes).iLOEPolicyNo}
              />
              <DataBox
                title={"Expire Date"}
                value={handleDate((data as SponsorTypes).iLOE.expireDate)}
              />
            </Box>
          </Box>
        </>
      )}
    </Paper>
  );
};

export default SponsorDetails;
