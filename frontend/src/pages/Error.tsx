import { Skeleton } from "@mui/material";
import ErrorBox from "../components/ErrorBox/ErrorBox";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";

const Error = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer>
        <ErrorBox />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export const LoadingError = () => (
  <PrimaryBox>
    <PrimaryContainer>
      <Skeleton variant="rounded" height={400} />
    </PrimaryContainer>
  </PrimaryBox>
);

export default Error;
