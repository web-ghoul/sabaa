import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import { TabsContext } from "../contexts/TabsContext";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getPro } from "../store/proSlice";
import { AppDispatch, RootState } from "../store/store";
import ProProfile from "../tabs/ProProfile/ProProfile";

const Pro = () => {
  const { pro, isLoading, companies, activities, eChannel, tasheel, natwasal } =
    useSelector((state: RootState) => state.pro);
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { pageContainerClasses } = useContext(AppContext);
  const { setProTabsValue } = useContext(TabsContext);

  useEffect(() => {
    if (id) {
      dispatch(getPro({ id }));
    }
    setProTabsValue(0);
  }, [dispatch, id, setProTabsValue]);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Link
            to={`${import.meta.env.VITE_PROS_ROUTE}`}
            className={`text-black !font-[600] hover:text-primary`}
            key={1}
          >
            <Typography variant="h6">Public Relation Officers</Typography>
          </Link>
          <Typography variant="h6" key="2">
            {pro && pro.name}
          </Typography>
        </BreadCrumbs>
        <ProProfile
          activities={activities}
          companies={companies}
          pro={pro}
          eChannel={eChannel}
          natwasal={natwasal}
          tasheel={tasheel}
          isLoading={isLoading}
        />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Pro;
