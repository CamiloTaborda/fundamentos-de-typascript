import { subDays, format } from 'date-fns'

const date = new Date(1992, 9, 20);
const rta = subDays(date, 30);
const str = format(rta, 'yyy/mm/dd');

console.log(str);
