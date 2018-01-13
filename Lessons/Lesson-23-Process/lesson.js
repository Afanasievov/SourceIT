// Node - однопоточный
// может порождать процессы

// Scalability - масштабируемость
// 1. Availability
// 2. Fault Tolerance - устойчивость к падениям
// 3. Scalability Strategies - возможность наращивать мощность
//    3.1 - Cloning of instances
//    3.1 - Decomposing - microservices (through http)
//    3.1 - Splitting - services (without communication)

// В node нужно уметь создавать свои подпроцессы
// Node разрабатывалась как приложение, чтобы общаться между сервисами.

// Thread существует в рамках процесса.
// Процесс существует в рамках системы и вызывается другим процессом (кроме kernell - ядро).

// Один процесс (master) может создавать, удалять процессы.
// Child process - подроцесс - создан главным процессом.



// child_process (in Node)

// spawn
// child_process.spawn - обычный процесс с потоками (stdin - writeable, stdout - readable - наоборот)
// child.stdout.on('data', (data) => {
//   console.log(`child stdout: ${params}`)
// })
// 
// const child = spawn('echo $ANSWER && find', ['.', '-type', 'f'], {
//   stdio: 'inherit',
//   shell: true,
//   ...
// })

// exec
// exec('ls', (err, stdout, stderr) => {})

// fork - всегда есть child & parent
// spawn & exec - запустили и не можем контролировать
// запускаем процесс, появляется иерархия процессов, можем слать туда сообщения и получать их оттуда


// Долгоиграющие процессы можно запускать в child процессах
// Породим процесс, он посчитает трудоёмкую задачу, перед своим закрытием, он вернёт результат.

// Неблокирующий процесс
// server.on('/request', (req, res) => {
//   if(req.url === '/compute') {
//     const compute = fork('./compute.js');
//     compute.send('start');
//     compute.on('message', (sum) => {
//       res.end(`Sum is ${sum}`)
//     });
//   } else {
//     res.end('Ok');
//   }
// })

// Если есть мультиядерные процессы, можно процессы
// клонировать на разные процессы
// Master & worker процессы - Round Robin:
// последовательно загружает работой workeroв (1,2,3,4,1,2,3,4)
// не смотрит на загруженность workeroв

// Cluster - дочерний
// Кластер знает, какие процессы порождающие, а какие - нет.
// cluster.isMaster
// const os = require('os');
// const cpus = os.cpus().length;
// cluster.fork();
// Cluster породит столько процессов, сколько у нас ядер
// Cluster ничего не знает о дргуих

// Messaging
// позволяет обмениваться данными между процессами


// PM2