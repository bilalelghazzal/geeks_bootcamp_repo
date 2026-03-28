const { addDays, format } = require('date-fns');

function performDateOperations() {
  const now = new Date();
  console.log('Current date:', format(now, 'dd/MM/yyyy HH:mm:ss'));

  const futureDate = addDays(now, 5);
  const formatted = format(futureDate, 'dd/MM/yyyy HH:mm:ss');

  console.log('Date in 5 days:', formatted);
}

module.exports = { performDateOperations };