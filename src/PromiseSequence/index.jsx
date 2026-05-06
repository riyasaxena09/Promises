import { useEffect } from "react";

const Sequence = () => {

  useEffect(() => {
    const p1 = () => {
      return new Promise(res => setTimeout(() => {
        res("Promise 1 resolved");
      }, 2000));
    };

    const p2 = () => {
      return new Promise(res => setTimeout(() => {
        res("Promise 2 resolved");
      }, 1000));
    };

    const p3 = () => {
      return new Promise(res => setTimeout(() => {
        res("Promise 3 resolved");
      }, 3000));
    };

    p1()
      .then(res => {
        console.log(res);
        return p2();
      })
      .then(res => {
        console.log(res);
        return p3();
      })
      .then(res => {
        console.log(res);
      })
      .catch(console.log);

  }, []);

  return <h1>Promise Sequence</h1>;
};

export default Sequence;