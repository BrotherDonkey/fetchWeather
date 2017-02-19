'use strict';

// const date = '2017-02-20 12:00:00';

const printDay = function(date) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  const d1 = date.split(' ');
    const rawDate = d1[0];
    const rawTime = d1[1];
  const year = rawDate.split('-')[0];
  const monthNum = parseInt(rawDate.split('-')[1]);
    const monthString = monthNames[monthNum - 1];
  const day = rawDate.split('-')[2];
  const simpleTime = rawTime.split(':').splice(0, 2).join(':');

  // Print date and time
  console.log(`Date: ${monthString} ${day}, ${year} at ${simpleTime}`);
  const dateString = `Date: ${monthString} ${day}, ${year}`;
  return dateString;
};

const printTime = function(date) {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  const d1 = date.split(' ');
    const rawDate = d1[0];
    const rawTime = d1[1];
  const year = rawDate.split('-')[0];
  const monthNum = parseInt(rawDate.split('-')[1]);
    const monthString = monthNames[monthNum - 1];
  const day = rawDate.split('-')[2];
  const simpleTime = rawTime.split(':').splice(0, 2).join(':');

  // Print date and time
  console.log(`Date: ${monthString} ${day}, ${year} at ${simpleTime}`);
  const timeString = `${simpleTime}`;
  return timeString;
};



module.exports.printDay = printDay;
module.exports.printTime = printTime;
