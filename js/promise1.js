// Promise 是一個表示非同步運算的最終完成或失敗的物件。
// 1. Promise 是一個物件 new Promise()
//    new Promise(executor)
//    executor: function(resolve, reject) {}
// 2. 執行非同步工作
// 3. 最終完成或失敗
//    完成 -> 呼叫 resolve
//    失敗 -> 呼叫 reject

let doWorkPromise = function (job, timer) {
    // 1. 物件 -> new
    return new Promise((resolve, reject) => {
      // 2. 執行非同步工作
      setTimeout(() => {
        let now = new Date();
        resolve(`完成工作 ${job} at ${now.toISOString()}`);
      }, timer);
    });
  };
  
  let now = new Date();
  console.log(`工作開始 at ${now.toISOString()}`);
  let brushPromise = doWorkPromise('刷牙', 3000);
  brushPromise
    .then((data) => {
      console.log(data);
      return doWorkPromise('吃早餐', 5000);
    })
    .then((data) => {
      console.log(data);
      return doWorkPromise('寫功課', 3000);
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error('發生錯誤', err);
    });

function brushTeeth() {
  // 在 3 秒後執行 "刷牙" 的動作
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Brushing teeth');
      resolve();
    }, 3000);
  });
}

function eatBreakfast() {
  // 在 5 秒後執行 "吃早餐" 的動作
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Eating breakfast');
      resolve();
    }, 5000);
  });
}

function doHomework() {
  // 在 3 秒後執行 "寫功課" 的動作
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Doing homework');
      resolve();
    }, 3000);
  });
}
console.log('start');
brushTeeth()
  .then(() => eatBreakfast())
  .then(() => doHomework());