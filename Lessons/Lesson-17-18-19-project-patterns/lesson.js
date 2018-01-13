// literature: сайт рефакторинг

var obj = {};

Object.defineProperty(obj, 'key', {
  value: 'This is value',
  writable: false,
  enumerable: false,
  configurable: true // false - cannot delete
});

obj.key = 'Another value';
console.log(obj.key);
for (var item in obj) {
  console.log(item)
}

delete obj.key;

// PATTERNS:

// CONSTRUCTOR

var Vegetable = function (seeds) {
  var private = 'this is private'; // private property
  this.seeds = seeds;
  this.push = function () {
    return private;
  }
};

// new изолирует новый объект от всего родительского скоупа (если Vegetable return this;)
var cucumber = new Vegetable(12);
var cucumber1 = new Vegetable(1);
var cucumber2 = new Vegetable(2);

console.log(cucumber);
console.log(cucumber1);
console.log(cucumber2);

// MODULE

// define private and public properties

var Module = (function () {
  var privateMember = 123;
  var publicMember = 456;
  return {
    publicMember: publicMember
  }
})();

// var module = Module();
// module.publicMember;

console.log(Module);
console.log(Module.publicMember);

// Factory

var Order = function (title, id, userId, token, status, isActive, created) {
  this.title = title;
  this.id = id;
  this.userId = userId;
  this.token = token;
  this.status = status;
  this.isActive = isActive;
  this.created = created;
}

Order.createOrder = function (id) {
  return new Order('', id, '', 'xxx', 'active', true, new Date());
}

// var order1 = new Order('', 123, '', 'xxx', 'active', true, new Date());
// var order2 = new Order('', 673, '', 'xxx', 'active', true, new Date());
// var order3 = new Order('', 946, '', 'xxx', 'active', true, new Date());
// var order4 = new Order('', 159, '', 'xxx', 'active', true, new Date());
// var order5 = new Order('', 329, '', 'xxx', 'active', true, new Date());
// or

var order1 = Order.createOrder(953);
var order2 = Order.createOrder(356);
var order3 = Order.createOrder(478);
var order4 = Order.createOrder(843);
var order5 = Order.createOrder(930);

console.log(order1);


// SINGLETON
// создаёт instance и смотрит, чтобы этот объект был один
// services, very big object, objects of connections,
// utilities, objects with bufferization, global objects

var Singleton = (function () {
  var singletonInstance;

  var SingleClass = function (title) {
    this.title = title;
  }

  var create = function (title) {
    if (!singletonInstance) {
      singletonInstance = new SingleClass(title);
    }

    return singletonInstance;
  }

  return {
    create: create
  }
}());

console.log(Singleton);
var singleton = Singleton.create('First title');
console.log(singleton.title);
var singleton1 = Singleton.create('Other title');
console.log(singleton1.title);


// STRUCTURAL PATTERNS

// DECORATOR
// Позволяет уйти от последствий наследования (от ненужных свойств), не меняя первоначальный класс

var Model = function (id) {
  this.id = id;
  this.returnCompleteId = function () {
    return `This is model with id:${this.id}`
  }
}

Model.createModel = function (id) {
  var model = new Model(id);
  model.title = 'Some title';
  model.someMethod = function () {
    console.log('Invoke some method and model id:');
    console.log(model.id);
  }

  return model;
}

var decoratedModel = Model.createModel(123);
decoratedModel.someMethod();
console.log(decoratedModel.returnCompleteId());

// FACADE PATTERN

var Model = function (id) {
  this.id = id;
}

Model.prototype.returnCompleteId = function () {
  return `this is model with id:${this.id}`;
}

Model.prototype.processModel = function () {
  console.log('Model proceed');
}

Model.prototype.stopProcessModel = function () {
  console.log('Processing suspend');
}

Model.prototype.finalizeModel = function () {
  console.log('Finalized');
}


var model = new Model(123);
// model.processModel();
// model.stopProcessModel();
// model.returnCompleteId();
// model.finalizeModel();
// or
// FACADE
model.completed = function () {
  this.processModel();
  this.stopProcessModel();
  this.returnCompleteId();
  this.finalizeModel();
}
model.completed();

// HW
// Поднять node.js проект
// Затягивать csv документы (любой величины) через put(post) запрос, парсить его
// и помещать его в БД
// 1. Парсер
// 2. Гет запросы для получения всех данных, одного запроса,
// удалить одну запись, удалить все записи
// 3. Возможность добавить в БД свою запись
// 4. Сформировать csv файл и отправить пользователю.


// OBSERVER
// RXJS - library
// У нас есть колекция методов, кот. наблюдают за состоянием объекта (подписчики);
// они всегда вызываются, когда в объекте происходит какое-либо событие.
// 1) Позволяет уменьшить связность системе.
// 2) Есть объект, в кот. стягиваются все изменения.
// 3) Следит за изменением объекта.
// There are 3 methods: appendListener, removeEventListener, notify
// Есть какие-то события

class Test {
  constructor() {
    this.count = 1;
    this.name = '';
    this.status = false;
    this.longevity = null;
  }

  increaseCounter() {
    this.count++;
  }

  setTestParams(name, longevity, status) {
    this.name = name;
    this.longevity = longevity;
    this.status = status;
  }
  setTestParamsAsync() {
    let interval = setInterval(() => {
      this.increaseCounter();
      if (this.count > 4) {
        clearInterval(interval);
      }
      this.setTestParams(`Test ${this.count}`, this.count * 10, true);
    }, 200)
  }
}

// methods subscribers
let notify = function () {
  const testStatus = this.status ? 'Passed' : 'Failed';
  console.log(`Test ${this.name} was ${testStatus} - longevity:${this.longevity}`);
}
let logger = function () {
  console.log(`Test with name ${this.name} - running`);
}

class ObservableTest extends Test {
  constructor() {
    super();
    this.observableList = [];
  }
  appendListener(functionName, listener) {
    if (typeof listener === 'function') {
      this.observableList.push({
        functionName: functionName,
        listener
      });
      return true;
    }
    return false;
  }
  removeEventListener(listener) {
    for (let i = 0; i < this.observableList.length; i++) {
      if (listener === this.observableList[i]) {
        this.observableList.splice(i, 1);
      }
    }
  }
  notify(functionName) {
    for (let i = 0; i < this.observableList.length; i++) {
      if (this.observableList[i].functionName === functionName) {
        this.observableList[i].listener.call(this);
      }
    }
  }

  setTestParams(name, longevity, status) {
    super.setTestParams(name, longevity, status);
    if (this.observableList.length > 0) {
      this.notify('setTestParams');
    }
  }
  setTestParamsAsync() {
    super.setTestParamsAsync();
    if (this.observableList.length > 0) {
      this.notify('setTestParamsAsync');
    }
  }
}

const test1 = new ObservableTest();
test1.appendListener('setTestParams', notify);
test1.appendListener('setTestParams', logger);
// test1.removeEventListener(logger);

test1.setTestParamsAsync();


// test1.setTestParams('Mytest', 10, true);
// test1.setTestParams('Mytest2', 20, true);

// setTimeout(() => {
//   test1.removeEventListener(logger);
// }, 200);


// setTimeout(() => {
//   test1.setTestParams('Mytest', 10, true);
//   test1.setTestParams('Mytest2', 20, true);
// }, 1000);


// HW
// Переписать, но в notify определять имя функции автоматически
//  (убрать 'setTestParams' из this.notify('setTestParams'))



// MEDIATOR PATTERN

// Allows for loosely coupled system
// One object manages all communications
// Уменьшает coupling в системе
// Task <- Mediator -> Notify умеет общаться с Task & Notify
// Mediator не изменяет Task

const Task = function(data) {
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
}

Task.prototype.complete = function() {
  console.log(`Completed task: ${this.name}`);
  this.completed = true;
}

Task.prototype.save = function() {
  console.log(`Saving Task: ${this.name}`);
}

// module.exports = Task;

const notificationService = function() {
  const message = 'Notifying ';
  this.update = function(task) {
    console.log(`${message}${task.user} for task ${task.name}`);
  }
};

const loggingService = function() {
  const message = 'Logging ';
  this.update = function(task) {
    console.log(`${message}${task.user} for task ${task.name}`);
  }
};

// mediator
const mediator = (function(){
  const channels = {};
  const subscribe = function(channel, context, func) {
    if(!mediator.channels[channel]){
      mediator.channels[channel] = [];
    }
    mediator.channels[channel].push({ context, func });
  };
  const publish = function(channel){
    if(!this.channels[channel]){
      return false;
    }

    const args = Array.prototype.slice.call(arguments, 1);

    for(let i = 0; i < mediator.channels[channel].length; i++) {
      const sub = mediator.channels[channel][i];
      sub.func.apply(sub.context, args);
    }
  };
  
  return  {
    channels,
    subscribe,
    publish
  }
}());

const task1 = new Task({
  name: 'create a demo for mediators',
  user: 'John'
});
const Task = function(data) {
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
}

Task.prototype.complete = function() {
  console.log(`Completed task: ${this.name}`);
  this.completed = true;
}

Task.prototype.save = function() {
  console.log(`Saving Task: ${this.name}`);
}

// module.exports = Task;

const notificationService = function() {
  const message = 'Notifying ';
  this.update = function(task) {
    console.log(`${message}${task.user} for task ${task.name}`);
  }
};

const loggingService = function() {
  const message = 'Logging ';
  this.update = function(task) {
    console.log(`${message}${task.user} for task ${task.name}`);
  }
};

// mediator
const mediator = (function(){
  const channels = {};
  const subscribe = function(channel, context, func) {
    if(!mediator.channels[channel]){
      mediator.channels[channel] = [];
    }
    mediator.channels[channel].push({ context, func });
  };
  const publish = function(channel){
    if(!this.channels[channel]){
      return false;
    }

    const args = Array.prototype.slice.call(arguments, 1);

    for(let i = 0; i < mediator.channels[channel].length; i++) {
      const sub = mediator.channels[channel][i];
      sub.func.apply(sub.context, args);
    }
  };
  
  return  {
    channels,
    subscribe,
    publish
  }
}());

const task1 = new Task({
  name: 'create a demo for medators',
  user: 'John'
});

const not = new notificationService();
const ls = new loggingService();
// const audit = new auditService();

mediator.subscribe('complete', not, not.update);
mediator.subscribe('complete', ls, ls.update);
// mediator.subscribe('complete', audit, audit.update);

task1.complete = function() {
  mediator.publish('complete', this);
  Task.prototype.complete.call(this);
};
task1.complete();

const not = new notificationService();
const ls = new loggingService();
// const audit = new auditService();

mediator.subscribe('complete', not, not.update);
mediator.subscribe('complete', ls, ls.update);
// mediator.subscribe('complete', audit, audit.update);

task1.complete = function() {
  mediator.publish('complete', this);
  Task.prototype.complete.call(this);
};

task1.complete();


// COMMAND Pattern
// Для декомпозиции
// Убираем фрагментарную имплементацию
// undo, redo операции
// делаем связность - привязываемся к методу .method

class Cookie{
  bake() {
    console.log('Cookie backed');
  }

  eat() {
    console.log('Yum, yum');
  }
}

const commandCookie = function() {
  const cookie = new Cookie();
  let commands = [];

  cookie.add = function(command) {
    commands.push(command);
  }

  cookie.undo = function() {
    this.execute(commands);
  }
  cookie.execute = function(commands) {
    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
      const args = command[i].arguments;
      if(cookie[command] && typeof cookie[command] === 'function'){
        cookie[command](args);
      }
    }    
  }

  return cookie;
}

const cookie = commandCookie();
cookie.commands.push('eat', 'eat', 'eat', 'bake');
cookie.execute(); 


// CHAIN OF RESPONSIBILITY
// f.e. jQuery

class MyJquery {
  consturctor() {
    this.capacity = 100;
  }

  getCapacity(num) {
    console.log(this.capacity)
    
    console.log(num)
    this.capacity -= num;
    console.log(this.capacity);
    return this;
  }

  sumCapacity(num) {
    this.capacity += num;
    console.log(this.capacity);
    return this;
  }
}

let jquery = new MyJquery();
jquery.getCapacity(2).getCapacity(3).getCapacity(5);


// PROXY Pattern
// express - typical proxy
// видоизменяет объект

function GeoCoder() {
  this.getLatLng = function (address) {
    if (address === "Amsterdam") {
      return "52.3700° N, 4.8900° E";
    } else if (address === "London") {
      return "51.5171° N, 0.1062° W";
    } else if (address === "Paris") {
      return "48.8742° N, 2.3470° E";
    } else if (address === "Berlin") {
      return "52.5233° N, 13.4127° E";
    } else {
      return "";
    }
  };
}

function GeoProxy() {
  const geocoder = new GeoCoder();
  const geocache = {};

  return {
    getLatLng: function(address) {
      if(!geocache[address]) {
        geocache[address] = geocoder.getLatLng(address);
      }
      log.add(`${address}: ${geocache[address]}`);
      return geocache[address];
    },

    getCount: function() {
      let count = 0;
      for (let code in geocache) {
        count++;
      }
      return count;
    }
  };
};

const log = (function() {
  let log = '';

  return {
    add: function(msg) { log += `${msg}\n`},
    show: function() { console.log(log); log = '';}
  }
}());

function run() {
  const geo = new GeoProxy();

  // geolocation requests

  geo.getLatLng('Paris');
  geo.getLatLng('London');
  geo.getLatLng('Amsterdam');
  geo.getLatLng('Berlin');
  geo.getLatLng('Kiev');
  geo.getLatLng('Kharkiv');

  log.add(`\nCache size: ${geo.getCount()}`);
  log.show();
}

run();


// STRATEGY
// Если не надо плодить перегруженные методы
// Поменяли один метод и пересчитали

class Order{
  constructor(processOrder) {
    this.total = 100;
    this.tax = 5;
    this.processOrder = processOrder;
  }

  processed() {
    return this.processOrder();
  }
}

const texasRateCalc = function() {
  return this.total + this.tax;
}

const wisconsinRageCalc = function() {
  return this.total - this.tax * 2;
}

let texasOrder = new Order(texasRateCalc);
let wisconsinOrder = new Order(wisconsinRageCalc);

console.log(texasOrder.processed());
console.log(wisconsinOrder.processed());
