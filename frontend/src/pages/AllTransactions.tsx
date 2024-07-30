import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { AppContext } from "../contexts/AppContext";
import Forms from "../forms/Forms";
import useQueries from "../hooks/useQueries";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
import { AppDispatch, RootState } from "../store/store";
import { getTransactions } from "../store/transactionsSlice";
import TransactionsTable from "../tables/TransactionsTable/TransactionsTable";

const AllTransactions = () => {
  const { transactions, isLoading } = useSelector(
    (state: RootState) => state.transactions
  );
  const { pageContainerClasses } = useContext(AppContext);
  const { transactionsCounter } = useSelector(
    (state: RootState) => state.transactionsCounter
  );

  const dispatch = useDispatch<AppDispatch>();
  const { handleGetQueries } = useQueries();

  useEffect(() => {
    dispatch(getTransactions({...handleGetQueries(),type:"all"}));
  }, [dispatch]);

  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            All Transactions
          </Typography>
        </BreadCrumbs>
        <Forms type={"transactionsOptions"} tType={"all"} />
        <TransactionsTable
          count={transactionsCounter}
          data={transactions}
          isLoading={isLoading}
          type={"all"}
        />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default AllTransactions;
