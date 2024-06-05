import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getNatwasals } from "../store/natwasalsSlice";
import { AppDispatch, RootState } from "../store/store";
import NatwasalsTable from "../tables/NatwasalsTable/NatwasalsTable";

const Natwasals = () => {
  const { natwasals, isLoading } = useSelector(
    (state: RootState) => state.natwasals
  );
  const { pageContainerClasses } = useContext(AppContext);
  const { natwasalsCounter } = useSelector(
    (state: RootState) => state.natwasalsCounter
  );
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    dispatch(getNatwasals(allParams));
  }, [dispatch]);

  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Natwasals
          </Typography>
        </BreadCrumbs>
        <Forms type={"natwasalsOptions"} />
        <NatwasalsTable
          count={natwasalsCounter}
          data={natwasals}
          isLoading={isLoading}
        />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Natwasals;
