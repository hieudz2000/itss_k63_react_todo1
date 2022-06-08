import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input( {handleEnter} ) {
  const [value,setValue] = useState('')
  const handle = (e)=>{
    if(e.key == "Enter"){
      handleEnter(value)
      setValue('')
    }
  }
  return (
    <div className="panel-block">
      <input type="text" className='input' value={value} onKeyDown={handle} onChange={(e)=>{setValue(e.target.value)}}/>
    </div>
  );
}

export default Input;
