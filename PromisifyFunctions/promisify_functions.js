/*
  Promisify functions
*/

const delay = (ms) => {
    return new Promise((res, rej) => {
        setTimeout(res, ms);
    });
};

const readFileAsync = (path) => {
    return new Promise((res, rej) => {
        fs.readFile(path, (err, data) => {
            return err ? rej(err) : res(data);
        })
    })
}
