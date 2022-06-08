import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
 ・key：Todoを特定するID（String）
 ・text：Todoの内容（String）
 ・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import { getKey } from "../lib/util";

function Todo() {
  const [key, setKey] = useState(1);
  const [items, putItems] = React.useState([
    /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: true },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);
  const handleClick = (item) => {
    putItems([...items.map(i => {
      if (i.key == item.key) {
        i.done = !i.done
        return i
      } else return i
    })])
  }
  const handleEnter = (value) => {
    putItems([...items, { key: getKey(), text: value, done: false }])
  }
  const handleFilter = (key) => {
    setKey(key)
  }
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Filter handleFilter={handleFilter} key={key} />
      <Input handleEnter={handleEnter} />
      {items.filter(i => key == 1 || key == 2 && i.done == false || key == 3 && i.done == true).map(item => (
        <TodoItem key={item.key} item={item} handleClick={handleClick} />
      ))}
      <div className="panel-block">
        {items.filter(i => key == 1 || key == 2 && i.done == false || key == 3 && i.done == true).length} items
      </div>
    </div>
  );
}

export default Todo;
© 2022 GitHub, Inc.
Terms
Privacy
