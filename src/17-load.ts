import _ from 'lodash';

const data = [
  {
    username: 'camilo',
    role: 'admin',
  },
  {
    username: 'valen',
    role: 'seller',
  }
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
