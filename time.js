'use strict';

window.onload = function() {

	var outputClock = '';
	var clock = document.querySelector('div');
	var months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

	function initClock (timeDate, format) {

		var timeDate = timeDate || new Date();
		var format = format || ['hours', 'minutes', 'seconds'];
		
		if (arguments.length === 1 && arguments[0] instanceof Date) {
			timeDate = arguments[0];
			format = ['hours', 'minutes', 'seconds'];
			} 
			else if (arguments.length === 1 && arguments[0] instanceof Array) {
				timeDate = new Date();
				format = arguments[0];
			}

		for (var i = 0; i < format.length; i++) {

				switch (format[i]) {

					case 'seconds':
						outputClock += timeDate.getSeconds() + ' сек. ';
						break;
					case 'minutes':
						outputClock += timeDate.getMinutes() + ' мин. ';
						break;
					case 'hours':
						outputClock += timeDate.getHours() + ' ч. ';
						break;
					case 'day':
						outputClock += timeDate.getDate() + ' д. ';
						break;
					case 'month':
						outputClock += months[timeDate.getMonth()] + ' мес. ';
						break;
					case 'year':
						outputClock += timeDate.getFullYear() + ' г. ';
						break;
					default:
						alert('Выбран неверный формат даты');
				}
			}
		return outputClock;
	}

	setInterval(function() {
// debugger;
			clock.innerHTML = initClock();
				clock.style.color = '#1FF8D0';
				clock.style.backgroundColor = 'black';
				clock.style.padding = '15px';
				clock.style.margin = '10px';
				clock.style.fontSize = '120%';
			outputClock = '';
		}, 1000);
}
	
	// Current hh:mm:ss
		// initClock();
	// Some date and user format
		// initClock(new Date(2012,7,24), ['year', 'hours', 'minutes', 'seconds']);
	//Current date and user format
		// initClock(new Date(), ['minutes', 'seconds', 'year', 'month']);
	// Only user format
		// initClock(['month','day','hours']);
	// Only some date
		// initClock(new Date(2012,7,24));