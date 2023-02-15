import moment from 'moment';
// moment.locale('en', {
//   relativeTime: {
//     future: 'in %s',
//     past: '%s ago',
//     s: '1s',
//     ss: '%ss',
//     m: '1m',
//     mm: '%dm',
//     h: '1h',
//     hh: '%dh',
//     d: '1d',
//     dd: '%dd',
//     M: '1M',
//     MM: '%dM',
//     y: '1Y',
//     yy: '%dY',
//   },
// });
moment.locale('en');

export const getWeekDays = (date?: string) => {
  const momentDate = moment(date);
  const weekFirstDate = momentDate.startOf('week').add(1, 'days');
  return new Array(7).fill(0).map((day, index) => {
    return weekFirstDate.clone().add(index, 'days');
  });
};
export const getTodaysDay = () => {
  return moment();
};
