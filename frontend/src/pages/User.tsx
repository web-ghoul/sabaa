import { Box, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import { TabsContext } from "../contexts/TabsContext";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { AppDispatch, RootState } from "../store/store";
import { getUser } from "../store/userSlice";
import UserProfile from "../tabs/UserProfile/UserProfile";
const User = () => {
  const { user, isLoading, activities } = useSelector(
    (state: RootState) => state.user
  );
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { pageContainerClasses } = useContext(AppContext);
  const { setUserTabsValue } = useContext(TabsContext);

  useEffect(() => {
    if (id) {
      dispatch(getUser({ id }));
    }
    setUserTabsValue(0);
  }, [dispatch, id, setUserTabsValue]);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <Box className={`flex justify-between items-center gap-4`}>
          <BreadCrumbs>
            <Link
              to={`${import.meta.env.VITE_USERS_ROUTE}`}
              className={`text-black !font-[600] hover:text-primary`}
              key={1}
            >
              <Typography variant="h6">Users</Typography>
            </Link>
            <Typography variant="h6" key="2">
              {user && user.name}
            </Typography>
          </BreadCrumbs>
        </Box>
        <UserProfile
          user={user}
          isLoading={isLoading}
          activities={activities}
        />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default User;
