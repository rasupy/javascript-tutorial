// スプレッド演算子を使ってオブジェクトを作成
const obj1 = { prop1: 10, prop2: 20 };
const obj2 = { prop3: 30, prop4: 40 };

console.log({ ...obj1, ...obj2 });
// { prop1: 10, prop2: 20, prop3: 30, prop4: 40 }

console.log({ prop0: 0, ...obj2, prop5: 50 });
// { prop0: 0, prop3: 30, prop4: 40, prop5: 50 }

console.log({ prop1: 0, ...obj1 });
// { prop1: 10, prop2: 20 }

console.log({ ...obj1, ...obj2 });
// { prop1: 10, prop2: 20, prop3: 30, prop4: 40 }
