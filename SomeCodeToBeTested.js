function sum(a, b) {
  return a + b;
}

function fetchData(callback) {
  setTimeout(() => {
    callback("data");
  }, 1000);
}

function fetchPromiseData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data");
    }, 1000);
  });
}



module.exports = { sum, fetchData, fetchPromiseData };
