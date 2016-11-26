'use strict';

window.onload = function() {
	
	var person = {}; // Object with name, age, job and salary

	var people = []; // Array with 10 objects in future

	// Random function for age and salary
	function getRandomInRange(min, max) {

		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// Random function for name and job
	function getRandomElem(array){

		var num = Math.floor(Math.random() * array.length);
		return array[num];
	}

	var namesArr = ['Вика', 'Катя', 'Олег', 'Таня', 'Витя']; // Array with names

	var calcAge = getRandomInRange(20, 35); // Random age

	var jobsArr = ['Менеджер проекта', 'Scrum-мастер', 'Старший кассир', 'Инженер-строитель', 'Программист', 'Дизайнер интерьера']; // Array with jobs

	var calcSalary = getRandomInRange(20, 120); // Random salary

	var femaleNames = ['Вика', 'Катя', 'Таня']; // Array with women names

	// Creating array with 10 different persons
	function generatePeopleArray() {

		for (var i = 0; i < 10; i++) {

			person.name = getRandomElem(namesArr);
			person.age = getRandomInRange(20, 35);
			person.job = getRandomElem(jobsArr);
			person.salary = getRandomInRange(20, 120);

			people.push(person);
			person = {};
		}

		return people;
	}

	function changeStyle() {

		var listItems = document.querySelectorAll('li');

		// Checking salary (red / yellow / green bg-color)
		
		if (salary < 50) {
			listItems[i].style.backgroundColor = 'red';

		} else if (salary < 80) {
			listItems[i].style.backgroundColor = "yellow";

		} else {
			listItems[i].style.backgroundColor = "green";
		}


		var names = document.querySelectorAll('.name');

		// Checking age (bold)
		
		if (age >= 20 && age <= 27) {
			names[i].style.fontWeight = 'bold';
		}


		// Searching 'Programmer' (underline)
		
		if (job === 'Программист') {
			listItems[i].style.textDecoration = 'underline';
		}


		// Searching women

		for (var k = 0; k < femaleNames.length; k++) {
			
			if (people[i].name === femaleNames[k]) {
				listItems[i].style.fontSize = '150%';
			}	
		}
	}


	generatePeopleArray();

	var list = document.querySelector('#list');

	// Display list items
	for(var i = 0; i < people.length; i++) {

		var person = people[i];

		var name = person.name;
		var age = person.age;
		var job = person.job;
		var salary = person.salary;

		list.innerHTML += '<li><span class="name">' + name + '</span>; <span class="age">' + age + '</span>; <span class="job">' + job + '</span>; <span class="salary">' + salary + '</span> тыс.руб.</li>';
		
		changeStyle();
	}
}