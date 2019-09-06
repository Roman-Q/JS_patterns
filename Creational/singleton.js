/*В приложении может быть только 1 инстанс определенного обьекта(класса). Например,
для подключения к базе данных нужно использовать один и тот же инстанс.
В нашем случае перед осуществлением получения данных с помощью нового инстанса мы проверим существует 
ли уже подключение к нашей Database и если "да" то мы пользуемся уже существующим*/ 

class Database {
	constructor(data) {
		if (Database.exists) {
			return Database.instance
		}

		Database.instance = this
		Database.exists = true
		this.data = data
	}

	getData() {
		return this.data
	}
}


const mongo = new Database('MongoDB')
console.log(mongo.getData())

const mysql = new Database('MySQL')
console.log(mysql.getData())

//expected MongoDB 2 times