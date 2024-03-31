import UnderDevelopment from "../components/UnderDevelopment/UnderDevelopment";
import { PrimaryBox } from "../mui/boxes&containers/PrimaryBox";
import { PrimaryContainer } from "../mui/boxes&containers/PrimaryContainer";

const Dashboard = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer>
        <UnderDevelopment />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Dashboard;
