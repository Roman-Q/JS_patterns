/* Позволяет создавать абстрактную оболочку над функционалом, который позволяет управлять и 
записывает состояния, которые были вызваны. Хорошим примером являются особенности библиотеки REDUX. */

class MyMath {
	constructor(initialValue = 0) {
		this.num = initialValue
	}

	square() {
		return this.num ** 2
	}

	cube() {
		return this.num ** 3
	}
}

class Command {
	constructor(subject) {  	
		this.subject = subject
		this.commandsExecuted = [] //массив для списка всех вызванных комманд
	}

	execute(command) {
		this.commandsExecuted.push(command)
		return this.subject[command]()
	}
}

const x = new Command(new MyMath(2))

console.log(x.execute('square'))
console.log(x.execute('cube'))

console.log(x.commandsExecuted) // получаем масив комманд, которые были вызваны