simplyCountdown('#countdown', {
    year: 2022, // required
    month: 2, // required
    day: 20, // required
    hours: 06, // Default is 0 [0-23] integer
    minutes: 30, // Default is 0 [0-59] integer
    seconds: 00, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: 'Dia',
        hours: 'Hora',
        minutes: 'Minuto',
        seconds: 'Segundo',
        pluralLetter: 's'
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: true,
    onEnd: function () {
        //alert('Finish countdown');
        return; 
    },
    refresh: 1000, //default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false // enable count up if set to true
});