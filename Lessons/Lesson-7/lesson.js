// Middleware - набор сервисов, распеределяющих функциональность

// передаём управление от одной функции к другой.

// chain-off responsibility
// объект в ф-и 1 видоизменяется и попадает в ф-ю 2 и т.д.
// после n шагов - новый модифицированный объект (первоначальный объект не меняется)

// можем независимо оперировать входящими и выхдящими данными в запросе


// TRANSACTION MONITOR
// Мониторит все транзакции. Объекты транзакции не меняются.
// client <--> transaction monitor <--> db


// Message Oriented Middleware - MOM
// adv:
//  asyncronus
//  flexible
//  portability
//  interoperability
//  reduces complexity

// Middleware in express:
// Routing, Controller, Models, Views, ... Security


// 1. Приходит запрос Пост, если пост - корректно распарсить body
// записать body в стрим риквест и передать управление другому роуту
// 2. Реквест с cookie (header) - распарсить и записать в объект
// записать в объект риквеста