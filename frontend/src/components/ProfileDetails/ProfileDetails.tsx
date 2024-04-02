import { Box, Paper } from "@mui/material";
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
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    setDeleteType,
    handleOpenDeleteModal,
    setEditableOwnerData,
    setEditableUserData,
    setEditableCompanyData,
  } = useContext(FormsContext);
  const { owner } = useSelector((state: RootState) => state.owner);
  const { user } = useSelector((state: RootState) => state.user);
  const { company } = useSelector((state: RootState) => state.company);

  const handleEditUser = () => {
    setEditableUserData(user);
    navigate(`${import.meta.env.VITE_USERS_ROUTE}/${id}/edit`);
  };
  const handleDeleteUser = () => {
    handleOpenDeleteModal();
    setDeleteType("user");
    setEditableUserData(user);
  };

  const handleEditOwner = () => {
    setEditableOwnerData(owner);
    navigate(`${import.meta.env.VITE_OWNERS_ROUTE}/${id}/edit`);
  };
  const handleDeleteOwner = () => {
    handleOpenDeleteModal();
    setDeleteType("owner");
    setEditableOwnerData(owner);
  };

  const handleEditCompany = () => {
    setEditableCompanyData(company);
    navigate(`${import.meta.env.VITE_COMPANIES_ROUTE}/${id}/edit`);
  };
  const handleDeleteCompany = () => {
    handleOpenDeleteModal();
    setDeleteType("company");
    setEditableCompanyData(company);
  };

  return isLoading ? (
    <LoadingProfileDetails />
  ) : (
    data &&
      (variant === "user" ? (
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
            {(data as UserTypes).createdAt && (
              <DataBox
                title={"Created At"}
                value={handleDate((data as UserTypes).createdAt)}
              />
            )}
          </Box>
        </Paper>
      ) : variant === "owner" ? (
        <Paper
          className={`grid justify-stretch items-center gap-10 p-6 !rounded-xl`}
          elevation={11}
        >
          <Title align={"left"} head={"h4"} title={title} />
          <Box className={`flex justify-between items-center gap-6`}>
            <UserBox
              avatar={(data as UserTypes).avatar}
              username={(data as UserTypes).name}
              size={"3xlarge"}
              head={"h5"}
            />
            <Box className={`flex justify-end items-center gap-2`}>
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
          <Box className={`grid justify-start items-center gap-8 grid-cols-2 `}>
            {(data as OwnerTypes).nameAr && (
              <DataBox
                title={"Arabic Name"}
                value={(data as OwnerTypes).nameAr}
              />
            )}
            {(data as OwnerTypes).personCode && (
              <DataBox
                title={"Person Code"}
                value={(data as OwnerTypes).personCode}
              />
            )}
            {(data as OwnerTypes).email && (
              <DataBox title={"Email"} value={(data as OwnerTypes).email} />
            )}
            {(data as OwnerTypes).phone && (
              <DataBox title={"Phone"} value={(data as OwnerTypes).phone} />
            )}
            {(data as OwnerTypes).address && (
              <DataBox title={"Address"} value={(data as OwnerTypes).address} />
            )}
            {handleDate((data as OwnerTypes).dob) && (
              <DataBox
                title={"Date of Birth"}
                value={handleDate((data as OwnerTypes).dob)}
              />
            )}
            {(data as OwnerTypes).state && (
              <DataBox title={"State"} value={(data as OwnerTypes).state} />
            )}
            {(data as OwnerTypes).nationality && (
              <DataBox
                title={"Nationality"}
                flag={handleGetFlag((data as OwnerTypes).nationality)}
                value={(data as OwnerTypes).nationality}
              />
            )}
            {(data as OwnerTypes).emiratesId && (
              <DataBox
                title={"Emirates Id"}
                value={(data as OwnerTypes).emiratesId}
              />
            )}
            {(data as OwnerTypes)._id && (
              <DataBox title={"UID Number"} value={(data as OwnerTypes)._id} />
            )}
            {(data as OwnerTypes).remarks && (
              <DataBox title={"Remarks"} value={(data as OwnerTypes).remarks} />
            )}
            {(data as OwnerTypes).createdAt && (
              <DataBox
                title={"Created At"}
                value={handleDate((data as OwnerTypes).createdAt)}
              />
            )}
          </Box>
        </Paper>
      ) : (
        variant === "company" && (
          <Paper
            className={`grid justify-stretch items-center gap-10 p-6 !rounded-xl`}
            elevation={11}
          >
            <Title align={"left"} head={"h5"} title={title} />
            <Box className={`flex justify-between items-center gap-6`}>
              <UserBox
                avatar={(data as CompanyTypes).logo}
                username={(data as CompanyTypes).name}
                size={"3xlarge"}
                head={"h4"}
              />
              <Box className={`flex justify-end items-center gap-2`}>
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
            <Box
              className={`grid justify-start items-center gap-8 grid-cols-2 `}
            >
              {(data as CompanyTypes).nameAr && (
                <DataBox
                  title={"Arabic Name"}
                  value={(data as CompanyTypes).nameAr}
                />
              )}
              {(data as CompanyTypes).email && (
                <DataBox title={"Email"} value={(data as CompanyTypes).email} />
              )}

              {(data as CompanyTypes).phone && (
                <DataBox title={"Phone"} value={(data as CompanyTypes).phone} />
              )}

              {(data as CompanyTypes).status && (
                <DataBox
                  title={"Status"}
                  value={(data as CompanyTypes).status}
                />
              )}
              {(data as CompanyTypes).molCode && (
                <DataBox
                  title={"MOL Code"}
                  value={(data as CompanyTypes).molCode}
                />
              )}
              {(data as CompanyTypes).molCategory && (
                <DataBox
                  title={"MOL Category"}
                  value={(data as CompanyTypes).molCategory}
                />
              )}
              {(data as CompanyTypes).establishmentType && (
                <DataBox
                  title={"Establishment Type"}
                  value={(data as CompanyTypes).establishmentType}
                />
              )}

              {(data as CompanyTypes).licenseNo && (
                <DataBox
                  title={"License Number"}
                  value={(data as CompanyTypes).licenseNo}
                />
              )}
              {(data as CompanyTypes).licenseIssuePlace && (
                <DataBox
                  title={"License Issue Place"}
                  value={(data as CompanyTypes).licenseIssuePlace}
                />
              )}
              {(data as CompanyTypes).licenseExpiryDate && (
                <DataBox
                  title={"License Expire Date"}
                  value={handleDate((data as CompanyTypes).licenseExpiryDate)}
                />
              )}
              {(data as CompanyTypes).licenseIssueDate && (
                <DataBox
                  title={"License Issue Date"}
                  value={handleDate((data as CompanyTypes).licenseIssueDate)}
                />
              )}
              {(data as CompanyTypes).immgCardNo && (
                <DataBox
                  title={"IMMG Card Number"}
                  value={(data as CompanyTypes).immgCardNo}
                />
              )}
              {(data as CompanyTypes).immgCardExpiry && (
                <DataBox
                  title={"IMMG Card Expire Date"}
                  value={handleDate((data as CompanyTypes).immgCardExpiry)}
                />
              )}

              {(data as CompanyTypes).website && (
                <DataBox
                  title={"Website"}
                  value={(data as CompanyTypes).website}
                />
              )}
              {(data as CompanyTypes).whatsAppNo && (
                <DataBox
                  title={"Whatsapp Number"}
                  value={(data as CompanyTypes).whatsAppNo}
                />
              )}
              {(data as CompanyTypes).tenancyContractValue && (
                <DataBox
                  title={"Tenancy Contract Value"}
                  value={(data as CompanyTypes).tenancyContractValue}
                />
              )}
              {(data as CompanyTypes).tenancyContractExp && (
                <DataBox
                  title={"Tenancy Contract Expire Date"}
                  value={handleDate((data as CompanyTypes).tenancyContractExp)}
                />
              )}
              {(data as CompanyTypes).remarks && (
                <DataBox
                  title={"Remarks"}
                  value={(data as CompanyTypes).remarks}
                />
              )}
              {(data as CompanyTypes).createdAt && (
                <DataBox
                  title={"Created At"}
                  value={handleDate((data as CompanyTypes).createdAt)}
                />
              )}
            </Box>
          </Paper>
        )
      ))
  );
};

export default ProfileDetails;
