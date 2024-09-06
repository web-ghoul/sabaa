import { Box, Divider, Typography } from "@mui/material";
import { handleDate } from "../../functions/handleDate";
import { ProfileDetailsTypes } from "../../types/components.types";
import {
  CompanyTypes,
  CustomerTypes,
  EmployeeTypes,
  OwnerTypes,
  ProTypes,
  SponsorTypes,
  UserTypes,
} from "../../types/store.types";
import PasswordBox from "../PasswordBox/PasswordBox";
import StatusBox from "../StatusBox/StatusBox";
import CompanyDetails from "./CompanyDetails";
import CustomerDetails from "./CustomerDetails";
import DataBox from "./DataBox";
import EmployeeDetails from "./EmployeeDetails";
import LoadingProfileDetails from "./LoadingProfileDetails";
import OwnerDetails from "./OwnerDetails";
import ProDetails from "./ProDetails";
import SponsorDetails from "./SponsorDetails";
import UserDetails from "./UserDetails";

const ProfileDetails = ({
  title,
  data,
  eChannel,
  tasheel,
  natwasal,
  variant,
  isLoading,
}: ProfileDetailsTypes) => {
  const profileInfoClasses = `grid justify-stretch items-start gap-6 md:gap-4 grid-cols-[1fr,1fr,1fr,1fr] lg:grid-cols-[1fr,1fr,1fr] sm:grid-cols-[1fr,1fr] xs:grid-cols-1`;
  const sectionClasses = `grid gap-8 md:gap-6 sm:gap-3`;

  const classes = {
    profileClasses: `grid justify-stretch items-center gap-8 p-6 !rounded-xl md:gap-6 sm:!gap-4`,
    profileDataClasses: `flex justify-between items-center gap-6 md:gap-4 sm:grid sm:justify-center`,
    profileInfoClasses: `grid justify-stretch items-start gap-6 md:gap-4 grid-cols-[1fr,1fr,1fr,1fr] lg:grid-cols-[1fr,1fr,1fr] sm:grid-cols-[1fr,1fr] xs:grid-cols-1`,
    profileButtonsClasses: `flex justify-end items-center gap-2 sm:justify-center`,
    sectionClasses: `grid gap-8 md:gap-6 sm:gap-3`,
  };

  const eChannelBox = eChannel && (
    <>
      <Divider />
      <Box className={sectionClasses}>
        <Typography variant="h4" className={`!font-[700]`}>
          E-Channel Information
        </Typography>
        <Box className={profileInfoClasses}>
          <DataBox title={"Username"} value={eChannel.username} />
          <DataBox
            title={"Password"}
            value={<PasswordBox password={eChannel.password} />}
          />
          <DataBox
            title={"Status"}
            value={<StatusBox status={eChannel.status} />}
          />
          <DataBox title={"Notes"} value={eChannel.eChannelNotes} />
          <DataBox
            title={"Created At"}
            value={handleDate(eChannel.createdAt, true)}
          />
        </Box>
      </Box>
    </>
  );

  const tasheelBox = tasheel && (
    <>
      <Divider />
      <Box className={sectionClasses}>
        <Typography variant="h4" className={`!font-[700]`}>
          Tasheel Information
        </Typography>
        <Box className={profileInfoClasses}>
          <DataBox title={"Tasheel Email"} value={tasheel.email} />
          <DataBox title={"Username"} value={tasheel.username} />
          <DataBox
            title={"Password"}
            value={<PasswordBox password={tasheel.password} />}
          />
          <DataBox title={"Security 1"} value={tasheel.security1} />
          <DataBox title={"Security 2"} value={tasheel.security2} />
          <DataBox title={"Mobile"} value={tasheel.mobile} />
          <DataBox title={"Notes"} value={tasheel.notes} />
          <DataBox
            title={"Created At"}
            value={handleDate(tasheel.createdAt, true)}
          />
        </Box>
      </Box>
    </>
  );

  const natwasalBox = natwasal && (
    <>
      <Divider />
      <Box className={sectionClasses}>
        <Typography variant="h4" className={`!font-[700]`}>
          Natwasal Information
        </Typography>
        <Box className={profileInfoClasses}>
          <DataBox title={"Natawasal Email"} value={natwasal.email} />
          <DataBox title={"Username"} value={natwasal.username} />
          <DataBox
            title={"Password"}
            value={<PasswordBox password={natwasal.password} />}
          />
          <DataBox title={"Security 1"} value={natwasal.security1} />
          <DataBox title={"Security 2"} value={natwasal.security2} />
          <DataBox title={"Mobile"} value={natwasal.mobile} />
          <DataBox title={"Notes"} value={natwasal.notes} />
          <DataBox
            title={"Created At"}
            value={handleDate(natwasal.createdAt, true)}
          />
        </Box>
      </Box>
    </>
  );

  return isLoading ? (
    <LoadingProfileDetails />
  ) : (
    data &&
      (variant === "user" ? (
        <UserDetails data={data as UserTypes} title={title} classes={classes} />
      ) : variant === "owner" ? (
        <OwnerDetails
          data={data as OwnerTypes}
          title={title}
          classes={classes}
          eChannelBox={eChannelBox}
          tasheelBox={tasheelBox}
          natwasalBox={natwasalBox}
        />
      ) : variant === "officer" ? (
        <ProDetails
          data={data as ProTypes}
          title={title}
          classes={classes}
          eChannelBox={eChannelBox}
          tasheelBox={tasheelBox}
          natwasalBox={natwasalBox}
        />
      ) : variant === "customer" ? (
        <CustomerDetails
          data={data as CustomerTypes}
          title={title}
          classes={classes}
          eChannelBox={eChannelBox}
          tasheelBox={tasheelBox}
          natwasalBox={natwasalBox}
        />
      ) : variant === "sponsor" ? (
        <SponsorDetails
          data={data as SponsorTypes}
          title={title}
          classes={classes}
        />
      ) : variant === "employee" ? (
        <EmployeeDetails
          data={data as EmployeeTypes}
          title={title}
          classes={classes}
          eChannelBox={eChannelBox}
          tasheelBox={tasheelBox}
          natwasalBox={natwasalBox}
        />
      ) : (
        variant === "company" && (
          <CompanyDetails
            data={data as CompanyTypes}
            title={title}
            classes={classes}
          />
        )
      ))
  );
};

export default ProfileDetails;
