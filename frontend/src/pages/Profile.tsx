import { Box, Skeleton, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getProfile } from "../store/auth";
import { AppDispatch, RootState } from "../store/store";
import UserProfile from "../tabs/UserProfile/UserProfile";

const Profile = () => {
  const { user, isLoading, activities } = useSelector(
    (state: RootState) => state.auth,
  );
  const dispatch = useDispatch<AppDispatch>();
  const { pageContainerClasses } = useContext(AppContext);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Profile
          </Typography>
        </BreadCrumbs>
        <UserProfile
          user={user}
          isLoading={isLoading}
          activities={activities}
        />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export const LoadingProfile = () => (
  <PrimaryBox>
    <PrimaryContainer className="grid justify-stretch items-center gap-6 md:gap-4 sm:!gap-3">
      <Skeleton variant="rounded" width={200} height={24} />
      <Box className="flex items-center gap-6">
        <Skeleton variant="circular" width={100} height={100} />
        <Box sx={{ flex: 1 }}>
          <Skeleton variant="text" width="40%" height={32} />
          <Skeleton variant="text" width="60%" height={24} />
        </Box>
      </Box>
      <Box className="grid grid-cols-2 gap-4">
        {[...Array(2)].map((_, i) => (
          <Skeleton key={i} variant="rounded" height={60} />
        ))}
      </Box>
      <Skeleton variant="rounded" height={300} />
    </PrimaryContainer>
  </PrimaryBox>
);

export default Profile;
