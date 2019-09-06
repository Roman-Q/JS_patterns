/* Поведенческие дизайн-паттерны позволяют улучшить коммуникаци между
обьектами разного типа. Chain of responsibility, в свою очередь, 
дает возможность вызывать у одного и того же обьекта вызывать последовательный
набор операций и последовательно их модифицировать. */

class MySum {
	constructor(initialValue = 42) {
		this.sum = initialValue
	}

	add(value) {
		this.sum += value
		return this // В данном случае мы возвращаем ссылку на текущий обьект, которая позволяет повторно использовать метод add
	}
}

const sum1 = new MySum() 
console.log(sum1.add(10).add(1).add(120).add(5).sum) // Цепочка chain of responsibility с окончанием на ключе .sum