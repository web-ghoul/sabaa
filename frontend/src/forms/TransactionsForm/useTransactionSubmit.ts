import { useContext } from "react";
import { FormsContext } from "../../contexts/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleCatchError } from "../../functions/handleCatchError";
import useAxios from "../../hooks/useAxios";
import { TransactionFormTypes } from "../../types/forms.types";
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
  const { handleCloseTransactionModal } = useContext(ModalsContext);
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
      .post(`/transactions`, {
        ...values,
        status: "In Process",
        type: "pre",
      })
      .then(() => {
        handleAlert({
          msg: "Transaction is created successfully",
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
      .patch(`/transactions/${editableTransactionData?._id}`, values)
      .then(() => {
        handleAlert({
          msg: "Transaction is updated successfully",
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

  const approvedTransaction = async (values: TransactionFormTypes) => {
    handleOpenFormsLoading();
    await server
      .patch(`/transactions/${editableTransactionData?._id}`, {
        ...values,
        type:
          values.cardType === "NATIONAL AND GCC ELECTRONIC WORK PERMIT"
            ? "new"
            : "approved",
      })
      .then(() => {
        handleAlert({
          msg: "Transaction is Approved successfully",
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

  const newLCTransaction = async (values: TransactionFormTypes) => {
    handleOpenFormsLoading();
    if (values.lcNumber) {
      if (!values.lcExpiryDate || !values.lcStatus) {
        handleAlert({
          msg: "Enter LC Expire Date and LC Status",
          status: "error",
        });
        handleCloseFormsLoading();
        return;
      }
    }
    if (values.cardType === "NATIONAL AND GCC ELECTRONIC WORK PERMIT") {
      if (!values.status) {
        values.status = "In Process";
      }
    }
    if (values.editable === "0") {
      await server
        .post(`/transactions`, {
          ...values,
          type: "new",
        })
        .then(() => {
          handleAlert({
            msg: "New Labour Card is created successfully",
            status: "success",
          });
          handleCloseTransactionModal();
          getData();
        })
        .catch((err) => {
          handleCatchError(err);
        });
    } else {
      await server
        .patch(`/transactions/${editableTransactionData?._id}`, values)
        .then(() => {
          handleAlert({
            msg: "New Labour Card is updated successfully",
            status: "success",
          });
          handleCloseTransactionModal();
          getData();
        })
        .catch((err) => {
          handleCatchError(err);
        });
    }
    handleCloseFormsLoading();
  };

  const editNewLCTransaction = async (values: TransactionFormTypes) => {
    handleOpenFormsLoading();
    if (values.lcNumber) {
      if (!values.lcExpiryDate || !values.lcStatus) {
        handleAlert({
          msg: "Enter LC Expire Date and LC Status",
          status: "error",
        });
        handleCloseFormsLoading();
        return;
      }
    }
    await server
      .patch(`/transactions/${editableTransactionData?._id}`, values)
      .then(() => {
        handleAlert({
          msg: "New Labour Card is updated successfully",
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

  const renewLCTransaction = async (values: TransactionFormTypes) => {
    handleOpenFormsLoading();
    await server
      .post(`/transactions`, {
        ...values,
        type: "renew",
      })
      .then(() => {
        handleAlert({
          msg: "New Labour Card is created successfully",
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

  const editRenewLCTransaction = async (values: TransactionFormTypes) => {
    handleOpenFormsLoading();
    await server
      .patch(`/transactions/${editableTransactionData?._id}`, values)
      .then(() => {
        handleAlert({
          msg: "Renew Labour Card is updated successfully",
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

  return {
    addTransaction,
    editTransaction,
    newLCTransaction,
    renewLCTransaction,
    editNewLCTransaction,
    approvedTransaction,
    editRenewLCTransaction,
  };
};

export default useTransactionSubmit;
