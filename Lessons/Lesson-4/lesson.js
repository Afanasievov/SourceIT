// Tho DOM - object - Observable

// Observable

//                      EventEmitter

// добавляем к объекту коллекцию Observables[]
// методов - Notifify, Log - подписчики
// + метод notify - издатель
// - Pub-sub method

// подписываем на DOM - события
// on  .on('click', () => {}) - click, onready - добавляет в очередь
// .on === addEventListener

// EventEmitter - все классы node.js - обёртки над EventEmitter
// они способны создавать event и подписываться на события.

// Есть события, которые отстреливают только раз - end for response
// обрабатываются командой once
// myEmitter.once('event', () => {})


// eventNames() - имена событий
// myEmitter.eventNames()

// maxEventListeners
// listenerCount('foo')
// Позволяет узнать, сколько обработчиков висит на сервере


//                MODULES

// require - global variable
// require(X) from module at path Y



// NPM

// version x.y.z
// x - major version
// y - minor version
// z - patch


// H.W
// Написать свой class который наследуется от евентЭмиттера и способен работать с файловой системой
// можно использовать fs, но без коллбеков - можно использовать readFileAsync