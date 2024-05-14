import { ActivityTypes } from "../../types/store.types";

const NotificationBox = ({ activity }: { activity: ActivityTypes }) => {
  return <div>{activity.type}</div>;
};

export default NotificationBox;
