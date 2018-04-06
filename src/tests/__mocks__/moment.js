// uses the actual moment lib, not the mocked one
const moment = require.requireActual('moment');  

export default (timestamp = 0) => {
  return moment(timestamp);
}