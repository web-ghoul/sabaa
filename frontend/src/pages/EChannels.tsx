import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { getEChannels } from "../store/eChannelsSlice";
import { AppDispatch, RootState } from "../store/store";
import CustomersTable from "../tables/CustomersTable/CustomersTable";

const EChannels = () => {
  const { customers, isLoading } = useSelector(
    (state: RootState) => state.customers
  );
  const { pageContainerClasses } = useContext(AppContext);
  const { eChannelsCounter } = useSelector(
    (state: RootState) => state.eChannelsCounter
  );
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.size === 0) {
      dispatch(getEChannels({}));
    }
  }, [dispatch, searchParams]);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            E-Channels
          </Typography>
        </BreadCrumbs>
        <Forms type={"eChannelsOptions"} />
        <CustomersTable
          count={eChannelsCounter}
          data={customers}
          isLoading={isLoading}
        />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default EChannels;
