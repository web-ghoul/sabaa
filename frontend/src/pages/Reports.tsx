import { Skeleton } from "@mui/material";
import UnderDevelopment from "../components/UnderDevelopment/UnderDevelopment";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";

const Reports = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer>
        <UnderDevelopment />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export const LoadingReports = () => (
  <PrimaryBox>
    <PrimaryContainer>
      <Skeleton variant="rounded" height={400} />
    </PrimaryContainer>
  </PrimaryBox>
);

export default Reports;
