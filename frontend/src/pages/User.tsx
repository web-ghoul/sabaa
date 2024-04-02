import { Box, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { AppDispatch, RootState } from "../store/store";
import { getUser } from "../store/userSlice";
import UserProfile from "../tabs/UserProfile/UserProfile";
const User = () => {
  const { user, isLoading } = useSelector((state: RootState) => state.user);
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { pageContainerClasses } = useContext(AppContext);

  useEffect(() => {
    if (id) {
      dispatch(getUser({ id }));
    }
  }, [dispatch, id]);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <Box className={`flex justify-between items-center gap-4`}>
          <BreadCrumbs>
            <Typography variant="h6" key="2">
              Users
            </Typography>
          </BreadCrumbs>
        </Box>
        <UserProfile user={user} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default User;
