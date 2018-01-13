// REST - representation state transfer
// передаёт состояние системы посредством http запросов

// http:
// 1) head - содержит заголовки (массив)
// - host: localhost
// - content-length: 20
// - type: GET|POST|PUT|DEL|PATCH

// PATCH - для документ-ориентированых бд.
//  Если нужно добавить новые поля в объект используется PATCH

// http:localhost - host
// 3000 - port
// /order - route
// :id - param
// ?page=3&count=2 - query

// GET http:localhost:3000/order/:id/:category?page=3&count=5

// POST http:localhost:3000/order/
// { name: 'some', category: 10 }

// PUT http:localhost:3000/order/5
// { name: 'another' }

// EXPRESS
// В express - все регистрируемые сущности - middleware
// express даёт надстройку над стримами. Методы для работы со стримами req, res

// MVC

// MODEL - объём для хранения данных. На бекэнде - плоский объект
// class A {
//   constructor() {
//     this.b = 1;
//     this.c = 'str';
//   }
// }
// в нём мы храним все данные

// CONTROLLER - то место, где вызывается бизнес-логика и работает (наполняет,...) с моделью

// VIEW - отображение данных модели


// Приложение должен запускать nodemon и перезапускать в случае падения