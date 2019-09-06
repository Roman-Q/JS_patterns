/*Прототипы используем в качестве скелета для создания на их основе
других обьектов, которым уже будут присущи свойства скелета. У обоих
обьектов будет общий прототип*/

const car = {
	wheels: 4,
	
	init() {
		console.log(`I have ${this.wheels} wheels, my owner is ${this.owner}`)
	}
}

const carWithOwner = Object.create(car, {
	owner: {
		value: 'Alex'
	}
})

console.log(carWithOwner.__proto__ === car); //true

carWithOwner.init();

