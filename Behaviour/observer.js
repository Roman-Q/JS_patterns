/*Другие названия - observer, describer, dispatcher, listener. Формирует зависимости "1 ко многим" ("One to many dependencies") напрямую. Изменения в одном обьекте дают инициацию изменений функционала
в подписчиках осуществляет изменением своего состояния. Удобно применять при разработке форм с множеством полей ввода, когда необходимо реагировать
на изменения их значений(binding). Существует также паттерн publisher-subscriber: связь идет через посредника (EventChannel), об изменениях
сигнализирует событиями, есть возможность подписаться на различные события.*/

class Subject {
    constructor() {
        this.observers = []
    }

    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs != observer)
    }

    fire(action) {
        this.observers.forEach(observer => {
            observer.update(action)
        })
    }
}

class Observer {
    constructor(state = 1) {
        this.state = state
        this.initialState = state
    }

    update(action) {
        switch(action.type) {
            case 'INCREMENT': 
                this.state = ++this.state
                break
            case 'DECREMENT':
                this.state = --this.state
                break
            case 'ADD':
                this.state += action.payload
                break
            default: this.state = this.initialState
        }
    }
}

const stream$ = new Subject()

const obs1 = new Observer()
const obs2 = new Observer(18)

stream$.subscribe(obs1)
stream$.subscribe(obs2)

stream$.fire({type:'INCREMENT'})
stream$.fire({type:'INCREMENT'})
stream$.fire({type:'DECREMENT'})
stream$.fire({type:'ADD', payload: 230})

console.log(obs1.state)
console.log(obs2.state)
