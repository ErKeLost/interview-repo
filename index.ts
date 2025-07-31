Promise.resolve()
  .then(() => {
    console.log("then1");
    return Promise.resolve("then1 resolve");
  })
  .then((res) => {
    console.log("then2:", res);
    return Promise.reject("then2 reject");
  })
  .catch((err) => {
    console.log("catch1:", err);
    return "catch1 return";
  })
  .then((res) => {
    console.log("then3:", res);
  });

setTimeout(() => console.log("timeout1"), 0);

Promise.resolve()
  .then(() => {
    console.log("promise1");
    setTimeout(() => console.log("timeout in promise"), 0);
  })
  .then(() => {
    console.log("promise2");
  });

console.log("sync end");





























































// sync end
// then1
// promise1
// promise2
// then2: then1 resolve
// catch1: then2 reject
// then3: catch1 return
// timeout1
// timeout in promise
