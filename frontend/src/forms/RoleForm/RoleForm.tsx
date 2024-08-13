import { Box, Divider, Paper, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import PermissionSwitch from "../../components/PermissionSwitch/PermissionSwitch";
import PermissionTab from "../../components/PermissionTab/PermissionTab";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Title from "../../components/Title/Title";
import { FormsContext } from "../../contexts/FormsContext";
import { ModalsContext } from "../../contexts/ModalsContext";
import { getRole } from "../../store/roleSlice";
import { AppDispatch, RootState } from "../../store/store";
import { FormiksTypes } from "../../types/forms.types";

const RoleForm = ({ register, errors, type, setValue }: FormiksTypes) => {
  const { formsLoading, setEditableRoleData } = useContext(FormsContext);
  const { handleCloseRoleModal } = useContext(ModalsContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { role } = useSelector((state: RootState) => state.role);
  const [currentPermission, setCurrentPermission] = useState("dashboard");
  const [chosenPermissions, setChosenPermissions] = useState<{
    [key: string]: { [key: string]: boolean };
  }>({});

  const permissions = [
    "dashboard",
    "users",
    "companies",
    "owners",
    "employees",
    "officers",
    "customers",
    "sponsors",
    "jobs",
    "nationalities",
    "e-channels",
    "tasheels",
    "natwasals",
    "transactions",
    "activities",
    "permissions",
  ];

  const handleChangeTab = (per: string) => {
    setCurrentPermission(per);
  };

  const handleChoosePermission = (type: string) => {
    const c: { [key: string]: { [key: string]: boolean } } = {};
    const keys = Object.keys(chosenPermissions);
    keys.map((key) => {
      c[`${key}`] = { ...chosenPermissions[key] };
    });
    if (c[currentPermission]) {
      c[currentPermission][`${type}`] = !c[currentPermission][`${type}`];
    } else {
      c[currentPermission] = {};
      c[currentPermission][`${type}`] = true;
    }
    setChosenPermissions(c);
  };

  useEffect(() => {
    if (id) {
      dispatch(getRole({ id }));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (role && id) {
      setEditableRoleData(role);
      setValue("name", role.name);
      setValue("permissions", role.permissions);
      const roles = { ...role.permissions };
      setChosenPermissions(roles);
    }
  }, [id, role, setEditableRoleData, setValue]);

  useEffect(() => {
    setValue("permissions", chosenPermissions);
  }, [chosenPermissions, setValue]);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-8 md:gap-6 sm:gap-4 p-6 !rounded-xl`}
    >
      {type === "addRole" ? (
        <>
          <Title head={"h4"} align={"left"} title={"Add New Role"} />

          <Box className={`grid justify-stretch items-start gap-6`}>
            <Input
              register={register}
              errors={errors}
              label={"Role Name"}
              name={"name"}
            />
          </Box>

          <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
            <SubmitButton loading={formsLoading}>Add</SubmitButton>
            <Button
              title={"Cancel"}
              handling={handleCloseRoleModal}
              bg={"!bg-red-500"}
            />
          </Box>
        </>
      ) : (
        <>
          <Box className={`flex justify-start items-center gap-2`}>
            <Typography variant="h5" className={`!font-[700]`}>
              Role :
            </Typography>
            <Typography variant="h5">{role && role.name}</Typography>
          </Box>
          <Box className={`grid justify-stretch items-center gap-6`}>
            <Box
              className={`flex flex-wrap justify-between items-center gap-4`}
            >
              {permissions.map((per, i) => (
                <PermissionTab
                  title={per}
                  current={currentPermission === per}
                  key={i}
                  handling={() => handleChangeTab(per)}
                />
              ))}
            </Box>
            <Divider />
            <Box className={`flex justify-start items-center flex-wrap gap-10`}>
              {currentPermission === "dashboard" ? (
                <PermissionSwitch
                  title={"Show"}
                  check={chosenPermissions[currentPermission]?.read || false}
                  change={() => handleChoosePermission("read")}
                />
              ) : (
                <>
                  <PermissionSwitch
                    title={"Add"}
                    check={chosenPermissions[currentPermission]?.post || false}
                    change={() => handleChoosePermission("post")}
                  />
                  <PermissionSwitch
                    title={"Edit"}
                    check={chosenPermissions[currentPermission]?.patch || false}
                    change={() => handleChoosePermission("patch")}
                  />
                  <PermissionSwitch
                    title={"List"}
                    check={chosenPermissions[currentPermission]?.read || false}
                    change={() => handleChoosePermission("read")}
                  />
                  <PermissionSwitch
                    title={"Delete"}
                    check={
                      chosenPermissions[currentPermission]?.delete || false
                    }
                    change={() => handleChoosePermission("delete")}
                  />
                </>
              )}
            </Box>
          </Box>
          <Box className={`flex justify-stretch items-center gap-4 m-auto`}>
            <SubmitButton loading={formsLoading}>Edit</SubmitButton>
            <Button
              title={"Cancel"}
              handling={() =>
                navigate(`${import.meta.env.VITE_SETTINGS_ROUTE}`)
              }
              bg={"!bg-red-500"}
            />
          </Box>
        </>
      )}
    </Paper>
  );
};

export default RoleForm;
