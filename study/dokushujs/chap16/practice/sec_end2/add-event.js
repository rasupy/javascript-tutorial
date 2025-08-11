// 要素（element）の特定のイベント（eventType）に対してアクション（action）を登録する関数
export default function (element, eventType, action) {
  element.addEventListener(eventType, (event) => {
    action(event);
  });
}
