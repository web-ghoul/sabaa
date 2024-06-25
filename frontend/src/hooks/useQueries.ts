import { useSearchParams } from "react-router-dom";

const useQueries = () => {
  const [searchParams] = useSearchParams();
  const handleGetQueries = () => {
    const allParams: { [key: string]: string } = {};
    for (const [key, value] of searchParams.entries()) {
      allParams[key] = value;
    }
    return allParams;
  };
  return { handleGetQueries };
};

export default useQueries;
