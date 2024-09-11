import { Box, Divider, Paper, Typography } from "@mui/material";
import { ReactNode, useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { handleDate } from "../../functions/handleDate";
import { handleGetFlag } from "../../functions/handleGetFlag";
import { RootState } from "../../store/store";
import { CompanyTypes, EmployeeTypes } from "../../types/store.types";
import Button from "../Button/Button";
import StatusBox from "../StatusBox/StatusBox";
import Title from "../Title/Title";
import UserBox from "../UserBox/UserBox";
import DataBox from "./DataBox";

const EmployeeDetails = ({
  data,
  title,
  classes,
  natwasalBox,
  eChannelBox,
  tasheelBox,
}: {
  data: EmployeeTypes;
  title: string;
  classes: { [key: string]: string };
  natwasalBox: ReactNode;
  eChannelBox: ReactNode;
  tasheelBox: ReactNode;
}) => {
  const { handleOpenDeleteModal } = useContext(ModalsContext);
  const { setEditableEmployeeData } = useContext(FormsContext);
  const navigate = useNavigate();
  const { employee } = useSelector((state: RootState) => state.employee);
  const { id } = useParams();

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

  console.log(data);

  return (
    <Paper className={classes.profileClasses} elevation={11}>
      <Title align={"left"} head={"h4"} title={title} />
      <Box className={classes.profileDataClasses}>
        <UserBox
          avatar={(data as EmployeeTypes).avatar}
          username={(data as EmployeeTypes).name}
          size={"3xlarge"}
          head={"h5"}
          res={true}
        />
        <Box className={classes.profileButtonsClasses}>
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
      <Box className={classes.sectionClasses}>
        <Typography variant="h4" className={`!font-[700]`}>
          Employee Information
        </Typography>
        <Box className={classes.profileInfoClasses}>
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
          <DataBox title={"Gender"} value={(data as EmployeeTypes).gender} />
          <DataBox
            title={"Salary"}
            value={(data as EmployeeTypes)?.salary?.toString()}
          />
          <DataBox
            title={"Nationality"}
            flag={handleGetFlag((data as EmployeeTypes).nationality)}
            value={(data as EmployeeTypes).nationality}
          />
          <DataBox title={"Job Title"} value={(data as EmployeeTypes).job} />
          <DataBox title={"UID Number"} value={(data as EmployeeTypes).uid} />
          <DataBox
            title={"Emirates Id"}
            value={(data as EmployeeTypes).emiratesId}
          />
          <DataBox title={"Remarks"} value={(data as EmployeeTypes).remarks} />
          <DataBox
            title={"Created At"}
            value={handleDate((data as EmployeeTypes).createdAt, true)}
          />
        </Box>
      </Box>
      <Divider />
      <Box className={classes.sectionClasses}>
        <Typography variant="h4" className={`!font-[700]`}>
          Business Details
        </Typography>
        <Box className={classes.profileInfoClasses}>
          <DataBox
            title={"Passport Number"}
            value={(data as EmployeeTypes).passportNumber}
          />
          <DataBox
            title={"Passport Expire Date"}
            value={handleDate((data as EmployeeTypes).passportExpiry)}
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
            title={"Company"}
            value={
              (data as EmployeeTypes).companyName?.length > 0
                ? (data as EmployeeTypes).companyName[0]
                : ""
            }
          />
          <DataBox
            title={"Card Type"}
            value={(data as EmployeeTypes).cardType}
          />
          <DataBox
            title={"Labour Card Number"}
            value={(data as EmployeeTypes).lcNumber}
          />
          <DataBox
            title={"Labour Card Expire Date"}
            value={handleDate((data as EmployeeTypes).lcExpireDate)}
          />
          <DataBox
            title={"Transaction Number"}
            value={(data as EmployeeTypes).transactionNo}
          />
          <DataBox
            title={"LC Status"}
            value={<StatusBox status={(data as EmployeeTypes).status} />}
          />
        </Box>
      </Box>
      {eChannelBox}
      {tasheelBox}
      {natwasalBox}
      {(data as EmployeeTypes)?.medical && (
        <>
          <Divider />
          <Box className={classes.sectionClasses}>
            <Typography variant="h4" className={`!font-[700]`}>
              Medical Insurance
            </Typography>
            <Box className={classes.profileInfoClasses}>
              <DataBox
                title={"Insurance Company"}
                value={(data as EmployeeTypes)?.medical?.insurance}
              />
              <DataBox
                title={"Policy Number"}
                value={(data as EmployeeTypes)?.medicalPolicyNo}
              />
              <DataBox
                title={"Expire Date"}
                value={handleDate((data as EmployeeTypes)?.medical?.expireDate)}
              />
            </Box>
          </Box>
        </>
      )}
      {(data as EmployeeTypes).iLOE && (
        <>
          <Divider />
          <Box className={classes.sectionClasses}>
            <Typography variant="h4" className={`!font-[700]`}>
              Involuntary Loss Of Employment (ILOE)
            </Typography>
            <Box className={classes.profileInfoClasses}>
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
        </>
      )}
    </Paper>
  );
};

export default EmployeeDetails;
