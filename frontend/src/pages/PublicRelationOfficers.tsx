import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getPros } from "../store/prosSlice";
import { AppDispatch, RootState } from "../store/store";
import ProsTable from "../tables/ProsTable/ProsTable";

const PublicRelationOfficers = () => {
  const { pros, isLoading } = useSelector((state: RootState) => state.pros);
  const { pageContainerClasses } = useContext(AppContext);
  const { prosCounter } = useSelector((state: RootState) => state.prosCounter);
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.size === 0) {
      dispatch(getPros({}));
    }
  }, [dispatch, searchParams]);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Public Relation Officers
          </Typography>
        </BreadCrumbs>
        <Forms type={"prosOptions"} />
        <ProsTable count={prosCounter} data={pros} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default PublicRelationOfficers;
