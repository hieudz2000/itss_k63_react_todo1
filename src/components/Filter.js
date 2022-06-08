function Filter( {handleFilter,key=1} ) {
  return (
    <div className="panel-tabs">
      <a onClick={()=>handleFilter(1)} className={`${key == 1 ? 'is-active' : ''}`}>全て</a>
      <a onClick={()=>handleFilter(2)} className={`${key == 2 ? 'is-active' : ''}`}>未完了</a>
      <a onClick={()=>handleFilter(3)} className={`${key == 3 ? 'is-active' : ''}`}>完了済み</a>
    </div>
  );
}

export default Filter