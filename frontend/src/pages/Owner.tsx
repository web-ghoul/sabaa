import { Box, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getOwner } from "../store/ownerSlice";
import { AppDispatch, RootState } from "../store/store";
import OwnerProfile from "../tabs/OwnerProfile/OwnerProfile";
const Owner = () => {
  const { owner, isLoading } = useSelector((state: RootState) => state.owner);
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { pageContainerClasses } = useContext(AppContext);

  useEffect(() => {
    if (id) {
      dispatch(getOwner({ id }));
    }
  }, [dispatch, id]);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <Box className={`flex justify-between items-center gap-4`}>
          <BreadCrumbs>
            <Link
              to={`${import.meta.env.VITE_OWNERS_ROUTE}`}
              className={`text-black !font-[600] hover:text-primary`}
              key={1}
            >
              <Typography variant="h6">Owners</Typography>
            </Link>
            <Typography variant="h6" key="2">
              {owner && owner.name}
            </Typography>
          </BreadCrumbs>
        </Box>
        <OwnerProfile owner={owner} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Owner;
