import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getProfile } from "../store/auth";
import { AppDispatch, RootState } from "../store/store";
import UserProfile from "../tabs/UserProfile/UserProfile";

const Profile = () => {
  const { user, isLoading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <PrimaryBox>
      <PrimaryContainer className={`grid justify-stretch items-center gap-8`}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Profile
          </Typography>
        </BreadCrumbs>
        <UserProfile user={user} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Profile;
