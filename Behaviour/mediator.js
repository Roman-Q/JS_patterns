/* Позволяет выстраивать коммуникацию между обьектами разного типа. Также предоставляет централизованную абстракцию, 
позволяющую взаимодействовать группе обьектов через друг друга. */

class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            })        
        }
    }
}

const user1 = new User('Roman')
const user2 = new User('Ember')
const user3 = new User('Ihor')

const room = new ChatRoom()

room.register(user1)
room.register(user2)
room.register(user3)

user1.send('Hello', user2)
user2.send('Hey!', user1)
user3.send('Hi everybody!')