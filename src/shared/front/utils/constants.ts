import moment from 'moment';

export const MONTHS = new Array(12)
  .fill(0)
  .map((_, index) =>{
      const number = index + 1
      const monthNumber = number?.toString().length == 1 ? `0${number}` : number
      return{
        value: `${monthNumber}`, 
        label: moment(`2022${monthNumber}01`).format('MMM')
      }
});
 