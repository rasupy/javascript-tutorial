const menu = new Map([
  ["ラーメン", 500],
  ["チャーハン", 600],
  ["餃子", 300],
]);

console.log(menu);

menu.set("唐揚げ", 400);
console.log(menu);

console.log(menu.get("チャーハン"));

console.log(menu.has("唐揚げ"));
menu.delete("餃子");

console.log(menu);
