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

export default Error;
