'use strict';

const getTime = function(unixTime) {
    // console.log('connected');
    const date = new Date(unixTime*1000);
    // Hours part from the timestamp
    const hours = date.getHours();
    // Minutes part from the timestamp
    const minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    const seconds = "0" + date.getSeconds();
    // Will display time in 10:30:23 format
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    console.log(formattedTime);
    return formattedTime;
}

module.exports.getTime = getTime;
