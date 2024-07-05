import moment from "moment-timezone";

export const handleDateForPost = (date?: Date): string => {
  if (!(date && new Date(date))) {
    return "";
  }

  const timeZone = "Asia/Dubai";
  const postDate = moment(date).tz(timeZone);
  const now = moment().tz(timeZone);

  const year = postDate.year();
  const month = postDate.month() + 1;
  const day = postDate.date();
  const hour = postDate.hour();
  const minute = postDate.minute();
  const second = postDate.second();

  const curYear = now.year();
  const curMonth = now.month() + 1;
  const curDay = now.date();
  const curHour = now.hour();
  const curMinute = now.minute();
  const curSecond = now.second();

  return year === curYear && month === curMonth
    ? curDay === day
      ? curHour === hour
        ? curMinute === minute
          ? curSecond === second
            ? "now"
            : `few seconds ago`
          : curMinute - minute === 1 &&
            Math.abs(curSecond - second) <= 59 &&
            Math.abs(curSecond - second) !== 0
          ? `few seconds ago`
          : `${curMinute - minute} minute ago`
        : curHour - hour === 1 &&
          Math.abs(curMinute - minute) <= 59 &&
          Math.abs(curMinute - minute) !== 0
        ? `${curMinute + 60 - minute} minute ago`
        : `${curHour - hour} hour ago`
      : +curDay - +day === 1 &&
        Math.abs(curHour - hour) <= 23 &&
        Math.abs(curHour - hour) !== 0
      ? `${curHour + 24 - hour} hour ago`
      : `${+curDay - +day} day ago`
    : moment(
        year.toString() +
          month.toString().padStart(2, "0") +
          day.toString().padStart(2, "0"),
        "YYYYMMDD"
      ).fromNow();
};
