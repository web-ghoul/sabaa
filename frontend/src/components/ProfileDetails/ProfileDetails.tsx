import { Box, Divider, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FormsContext } from "../../contexts/FormsContext";
import { handleDate } from "../../functions/handleDate";
import { handleGetFlag } from "../../functions/handleGetFlag";
import { RootState } from "../../store/store";
import { ProfileDetailsTypes } from "../../types/components.types";
import {
  CompanyTypes,
  CustomerTypes,
  EmployeeTypes,
  OwnerTypes,
  ProTypes,
  UserTypes,
} from "../../types/store.types";
import Button from "../Button/Button";
import LinkBox from "../LinkBox/LinkBox";
import PasswordBox from "../PasswordBox/PasswordBox";
import StatusBox from "../StatusBox/StatusBox";
import Title from "../Title/Title";
import UserBox from "../UserBox/UserBox";
import WhatsappBox from "../WhatsappBox/WhatsappBox";
import DataBox from "./DataBox";
import LoadingProfileDetails from "./LoadingProfileDetails";

const ProfileDetails = ({
  title,
  data,
  eChannel,
  tasheel,
  natwasal,
  variant,
  isLoading,
}: ProfileDetailsTypes) => {
  const profileClasses = `grid justify-stretch items-center gap-8 p-6 !rounded-xl md:gap-6 sm:!gap-4`;
  const profileDataClasses = `flex justify-between items-center gap-6 md:gap-4 sm:grid sm:justify-center`;
  const profileInfoClasses = `grid justify-stretch items-start gap-6 md:gap-4 grid-cols-[1fr,1fr,1fr,1fr] lg:grid-cols-[1fr,1fr,1fr] sm:grid-cols-[1fr,1fr] xs:grid-cols-1`;
  const profileButtonsClasses = `flex justify-end items-center gap-2 sm:justify-center`;
  const sectionClasses = `grid gap-8 md:gap-6 sm:gap-3`;
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    handleOpenDeleteModal,
    setEditableOwnerData,
    handleOpenOwnerModal,
    setEditableProData,
    handleOpenProModal,
    setEditableUserData,
    handleOpenUserModal,
    setEditableCompanyData,
    handleOpenLinkToCompanyModal,
    setEditableCustomerData,
    handleOpenCustomerModal,
    setEditableEmployeeData,
    handleOpenConvertCustomerModal,
  } = useContext(FormsContext);
  const { owner } = useSelector((state: RootState) => state.owner);
  const { pro } = useSelector((state: RootState) => state.pro);
  const { user } = useSelector((state: RootState) => state.user);
  const auth = useSelector((state: RootState) => state.auth);
  const { company } = useSelector((state: RootState) => state.company);
  const { employee } = useSelector((state: RootState) => state.employee);
  const { customer } = useSelector((state: RootState) => state.customer);

  //User
  const handleEditUser = () => {
    if (id) {
      setEditableUserData(user);
    } else {
      setEditableUserData(auth.user);
    }
    handleOpenUserModal("editUser");
  };
  const handleDeleteUser = () => {
    handleOpenDeleteModal("user");
    setEditableUserData(user);
  };

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

  //Pro
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

  //Customer
  const handleEditCustomer = () => {
    setEditableCustomerData(customer);
    handleOpenCustomerModal("editCustomer");
  };
  const handleConvertCustomer = () => {
    setEditableCustomerData(customer);
    handleOpenConvertCustomerModal();
  };
  const handleDeleteCustomer = () => {
    handleOpenDeleteModal("customer");
    setEditableCustomerData(customer);
  };

  //Employee
  const handleEditEmployee = () => {
    if (employee) {
      const e: EmployeeTypes = { ...employee };
      if (employee.companyId) {
        e.companyId = employee.companyId.map(
          (company) => (company as CompanyTypes)._id
        ) as string[];
      }
      setEditableEmployeeData(e);
    }
    navigate(`${import.meta.env.VITE_EMPLOYEES_ROUTE}/${id}/edit`);
  };
  const handleDeleteEmployee = () => {
    handleOpenDeleteModal("employee");
    setEditableEmployeeData(employee);
  };

  //Company
  const handleEditCompany = () => {
    if (company) {
      const c: CompanyTypes = { ...company };
      if (company.ownerId) {
        c.ownerId = company.ownerId.map(
          (owner) => (owner as OwnerTypes)._id
        ) as string[];
      }
      if (company.proCode) {
        c.proCode = company.proCode.map(
          (pro) => (pro as ProTypes)._id
        ) as string[];
      }
      if (company.customerId) {
        c.customerId = company.customerId.map(
          (customer) => (customer as CustomerTypes)._id
        ) as string[];
      }
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
            <DataBox title={"Email"} value={(data as UserTypes).email} />
            <DataBox title={"Phone"} value={(data as UserTypes).phone} />
            <DataBox title={"Role"} value={(data as UserTypes).role} />
            <DataBox
              title={"Status"}
              value={<StatusBox status={(data as UserTypes).status} />}
            />
            {(data as UserTypes).createdAt && (
              <DataBox
                title={"Created At"}
                value={handleDate((data as UserTypes).createdAt, true)}
              />
            )}
          </Box>
        </Paper>
      ) : variant === "owner" ? (
        <Paper className={profileClasses} elevation={11}>
          <Title align={"left"} head={"h4"} title={title} />
          <Box className={profileDataClasses}>
            <UserBox
              avatar={(data as OwnerTypes).avatar}
              username={(data as OwnerTypes).name}
              size={"3xlarge"}
              head={"h5"}
              res={true}
            />
            <Box className={profileButtonsClasses}>
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
          <Box className={sectionClasses}>
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
          {eChannel && (
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
                  <DataBox
                    title={"Created At"}
                    value={handleDate(eChannel.createdAt, true)}
                  />
                </Box>
              </Box>
            </>
          )}
          {tasheel && (
            <>
              <Divider />
              <Box className={sectionClasses}>
                <Typography variant="h4" className={`!font-[700]`}>
                  Tasheel Information
                </Typography>
                <Box className={profileInfoClasses}>
                  <DataBox title={"Username"} value={tasheel.username} />
                  <DataBox
                    title={"Password"}
                    value={<PasswordBox password={tasheel.password} />}
                  />
                  <DataBox title={"Security 1"} value={tasheel.security1} />
                  <DataBox title={"Security 2"} value={tasheel.security2} />
                  <DataBox title={"Mobile"} value={tasheel.mobile} />
                  <DataBox
                    title={"Created At"}
                    value={handleDate(tasheel.createdAt, true)}
                  />
                </Box>
              </Box>
            </>
          )}
          {natwasal && (
            <>
              <Divider />
              <Box className={sectionClasses}>
                <Typography variant="h4" className={`!font-[700]`}>
                  Natwasal Information
                </Typography>
                <Box className={profileInfoClasses}>
                  <DataBox title={"Username"} value={natwasal.username} />
                  <DataBox
                    title={"Password"}
                    value={<PasswordBox password={natwasal.password} />}
                  />
                  <DataBox title={"Security 1"} value={natwasal.security1} />
                  <DataBox title={"Security 2"} value={natwasal.security2} />
                  <DataBox title={"Mobile"} value={natwasal.mobile} />
                  <DataBox
                    title={"Created At"}
                    value={handleDate(natwasal.createdAt, true)}
                  />
                </Box>
              </Box>
            </>
          )}
        </Paper>
      ) : variant === "officer" ? (
        <Paper className={profileClasses} elevation={11}>
          <Title align={"left"} head={"h4"} title={title} />
          <Box className={profileDataClasses}>
            <UserBox
              avatar={(data as ProTypes).avatar}
              username={(data as ProTypes).name}
              size={"3xlarge"}
              head={"h5"}
              res={true}
            />
            <Box className={profileButtonsClasses}>
              <Button
                title={"Link"}
                handling={handleProLink}
                bg={"!bg-zinc-500"}
              />
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
          <Box className={sectionClasses}>
            <Typography variant="h4" className={`!font-[700]`}>
              Officer Information
            </Typography>
            <Box className={profileInfoClasses}>
              <DataBox
                title={"Arabic Name"}
                value={(data as ProTypes).nameAr}
              />
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
          {eChannel && (
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
                  <DataBox
                    title={"Created At"}
                    value={handleDate(eChannel.createdAt, true)}
                  />
                </Box>
              </Box>
            </>
          )}
          {tasheel && (
            <>
              <Divider />
              <Box className={sectionClasses}>
                <Typography variant="h4" className={`!font-[700]`}>
                  Tasheel Information
                </Typography>
                <Box className={profileInfoClasses}>
                  <DataBox title={"Username"} value={tasheel.username} />
                  <DataBox
                    title={"Password"}
                    value={<PasswordBox password={tasheel.password} />}
                  />
                  <DataBox title={"Security 1"} value={tasheel.security1} />
                  <DataBox title={"Security 2"} value={tasheel.security2} />
                  <DataBox title={"Mobile"} value={tasheel.mobile} />
                  <DataBox
                    title={"Created At"}
                    value={handleDate(tasheel.createdAt, true)}
                  />
                </Box>
              </Box>
            </>
          )}
          {natwasal && (
            <>
              <Divider />
              <Box className={sectionClasses}>
                <Typography variant="h4" className={`!font-[700]`}>
                  Natwasal Information
                </Typography>
                <Box className={profileInfoClasses}>
                  <DataBox title={"Username"} value={natwasal.username} />
                  <DataBox
                    title={"Password"}
                    value={<PasswordBox password={natwasal.password} />}
                  />
                  <DataBox title={"Security 1"} value={natwasal.security1} />
                  <DataBox title={"Security 2"} value={natwasal.security2} />
                  <DataBox title={"Mobile"} value={natwasal.mobile} />
                  <DataBox
                    title={"Created At"}
                    value={handleDate(natwasal.createdAt, true)}
                  />
                </Box>
              </Box>
            </>
          )}
        </Paper>
      ) : variant === "customer" ? (
        <Paper className={profileClasses} elevation={11}>
          <Title align={"left"} head={"h4"} title={title} />
          <Box className={profileDataClasses}>
            <UserBox
              avatar={(data as CustomerTypes).avatar}
              username={(data as CustomerTypes).name}
              size={"3xlarge"}
              head={"h5"}
              res={true}
            />
            <Box className={profileButtonsClasses}>
              <Button
                title={"Edit"}
                handling={handleEditCustomer}
                bg={`!bg-green-500`}
              />
              <Button
                title={"Convert"}
                handling={handleConvertCustomer}
                bg={`!bg-purple-500`}
              />
              <Button
                title={"Delete"}
                bg={`!bg-red-500`}
                handling={handleDeleteCustomer}
              />
            </Box>
          </Box>
          <Divider />
          <Box className={sectionClasses}>
            <Typography variant="h4" className={`!font-[700]`}>
              Customer Information
            </Typography>
            <Box className={profileInfoClasses}>
              <DataBox
                title={"Arabic Name"}
                value={(data as CustomerTypes).nameAr}
              />
              <DataBox
                title={"Person Code"}
                value={(data as CustomerTypes).personCode}
              />
              <DataBox title={"Email"} value={(data as CustomerTypes).email} />
              <DataBox title={"Phone"} value={(data as CustomerTypes).phone} />
              <DataBox
                title={"Address"}
                value={(data as CustomerTypes).address}
              />
              <DataBox
                title={"Date of Birth"}
                value={handleDate((data as CustomerTypes).dob)}
              />
              <DataBox title={"State"} value={(data as CustomerTypes).state} />
              <DataBox
                title={"Nationality"}
                flag={handleGetFlag((data as CustomerTypes).nationality)}
                value={(data as CustomerTypes).nationality}
              />
              <DataBox
                title={"Job Title"}
                value={(data as CustomerTypes).job}
              />
              <DataBox
                title={"Gender"}
                value={(data as CustomerTypes).gender}
              />
              <DataBox
                title={"Emirates Id"}
                value={(data as CustomerTypes).emiratesId}
              />
              <DataBox
                title={"UID Number"}
                value={(data as CustomerTypes).uid}
              />
              <DataBox
                title={"File Immigration Number"}
                value={(data as CustomerTypes).fileImmgNo}
              />
              <DataBox
                title={"Residence Expire Date"}
                value={handleDate((data as CustomerTypes).residenceExpiryDate)}
              />
              <DataBox
                title={"Status"}
                value={<StatusBox status={(data as CustomerTypes).status} />}
              />
              <DataBox
                title={"Sponsor"}
                value={(data as CustomerTypes).sponsor}
              />
              <DataBox
                title={"Remarks"}
                value={(data as CustomerTypes).remarks}
              />
              <DataBox
                title={"Created At"}
                value={handleDate((data as CustomerTypes).createdAt, true)}
              />
            </Box>
          </Box>
          {eChannel && (
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
                  <DataBox
                    title={"Created At"}
                    value={handleDate(eChannel.createdAt, true)}
                  />
                </Box>
              </Box>
            </>
          )}
          {tasheel && (
            <>
              <Divider />
              <Box className={sectionClasses}>
                <Typography variant="h4" className={`!font-[700]`}>
                  Tasheel Information
                </Typography>
                <Box className={profileInfoClasses}>
                  <DataBox title={"Username"} value={tasheel.username} />
                  <DataBox
                    title={"Password"}
                    value={<PasswordBox password={tasheel.password} />}
                  />
                  <DataBox title={"Security 1"} value={tasheel.security1} />
                  <DataBox title={"Security 2"} value={tasheel.security2} />
                  <DataBox title={"Mobile"} value={tasheel.mobile} />
                  <DataBox
                    title={"Created At"}
                    value={handleDate(tasheel.createdAt, true)}
                  />
                </Box>
              </Box>
            </>
          )}
          {natwasal && (
            <>
              <Divider />
              <Box className={sectionClasses}>
                <Typography variant="h4" className={`!font-[700]`}>
                  Natwasal Information
                </Typography>
                <Box className={profileInfoClasses}>
                  <DataBox title={"Username"} value={natwasal.username} />
                  <DataBox
                    title={"Password"}
                    value={<PasswordBox password={natwasal.password} />}
                  />
                  <DataBox title={"Security 1"} value={natwasal.security1} />
                  <DataBox title={"Security 2"} value={natwasal.security2} />
                  <DataBox title={"Mobile"} value={natwasal.mobile} />
                  <DataBox
                    title={"Created At"}
                    value={handleDate(natwasal.createdAt, true)}
                  />
                </Box>
              </Box>
            </>
          )}
        </Paper>
      ) : variant === "employee" ? (
        <Paper className={profileClasses} elevation={11}>
          <Title align={"left"} head={"h4"} title={title} />
          <Box className={profileDataClasses}>
            <UserBox
              avatar={(data as EmployeeTypes).avatar}
              username={(data as EmployeeTypes).name}
              size={"3xlarge"}
              head={"h5"}
              res={true}
            />
            <Box className={profileButtonsClasses}>
              <Button
                title={"Edit"}
                handling={handleEditEmployee}
                bg={`!bg-green-500`}
              />
              <Button
                title={"Delete"}
                bg={`!bg-red-500`}
                handling={handleDeleteEmployee}
              />
            </Box>
          </Box>
          <Divider />
          <Box className={sectionClasses}>
            <Typography variant="h4" className={`!font-[700]`}>
              Employee Information
            </Typography>
            <Box className={profileInfoClasses}>
              <DataBox
                title={"Arabic Name"}
                value={(data as EmployeeTypes).nameAr}
              />
              <DataBox
                title={"Person Code"}
                value={(data as EmployeeTypes).personCode}
              />
              <DataBox title={"Email"} value={(data as EmployeeTypes).email} />
              <DataBox
                title={"Mobile Number"}
                value={(data as EmployeeTypes).mobileNumber}
              />
              <DataBox
                title={"Date of Birth"}
                value={handleDate((data as EmployeeTypes).dob)}
              />
              <DataBox
                title={"Gender"}
                value={(data as EmployeeTypes).gender}
              />
              <DataBox
                title={"Salary"}
                value={(data as EmployeeTypes)?.salary?.toString()}
              />
              <DataBox
                title={"Nationality"}
                flag={handleGetFlag((data as EmployeeTypes).nationality)}
                value={(data as EmployeeTypes).nationality}
              />
              <DataBox
                title={"Job Title"}
                value={(data as EmployeeTypes).job}
              />
              <DataBox
                title={"UID Number"}
                value={(data as EmployeeTypes).uid}
              />
              <DataBox
                title={"Emirates Id"}
                value={(data as EmployeeTypes).emiratesId}
              />

              <DataBox
                title={"Remarks"}
                value={(data as EmployeeTypes).remarks}
              />
              <DataBox
                title={"Created At"}
                value={handleDate((data as EmployeeTypes).createdAt, true)}
              />
            </Box>
          </Box>
          <Divider />
          <Box className={sectionClasses}>
            <Typography variant="h4" className={`!font-[700]`}>
              Business Details
            </Typography>
            <Box className={profileInfoClasses}>
              <DataBox
                title={"Passport Number"}
                value={(data as EmployeeTypes).passportNumber}
              />
              <DataBox
                title={"Passport Expire Date"}
                value={handleDate((data as EmployeeTypes).passportExpiry)}
              />
              <DataBox
                title={"Visa File Number"}
                value={(data as EmployeeTypes).visaFileNumber}
              />
              <DataBox
                title={"Card Type"}
                value={(data as EmployeeTypes).cardType}
              />
              <DataBox
                title={"Card Number"}
                value={(data as EmployeeTypes).cardNumber}
              />
              <DataBox
                title={"File Immgration Number"}
                value={(data as EmployeeTypes).fileImmgNo}
              />
              <DataBox
                title={"Residence Expire Date"}
                value={handleDate((data as EmployeeTypes).residenceExpireDate)}
              />
              <DataBox
                title={"Status"}
                value={<StatusBox status={(data as EmployeeTypes).status} />}
              />
              <DataBox
                title={"Labour Card Expire Date"}
                value={handleDate((data as EmployeeTypes).lcExpireDate)}
              />
            </Box>
          </Box>
          {eChannel && (
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
                  <DataBox
                    title={"Created At"}
                    value={handleDate(eChannel.createdAt, true)}
                  />
                </Box>
              </Box>
            </>
          )}
          {tasheel && (
            <>
              <Divider />
              <Box className={sectionClasses}>
                <Typography variant="h4" className={`!font-[700]`}>
                  Tasheel Information
                </Typography>
                <Box className={profileInfoClasses}>
                  <DataBox title={"Username"} value={tasheel.username} />
                  <DataBox
                    title={"Password"}
                    value={<PasswordBox password={tasheel.password} />}
                  />
                  <DataBox title={"Security 1"} value={tasheel.security1} />
                  <DataBox title={"Security 2"} value={tasheel.security2} />
                  <DataBox title={"Mobile"} value={tasheel.mobile} />
                  <DataBox
                    title={"Created At"}
                    value={handleDate(tasheel.createdAt, true)}
                  />
                </Box>
              </Box>
            </>
          )}
          {natwasal && (
            <>
              <Divider />
              <Box className={sectionClasses}>
                <Typography variant="h4" className={`!font-[700]`}>
                  Natwasal Information
                </Typography>
                <Box className={profileInfoClasses}>
                  <DataBox title={"Username"} value={natwasal.username} />
                  <DataBox
                    title={"Password"}
                    value={<PasswordBox password={natwasal.password} />}
                  />
                  <DataBox title={"Security 1"} value={natwasal.security1} />
                  <DataBox title={"Security 2"} value={natwasal.security2} />
                  <DataBox title={"Mobile"} value={natwasal.mobile} />
                  <DataBox
                    title={"Created At"}
                    value={handleDate(natwasal.createdAt, true)}
                  />
                </Box>
              </Box>
            </>
          )}
          <Divider />
          <Box className={sectionClasses}>
            <Typography variant="h4" className={`!font-[700]`}>
              Medical Insurance
            </Typography>
            <Box className={profileInfoClasses}>
              <DataBox
                title={"Insurance Company"}
                value={(data as EmployeeTypes).medical.insurance}
              />
              <DataBox
                title={"Policy Number"}
                value={(data as EmployeeTypes).medicalPolicyNo}
              />
              <DataBox
                title={"Expire Date"}
                value={handleDate((data as EmployeeTypes).medical.expireDate)}
              />
            </Box>
          </Box>
          <Divider />
          <Box className={sectionClasses}>
            <Typography variant="h4" className={`!font-[700]`}>
              Involuntary Loss Of Employment (ILOE)
            </Typography>
            <Box className={profileInfoClasses}>
              <DataBox
                title={"Insurance Company"}
                value={(data as EmployeeTypes).iLOE.insurance}
              />
              <DataBox
                title={"Policy Number"}
                value={(data as EmployeeTypes).iLOEPolicyNo}
              />
              <DataBox
                title={"Expire Date"}
                value={handleDate((data as EmployeeTypes).iLOE.expireDate)}
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
                variant={"company"}
              />
              <Box className={profileButtonsClasses}>
                <Button
                  title={"Edit"}
                  handling={handleEditCompany}
                  bg={`!bg-green-500`}
                />
                <Button
                  title={"Delete"}
                  handling={handleDeleteCompany}
                  bg={`!bg-red-500`}
                />
              </Box>
            </Box>
            <Divider />
            <Box className={`grid gap-4`}>
              <Typography variant="h4" className={`!font-[700]`}>
                Business Details
              </Typography>
              <Box className={profileInfoClasses}>
                <DataBox
                  title={"Arabic Name"}
                  value={(data as CompanyTypes).nameAr}
                />
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
            <Box className={sectionClasses}>
              <Typography variant="h4" className={`!font-[700]`}>
                Company Information
              </Typography>
              <Box className={profileInfoClasses}>
                <DataBox title={"Email"} value={(data as CompanyTypes).email} />
                <DataBox title={"Phone"} value={(data as CompanyTypes).phone} />
                <DataBox
                  title={"Mobile Number"}
                  value={(data as CompanyTypes).mobileNo}
                />
                <DataBox
                  title={"Whatsapp Number"}
                  value={
                    <WhatsappBox number={(data as CompanyTypes).whatsAppNo} />
                  }
                />
                <DataBox
                  title={"Address"}
                  value={(data as CompanyTypes).address}
                />
                <DataBox
                  title={"Country"}
                  value={(data as CompanyTypes).country}
                />
                <DataBox title={"State"} value={(data as CompanyTypes).state} />
                <DataBox
                  title={"Website"}
                  value={<LinkBox link={(data as CompanyTypes).website} />}
                />
                <DataBox
                  title={"Status"}
                  value={<StatusBox status={(data as CompanyTypes).status} />}
                />
                <DataBox title={"TRN"} value={(data as CompanyTypes).trn} />
                <DataBox
                  title={"Zip Code"}
                  value={(data as CompanyTypes).zipCode}
                />
                <DataBox
                  title={"Remarks"}
                  value={(data as CompanyTypes).remarks}
                />
                <DataBox
                  title={"Created At"}
                  value={handleDate((data as CompanyTypes).createdAt, true)}
                />
              </Box>
            </Box>
            <Divider />
            {(data as CompanyTypes).state.toLowerCase() === "dubai" ? (
              <Box className={sectionClasses}>
                <Typography variant="h4" className={`!font-[700]`}>
                  GDRFA Information
                </Typography>
                <Box
                  className={`grid justify-stretch items-center grid-cols-3 gap-4 md:gap-3 md:grid-cols-2 sm:grid-cols-1`}
                >
                  <DataBox
                    title={"Username"}
                    value={(data as CompanyTypes).userName}
                  />
                  <DataBox
                    title={"Password"}
                    value={
                      <PasswordBox password={(data as CompanyTypes).password} />
                    }
                  />
                </Box>
                <Box
                  className={`grid justify-stretch items-center grid-cols-3 gap-4 md:gap-3 md:grid-cols-2 sm:grid-cols-1`}
                >
                  <DataBox
                    title={"Noqodi Wallet"}
                    value={(data as CompanyTypes).noqodiWalet}
                  />
                  <DataBox
                    title={"Noqodi Pass"}
                    value={(data as CompanyTypes).noqodiPass}
                  />
                  <DataBox
                    title={"Pin Token"}
                    value={(data as CompanyTypes).pinToken}
                  />
                </Box>
                <Box
                  className={`grid justify-stretch items-center grid-cols-3 gap-4 md:gap-3 md:grid-cols-2 sm:grid-cols-1`}
                >
                  <DataBox
                    title={"Noqodi New"}
                    value={(data as CompanyTypes).noqodiNew}
                  />
                  <DataBox
                    title={"Noqodi Reg"}
                    value={(data as CompanyTypes).noqodiReg}
                  />
                  <DataBox
                    title={"Noqodi NPass"}
                    value={(data as CompanyTypes).noqodiNPass}
                  />
                </Box>
              </Box>
            ) : (
              <Box className={sectionClasses}>
                <Typography variant="h4" className={`!font-[700]`}>
                  E-Channel Information
                </Typography>
                <Box className={profileInfoClasses}>
                  <DataBox
                    title={"E-channel Expire Date"}
                    value={handleDate(
                      (data as CompanyTypes).echannelExpiryDate
                    )}
                  />
                  <DataBox
                    title={"Username"}
                    value={(data as CompanyTypes).userName}
                  />
                  <DataBox
                    title={"Password"}
                    value={
                      <PasswordBox password={(data as CompanyTypes).password} />
                    }
                  />
                  <DataBox
                    title={"E-Channel Remarks"}
                    value={(data as CompanyTypes).echannelRemarks}
                  />
                </Box>
              </Box>
            )}
          </Paper>
        )
      ))
  );
};

export default ProfileDetails;
