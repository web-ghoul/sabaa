import { useContext } from "react";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import {
  TransactionFormTypes,
  NewLabourCardFormTypes,
} from "../../types/forms.types";
import { getTransactions } from "../../store/transactionsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { ModalsContext } from "../../contexts/ModalsContext";
import { useLocation } from "react-router-dom";

const useTransactionSubmit = () => {
  const { server } = useAxios();
  const {
    handleOpenFormsLoading,
    handleCloseFormsLoading,
    editableTransactionData,
  } = useContext(FormsContext);
  const { handleCloseTransactionModal, handleCloseNewLCModal } =
    useContext(ModalsContext);
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();

  const getData = () => {
    if (pathname === `${import.meta.env.VITE_TRANSACTIONS_ALL_ROUTE}`) {
      dispatch(getTransactions({ type: "all" }));
    } else if (pathname === `${import.meta.env.VITE_TRANSACTIONS_PRE_ROUTE}`) {
      dispatch(getTransactions({ type: "pre" }));
    } else if (pathname === `${import.meta.env.VITE_TRANSACTIONS_NEW_ROUTE}`) {
      dispatch(getTransactions({ type: "new" }));
    } else if (
      pathname === `${import.meta.env.VITE_TRANSACTIONS_RENEW_ROUTE}`
    ) {
      dispatch(getTransactions({ type: "renew" }));
    }
  };

  const addTransaction = async (values: TransactionFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/transaction`, {
        ...values,
        dob: new Date(values.dob),
      })
      .then(() => {
        handleAlert({
          msg: "Work Permit is created successfully",
          status: "success",
        });
        handleCloseTransactionModal();
        getData();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const editTransaction = async (values: TransactionFormTypes) => {
    handleOpenFormsLoading();
    await server
      .patch(`/transaction/${editableTransactionData?._id}`, values)
      .then(() => {
        handleAlert({
          msg: "Work Permit is updated successfully",
          status: "success",
        });
        handleCloseTransactionModal();
        getData();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  const newLC = async (values: NewLabourCardFormTypes) => {
    handleOpenFormsLoading();
    await server
      .patch(`/transaction/${editableTransactionData?._id}`, values)
      .then(() => {
        handleAlert({
          msg: "New Labour Card is created successfully",
          status: "success",
        });
        handleCloseNewLCModal();
        getData();
      })
      .catch((err) => {
        handleCatchError(err);
      });
    handleCloseFormsLoading();
  };

  return {
    addTransaction,
    editTransaction,
    newLC,
  };
};

export default useTransactionSubmit;
