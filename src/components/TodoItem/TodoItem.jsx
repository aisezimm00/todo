import CorrectItem from "./CorrectItem";

const TodoItem = ({item, setKey, data, setData, status}) => {
  return (
    <div className="todo-item">
      {
        item.correct
        ? <CorrectItem item={item} setKey={setKey} data={data} setData={setData} />
        : <>
<div className="todo-item-left">
        <button
        disabled={status === 'deleted'}
         className="todo-item-complete-btn" onClick={()=>{
          setKey('completed', item.id)
        }}>
          {
            item.completed ? '+' : ''
          }
        </button>
        <p className="todo-item-text" style={
          item.important
          ? {color: 'green'}
          : {}
        }>{item.text}</p>
      </div>

      <div className="todo-item-right">
        {
          status === 'deleted'
          ? ''
          : <>
          <button className="todo-item-right-btn" onClick={()=>{
          setKey('correct', item.id)
        }}>correct</button>
        <button className="todo-item-right-btn" onClick={()=>{
          setKey('important', item.id)
        }}>important</button>
          </>
          
        }
        
        <button className="todo-item-right-btn" onClick={()=>{
          setKey('deleted', item.id)
        }}>{
          status === 'deleted'
          ? 'restore'
          : 'delete'
        }</button>

{
  status === 'deleted'
  ? <button onClick={()=>{
    setData(data.filter(element =>{
      return element.id !== item.id
    }))
  }}>delete</button>
  : ''
}

      </div>
        </>
      }

    </div>
  );
};

export default TodoItem;
