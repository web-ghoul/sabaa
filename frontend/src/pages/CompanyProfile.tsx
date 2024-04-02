import { useContext } from "react";
import UnderDevelopment from "../components/UnderDevelopment/UnderDevelopment";
import { AppContext } from "../contexts/AppContext";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";
const CompanyProfile = () => {
  const { pageContainerClasses } = useContext(AppContext);
  return (
    <PrimaryBox>
      <PrimaryContainer className={pageContainerClasses}>
        <UnderDevelopment />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default CompanyProfile;
