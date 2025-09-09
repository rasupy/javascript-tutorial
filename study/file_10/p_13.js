// { タイトル, 優先順位, 完了か否か }
// 優先順位 (priority) は 1 : 低, 2 : 中, 3 : 高
const todos = [
  { title: "掃除", priority: 2, completed: false },
  { title: "買い物", priority: 3, completed: true },
  { title: "散歩", priority: 1, completed: false },
  { title: "料理", priority: 2, completed: true },
  { title: "洗濯", priority: 1, completed: false },
  { title: "勉強", priority: 3, completed: false },
];

// 完了しているタスクの場合、{タイトル}は完了!と表示する
// 完了していないタスクの場合、{タイトル}をやらないと！と表示する
todos.forEach((todo) => {
  if (todo.completed) {
    console.log(`${todo.title}は完了!`);
  } else {
    console.log(`${todo.title}をやらないと！`);
  }
});

// 完了していないタスクを抽出して、新しい配列(notCompleted)を作成する
const notCompleted = todos.filter((todo) => !todo.completed);
console.log(notCompleted);

// notCompletedを優先順位が高い順にソートする
notCompleted.sort((a, b) => b.priority - a.priority);
console.log(notCompleted);

// todosを引数とする関数(printTodos)を作成して、関数(printTodos)の引数に完了していないタスク(notCompleted)を渡して実行する
const printTodos = (todos) => {
  todos.forEach((todo) => {
    console.log(`${todo.title} - 優先度: ${todo.priority}`);
  });
};
printTodos(notCompleted);
