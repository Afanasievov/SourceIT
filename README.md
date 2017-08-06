# SourceIT Node.js course

## Tasks:

#### 1. ForecastAfterSecond

By click on Get Weather button, wait 1 second, then make a request to a weather service and show conditions for Kharkov. May need cors to be enabled.

#### 2. EventEmitterFSClass

A new class inherited from EventEmitter and works with file system. Can read and write files.

#### 3. ClientServerWeather

After receiving request servrer make request to a weather service for Kharkov's forecast and then log the result.

#### 4. ServerFileUploadCopyright

Server receives POST request with html-file (for_uploading.html), write in a new file (uploaded.html) and returns content adding a tag with copyright in <body>.

#### 5. Middlewars

Server receives POST request, read and parse body and headers of the request and send them back in the response.

#### 6. FakeCRUD

An express server that performs fake CRUD operations (post, get, update, delete).

#### 7. FsStdInOut

Run:

```$ node FsStdInOut/readFile.js < FsStdInOut/lorem ```

Read data from file (lorem) and write it to the terminal output.

#### 8. FakeRequests

1. Make a function (url, cb) thack does fake request and return response in cb.
2. Run 3 requests. Show result of requests at the end of execution.
    1. In parallel:
        - using callbacks
        - using promises
    2. Serially:
          - using callbacks
          - using promises

#### 9. PromisifyFunctions

Promisify setTimeout and readFile.