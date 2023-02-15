import moment from "moment";
export const getWeekDays = (date: string) => {
  const momentDate = moment(date);
  const weekFirstDate = moment(date).startOf("week").add(1, "days");
  return new Array(7).fill(0).map((day, index) => {
    return weekFirstDate.clone().add(index, "days");
  });
};

export const getTodaysDay = () => {
  return moment();
};
