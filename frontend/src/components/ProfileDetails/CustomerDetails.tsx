import { Box, Divider, Paper, Typography } from "@mui/material";
import { ReactNode, useContext } from "react";
import { useSelector } from "react-redux";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleDate } from "../../functions/handleDate";
import { handleGetFlag } from "../../functions/handleGetFlag";
import { RootState } from "../../store/store";
import { CustomerTypes } from "../../types/store.types";
import Button from "../Button/Button";
import StatusBox from "../StatusBox/StatusBox";
import Title from "../Title/Title";
import UserBox from "../UserBox/UserBox";
import DataBox from "./DataBox";

const CustomerDetails = ({
  data,
  title,
  classes,
  natwasalBox,
  eChannelBox,
  tasheelBox,
}: {
  data: CustomerTypes;
  title: string;
  classes: { [key: string]: string };
  natwasalBox: ReactNode;
  eChannelBox: ReactNode;
  tasheelBox: ReactNode;
}) => {
  const { setEditableCustomerData } = useContext(FormsContext);
  const {
    handleOpenCustomerModal,
    handleOpenConvertCustomerModal,
    handleOpenDeleteModal,
  } = useContext(ModalsContext);
  const { customer } = useSelector((state: RootState) => state.customer);

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
  return (
    <Paper className={classes.profileClasses} elevation={11}>
      <Title align={"left"} head={"h4"} title={title} />
      <Box className={classes.profileDataClasses}>
        <UserBox
          avatar={(data as CustomerTypes).avatar}
          username={(data as CustomerTypes).name}
          size={"3xlarge"}
          head={"h5"}
          res={true}
        />
        <Box className={classes.profileButtonsClasses}>
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
      <Box className={classes.sectionClasses}>
        <Typography variant="h4" className={`!font-[700]`}>
          Customer Information
        </Typography>
        <Box className={classes.profileInfoClasses}>
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
          <DataBox title={"Address"} value={(data as CustomerTypes).address} />
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
          <DataBox title={"Job Title"} value={(data as CustomerTypes).job} />
          <DataBox title={"Gender"} value={(data as CustomerTypes).gender} />
          <DataBox
            title={"Emirates Id"}
            value={(data as CustomerTypes).emiratesId}
          />
          <DataBox title={"UID Number"} value={(data as CustomerTypes).uid} />
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
          <DataBox title={"Sponsor"} value={(data as CustomerTypes).sponsor} />
          <DataBox title={"Remarks"} value={(data as CustomerTypes).remarks} />
          <DataBox
            title={"Created At"}
            value={handleDate((data as CustomerTypes).createdAt, true)}
          />
        </Box>
      </Box>
      {eChannelBox}
      {tasheelBox}
      {natwasalBox}
    </Paper>
  );
};

export default CustomerDetails;
