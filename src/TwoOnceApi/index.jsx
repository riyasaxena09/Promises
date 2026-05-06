const TwoOnceApi = ()=>{

async function runWithLimit(tasks, limit) {
  let i = 0;
  const results = [];

async function worker() {
    while (i < tasks.length) {
      const currentIndex = i++;
      results[currentIndex] = await tasks[currentIndex]();
    }
  }

  const workers = Array(limit).fill(null).map(worker);
    
  await Promise.all(workers);

  return results;
}


const tasks = Array.from({ length: 10 }, (_, i) => {
  return () =>
    new Promise(res => {
      console.log("Start task", i);
      setTimeout(() => {
        console.log("End task", i);
        res(i);
      }, 1000);
    });
});

console.log(tasks);

runWithLimit(tasks, 2).then(res => {
  console.log("All done:", res);
});

    return(
        <>
        <h1>Two Once API</h1>
        </>
    )
}

export default TwoOnceApi;