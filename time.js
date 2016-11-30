'use strict';

window.onload = function() {

	var outputClock = '';
	var clock = document.querySelector('span');
	var months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
	var timeDate;
	var format;
	var userDate;
	var userFormat;

	function initClock (timeDate, format) {
		// debugger
		timeDate = timeDate || new Date();
		format = format || ['hours', 'minutes', 'seconds'];

		if (arguments.length === 1 && arguments[0] instanceof Date) {
			timeDate = arguments[0];
			format = ['hours', 'minutes', 'seconds'];
			} 
			else if (arguments.length === 1 && arguments[0] instanceof Array) {
				timeDate = new Date();
				format = arguments[0];
			}

		userDate = timeDate;
		userFormat = format;
		}

	function createClock() {
		for (var i = 0; i < userFormat.length; i++) {

			switch (userFormat[i]) {

				case 'seconds':
				// debugger;
					if (userDate !== 'undefined') {
						userDate.setSeconds(userDate.getSeconds() + 1);
					}
					outputClock += userDate.getSeconds() + ' сек. ';
					break;
				case 'minutes':
					outputClock += userDate.getMinutes() + ' мин. ';
					break;
				case 'hours':
					outputClock += userDate.getHours() + ' ч. ';
					break;
				case 'day':
					outputClock += userDate.getDate() + ' д. ';
					break;
				case 'month':
					outputClock += months[userDate.getMonth()] + ' мес. ';
					break;
				case 'year':
					outputClock += userDate.getFullYear() + ' г. ';
					break;
				default:
					outputClock = 'Ошибка! Проверьте правильность формата';
				}
			}
		return outputClock;
	}

// Activate one of this functions:
	//-- Current hh:mm:ss
		initClock();
	//-- Some date and user format
		// initClock(new Date(2012,7,24), ['year', 'hours', 'minutes', 'seconds']);
	//-- Some date and time + user format
		// initClock(new Date(2012,7,24,4,5,6), ['month', 'hours', 'seconds']);
	//-- Current date and user format
		// initClock(new Date(), ['minutes', 'seconds', 'year', 'month']);
	//-- Only user format
		// initClock(['month','day','hours', 'seconds']);
	//-- Only some date
		// initClock(new Date(2012,7,24));
	//-- Wrong format
		// initClock(new Date(2011,8,11), ['smth','wrong','lolWhat']);

	setInterval(function() {
			createClock();
			clock.innerHTML = outputClock;
				clock.style.color = '#1FF8D0';
				clock.style.backgroundColor = 'black';
				clock.style.padding = '15px';
				clock.style.margin = '20px';
				clock.style.fontSize = '120%';
			outputClock = '';
		}, 1000);
}