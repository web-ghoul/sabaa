import * as yup from "yup";

export const ActivitiesOptionsSchema = yup.object({
  search: yup.string(),
  type: yup.string(),
  operation: yup.string(),
  from: yup.string(),
  topo: yup.string(),
});

export const ActivitiesOptionsInitailValues = {
  search: "",
  type: "",
  operation: "",
  from: "",
  to: "",
};
