import TodoItem from './../TodoItem/TodoItem';

const TodoList = ({todoList, setKey, data, setData, status}) => {
    return (
        <div>
               {
                todoList.map(item =>{
                    return <TodoItem  status={status} setKey={setKey} item={item} data={data} setData={setData} />
                })
            }
        </div>
    );
}

export default TodoList;
