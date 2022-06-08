/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({ item,handleClick }) {
  return (
    <label className={`panel-block ${item.done ? 'selected' : ''}`}>
      <input type="checkbox" checked={item.done}  onClick={()=> handleClick(item)}/>
      {item.text}
    </label>
  );
}

export default TodoItem;