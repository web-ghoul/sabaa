import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getNationalities } from "../store/nationalitiesSlice";
import { AppDispatch, RootState } from "../store/store";
import NationalitiesTable from "../tables/NationalitiesTable/NationalitiesTable";

const Nationalities = () => {
  const { nationalities, isLoading } = useSelector(
    (state: RootState) => state.nationalities
  );
  const { nationalitiesCounter } = useSelector(
    (state: RootState) => state.nationalitiesCounter
  );
  const { pageContainerClasses } = useContext(AppContext);
  const { setQueries } = useContext(AppContext);
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    setQueries(allParams);
    dispatch(getNationalities(allParams));
  }, []);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Nationality
          </Typography>
        </BreadCrumbs>
        <Forms type={"nationalitiesOptions"} />
        <NationalitiesTable
          count={nationalitiesCounter}
          data={nationalities}
          isLoading={isLoading}
        />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Nationalities;
