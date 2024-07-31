import * as yup from "yup";
import useQueries from "../../hooks/useQueries";

const useProsOptionsSchema = () => {
  const { handleGetQueries } = useQueries();
  const allParams: { [key: string]: string } = handleGetQueries();

  const ProsOptionsSchema = yup.object({
    search: yup.string(),
    dobFrom: yup.date(),
    dobTo: yup.date(),
    residenceFrom: yup.date(),
    residenceTo: yup.date(),
    status: yup.string(),
    nationality: yup.string(),
    state: yup.string(),
  });

  const ProsOptionsInitialValues = {
    search: "",
    dobFrom: allParams.dobFrom || "",
    dobTo: allParams.dobTo || "",
    residenceTo: allParams.residenceTo || "",
    residenceFrom: allParams.residenceFrom || "",
    status: allParams.status || "",
    nationality: allParams.nationality || "",
    state: allParams.state || "",
  };

  return { ProsOptionsInitialValues, ProsOptionsSchema };
};

export default useProsOptionsSchema;
