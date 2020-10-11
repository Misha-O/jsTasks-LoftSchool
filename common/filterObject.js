const workers = [
  { name: "John", salary: 500 },
  { name: "Jill", salary: 800 },
  { name: "Mike", salary: 1600 },
  { name: "Sam", salary: 1800 },
];

let getWorthyWorkers = (workersArr) => {
  const wellPaidWorkers = [];

  workersArr.forEach((singleWorker) => {
    if (singleWorker.salary > 1000) {
      wellPaidWorkers.push(singleWorker.name);
    }
  });

  return wellPaidWorkers;
};

console.log(getWorthyWorkers(workers));
