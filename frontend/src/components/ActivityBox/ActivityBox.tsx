import { ActivityTypes } from "../../types/store.types";

const ActivityBox = ({ activity }: { activity: ActivityTypes }) => {
  return <div>{activity.type}</div>;
};

export default ActivityBox;
