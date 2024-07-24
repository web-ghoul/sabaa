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

const PreTransactions = () => {
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
    dispatch(getTransactions(handleGetQueries()));
  }, [dispatch]);

  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <BreadCrumbs>
          <Typography variant="h6" key="2">
            Approved Work Permit Transactions
          </Typography>
        </BreadCrumbs>
        <Forms type={"transactionsOptions"} tType={"pre"} />
        <TransactionsTable
          count={transactionsCounter}
          data={transactions}
          isLoading={isLoading}
          type={"pre"}
        />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default PreTransactions;
