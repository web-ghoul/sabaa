import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import * as yup from "yup";
import { getActivities } from "../../store/activitiesSlice";
import { AppDispatch } from "../../store/store";

const useActivitiesOptionsSchema = () => {
  const [searchParams] = useSearchParams();

  const allParams = useMemo(() => {
    const params: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    return params;
  }, [searchParams]);
  const dispatch = useDispatch<AppDispatch>();

  const ActivitiesOptionsSchema = yup.object({
    search: yup.string(),
    type: yup.string(),
    operation: yup.string(),
    from: yup.string(),
    to: yup.string(),
  });

  const ActivitiesOptionsInitailValues = {
    search: "",
    type: "",
    operation: "",
    from: "",
    to: "",
  };

  useEffect(() => {
    dispatch(getActivities(allParams));
  }, [dispatch, allParams]);

  return { ActivitiesOptionsSchema, ActivitiesOptionsInitailValues };
};

export default useActivitiesOptionsSchema;
