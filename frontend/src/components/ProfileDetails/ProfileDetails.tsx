import { Box, Divider, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FormsContext } from "../../contexts/FormsContext";
import { handleDate } from "../../functions/handleDate";
import { handleGetFlag } from "../../functions/handleGetFlag";
import { PrimaryButton } from "../../mui/buttons/PrimaryButton";
import { RootState } from "../../store/store";
import { ProfileDetailsTypes } from "../../types/components.types";
import { CompanyTypes, OwnerTypes, UserTypes } from "../../types/store.types";
import Button from "../Button/Button";
import Title from "../Title/Title";
import UserBox from "../UserBox/UserBox";
import DataBox from "./DataBox";
import LoadingProfileDetails from "./LoadingProfileDetails";

const ProfileDetails = ({
  title,
  data,
  variant,
  isLoading,
}: ProfileDetailsTypes) => {
  const profileClasses = `grid justify-stretch items-center gap-8 p-6 !rounded-xl md:gap-6 sm:!gap-4`;
  const profileDataClasses = `flex justify-between items-center gap-6 md:gap-4 sm:grid sm:justify-center`;
  const profileInfoClasses = `grid justify-start items-center gap-6 md:gap-4 grid-cols-[1fr,1fr,1fr,1fr] lg:grid-cols-[1fr,1fr,1fr] sm:grid-cols-[1fr,1fr] xs:grid-cols-1`;
  const profileButtonsClasses = `flex justify-end items-center gap-2 sm:justify-center`;
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    handleOpenDeleteModal,
    setEditableOwnerData,
    setEditableUserData,
    setEditableCompanyData,
    handleOpenUserModal,
    handleOpenOwnerModal,
  } = useContext(FormsContext);
  const { owner } = useSelector((state: RootState) => state.owner);
  const { user } = useSelector((state: RootState) => state.user);
  const { company } = useSelector((state: RootState) => state.company);

  const handleEditUser = () => {
    setEditableUserData(user);
    handleOpenUserModal("editUser");
  };
  const handleDeleteUser = () => {
    handleOpenDeleteModal("user");
    setEditableUserData(user);
  };

  const handleEditOwner = () => {
    setEditableOwnerData(owner);
    handleOpenOwnerModal("editOwner");
  };
  const handleDeleteOwner = () => {
    handleOpenDeleteModal("owner");
    setEditableOwnerData(owner);
  };

  const handleEditCompany = () => {
    if (company) {
      const c: CompanyTypes = { ...company };
      c.ownerId = company?.ownerId?.map((owner) => (owner as OwnerTypes)._id);
      setEditableCompanyData(c);
    }
    navigate(`${import.meta.env.VITE_COMPANIES_ROUTE}/${id}/edit`);
  };
  const handleDeleteCompany = () => {
    handleOpenDeleteModal("company");
    setEditableCompanyData(company);
  };

  return isLoading ? (
    <LoadingProfileDetails />
  ) : (
    data &&
      (variant === "user" ? (
        <Paper className={profileClasses} elevation={11}>
          <Title align={"left"} head={"h5"} title={title} />
          <Box className={profileDataClasses}>
            <UserBox
              avatar={(data as UserTypes).avatar}
              username={(data as UserTypes).name}
              size={"3xlarge"}
              head={"h4"}
            />
            <Box className={profileButtonsClasses}>
              <Button
                title={"Edit"}
                handling={handleEditUser}
                bg={"!bg-green-500"}
              />
              <Button
                title={"Delete"}
                handling={handleDeleteUser}
                bg={"!bg-red-500"}
              />
            </Box>
          </Box>
          <Box className={profileInfoClasses}>
            <DataBox title={"English Name"} value={(data as UserTypes).name} />
            <DataBox title={"Email"} value={(data as UserTypes).email} />
            <DataBox title={"Phone"} value={(data as UserTypes).phone} />
            <DataBox title={"Role"} value={(data as UserTypes).role} />
            <DataBox title={"Status"} value={(data as UserTypes).status} />
            {(data as UserTypes).createdAt && (
              <DataBox
                title={"Created At"}
                value={handleDate((data as UserTypes).createdAt)}
              />
            )}
          </Box>
        </Paper>
      ) : variant === "owner" ? (
        <Paper className={profileClasses} elevation={11}>
          <Title align={"left"} head={"h4"} title={title} />
          <Box className={profileDataClasses}>
            <UserBox
              avatar={(data as UserTypes).avatar}
              username={(data as UserTypes).name}
              size={"3xlarge"}
              head={"h5"}
              res={true}
            />
            <Box className={profileButtonsClasses}>
              <PrimaryButton
                onClick={handleEditOwner}
                className={`!bg-green-500 hover:!bg-green-600`}
              >
                Edit
              </PrimaryButton>
              <PrimaryButton
                className={`!bg-red-500 hover:!bg-red-600`}
                onClick={handleDeleteOwner}
              >
                Delete
              </PrimaryButton>
            </Box>
          </Box>
          <Divider />
          <Box className={`grid gap-4 sm:gap-3`}>
            <Typography variant="h4" className={`!font-[700]`}>
              Owner Information
            </Typography>
            <Box className={profileInfoClasses}>
              <DataBox
                title={"Arabic Name"}
                value={(data as OwnerTypes).nameAr}
              />
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
              <DataBox
                title={"Emirates Id"}
                value={(data as OwnerTypes).emiratesId}
              />
              <DataBox title={"UID Number"} value={(data as OwnerTypes)._id} />
              <DataBox title={"Remarks"} value={(data as OwnerTypes).remarks} />
              <DataBox
                title={"Created At"}
                value={handleDate((data as OwnerTypes).createdAt)}
              />
            </Box>
          </Box>
        </Paper>
      ) : (
        variant === "company" && (
          <Paper className={profileClasses} elevation={11}>
            <Title align={"left"} head={"h5"} title={title} />
            <Box className={profileDataClasses}>
              <UserBox
                avatar={(data as CompanyTypes).logo}
                username={(data as CompanyTypes).name}
                size={"3xlarge"}
                head={"h4"}
                res={true}
              />
              <Box className={profileButtonsClasses}>
                <PrimaryButton
                  onClick={handleEditCompany}
                  className={`!bg-green-500 hover:!bg-green-600`}
                >
                  Edit
                </PrimaryButton>
                <PrimaryButton
                  onClick={handleDeleteCompany}
                  className={`!bg-red-500 hover:!bg-red-600`}
                >
                  Delete
                </PrimaryButton>
              </Box>
            </Box>
            <Divider />
            <Box className={`grid gap-4`}>
              <Typography variant="h4" className={`!font-[700]`}>
                Business Details
              </Typography>
              <Box className={profileInfoClasses}>
                <DataBox
                  title={"MOL Code"}
                  value={(data as CompanyTypes).molCode}
                />
                <DataBox
                  title={"MOL Category"}
                  value={(data as CompanyTypes).molCategory}
                />
                <DataBox
                  title={"Establishment Type"}
                  value={(data as CompanyTypes).establishmentType}
                />
                <DataBox
                  title={"License Number"}
                  value={(data as CompanyTypes).licenseNo}
                />
                <DataBox
                  title={"License Issue Place"}
                  value={(data as CompanyTypes).licenseIssuePlace}
                />
                <DataBox
                  title={"License Expire Date"}
                  value={handleDate((data as CompanyTypes).licenseExpiryDate)}
                />
                <DataBox
                  title={"License Issue Date"}
                  value={handleDate((data as CompanyTypes).licenseIssueDate)}
                />
                <DataBox
                  title={"IMMG Card Number"}
                  value={(data as CompanyTypes).immgCardNo}
                />
                <DataBox
                  title={"IMMG Card Expire Date"}
                  value={handleDate((data as CompanyTypes).immgCardExpiry)}
                />
                <DataBox
                  title={"Tenancy Contract Value"}
                  value={(data as CompanyTypes).tenancyContractValue}
                />
                <DataBox
                  title={"Tenancy Contract Expire Date"}
                  value={handleDate((data as CompanyTypes).tenancyContractExp)}
                />
              </Box>
            </Box>
            <Divider />
            <Box className={`grid gap-4 sm:gap-3`}>
              <Typography variant="h4" className={`!font-[700]`}>
                Company Information
              </Typography>
              <Box className={profileInfoClasses}>
                <DataBox
                  title={"Arabic Name"}
                  value={(data as CompanyTypes).nameAr}
                />
                <DataBox title={"Email"} value={(data as CompanyTypes).email} />
                <DataBox title={"Phone"} value={(data as CompanyTypes).phone} />
                <DataBox
                  title={"Status"}
                  value={(data as CompanyTypes).status}
                />
                <DataBox
                  title={"Website"}
                  value={(data as CompanyTypes).website}
                />
                <DataBox
                  title={"Whatsapp Number"}
                  value={(data as CompanyTypes).whatsAppNo}
                />
                <DataBox
                  title={"Remarks"}
                  value={(data as CompanyTypes).remarks}
                />
                <DataBox
                  title={"Created At"}
                  value={handleDate((data as CompanyTypes).createdAt)}
                />
              </Box>
            </Box>
          </Paper>
        )
      ))
  );
};

export default ProfileDetails;
