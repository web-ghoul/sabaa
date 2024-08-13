import { Box, Divider, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleDate } from "../../functions/handleDate";
import { RootState } from "../../store/store";
import {
  CompanyTypes,
  CustomerTypes,
  OwnerTypes,
  ProTypes,
} from "../../types/store.types";
import Button from "../Button/Button";
import LinkBox from "../LinkBox/LinkBox";
import PasswordBox from "../PasswordBox/PasswordBox";
import StatusBox from "../StatusBox/StatusBox";
import Title from "../Title/Title";
import UserBox from "../UserBox/UserBox";
import WhatsappBox from "../WhatsappBox/WhatsappBox";
import DataBox from "./DataBox";

const CompanyDetails = ({
  data,
  title,
  classes,
}: {
  data: CompanyTypes;
  title: string;
  classes: { [key: string]: string };
}) => {
  const { handleOpenDeleteModal } = useContext(ModalsContext);
  const { setEditableCompanyData } = useContext(FormsContext);
  const navigate = useNavigate();
  const { company } = useSelector((state: RootState) => state.company);
  const { id } = useParams();

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

  return (
    <Paper className={classes.profileClasses} elevation={11}>
      <Title align={"left"} head={"h5"} title={title} />
      <Box className={classes.profileDataClasses}>
        <UserBox
          avatar={(data as CompanyTypes).logo}
          username={(data as CompanyTypes).name}
          size={"3xlarge"}
          head={"h4"}
          res={true}
          variant={"company"}
        />
        <Box className={classes.profileButtonsClasses}>
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
        <Box className={classes.profileInfoClasses}>
          <DataBox
            title={"Arabic Name"}
            value={(data as CompanyTypes).nameAr}
          />
          <DataBox title={"MOL Code"} value={(data as CompanyTypes).molCode} />
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
      <Box className={classes.sectionClasses}>
        <Typography variant="h4" className={`!font-[700]`}>
          Company Information
        </Typography>
        <Box className={classes.profileInfoClasses}>
          <DataBox title={"Email"} value={(data as CompanyTypes).email} />
          <DataBox title={"Phone"} value={(data as CompanyTypes).phone} />
          <DataBox
            title={"Mobile Number"}
            value={(data as CompanyTypes).mobileNo}
          />
          <DataBox
            title={"Whatsapp Number"}
            value={<WhatsappBox number={(data as CompanyTypes).whatsAppNo} />}
          />
          <DataBox title={"Address"} value={(data as CompanyTypes).address} />
          <DataBox title={"Country"} value={(data as CompanyTypes).country} />
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
          <DataBox title={"Zip Code"} value={(data as CompanyTypes).zipCode} />
          <DataBox title={"Remarks"} value={(data as CompanyTypes).remarks} />
          <DataBox
            title={"Created At"}
            value={handleDate((data as CompanyTypes).createdAt, true)}
          />
        </Box>
      </Box>
      <Divider />
      {(data as CompanyTypes).state.toLowerCase() === "dubai" ? (
        <Box className={classes.sectionClasses}>
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
              value={<PasswordBox password={(data as CompanyTypes).password} />}
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
        <Box className={classes.sectionClasses}>
          <Typography variant="h4" className={`!font-[700]`}>
            E-Channel Information
          </Typography>
          <Box className={classes.profileInfoClasses}>
            <DataBox
              title={"E-channel Expire Date"}
              value={handleDate((data as CompanyTypes).echannelExpiryDate)}
            />
            <DataBox
              title={"Username"}
              value={(data as CompanyTypes).userName}
            />
            <DataBox
              title={"Password"}
              value={<PasswordBox password={(data as CompanyTypes).password} />}
            />
            <DataBox
              title={"E-Channel Remarks"}
              value={(data as CompanyTypes).echannelRemarks}
            />
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default CompanyDetails;
