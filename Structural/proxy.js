/* прокси позволяет ставить ловушки на поля обьектов, вызов функции, 
что позволяет определять поведение программы в дальнейшем и избегать лишних запросов 
на сервер если мы уже, например, имеем необходимые данные, полученные ранее */

function networkFetch(url) {
  return `${url} - Ответ с сервера`
}

const cache = new Set() //структура данных, которая не принимает на хранение дублика информации
const proxiedFetch = new Proxy(networkFetch,  {
  apply(target, thisArg, args) {
    const url = args[0]
    if (cache.has(url)) {
      return `${url} - Ответ из кэша`
    } else {
      cache.add(url)
      return Reflect.apply(target, thisArg, args)
    }
  }
})

console.log(proxiedFetch('react.io'))
console.log(proxiedFetch('react.io')) //expected: Ответ из кэша



