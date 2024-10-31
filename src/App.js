import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/Todolist.jsx";
import Footer from "./components/Footer/Footer";
import './style.css';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState('all');

  const setKey = (key, id) =>{

    setData(data.map(item =>{

      if(item.id === id){
        return {
          ...item,
          [key]: !item[key],
        }
      } else{
        return{
          ...item,
          correct:false,
        }
      }
    }))
  }

  useEffect(()=>{

    switch(status){
      case 'all':{
        setTodoList(data.filter(item => !item.deleted));
        break;
      }
      case 'important':{
        setTodoList(data.filter(item => !item.deleted && item.important));
        break;
      }
      case 'completed':{
        setTodoList(data.filter(item => !item.deleted && item.completed));
        break;
      }
      case 'active':{
        setTodoList(data.filter(item => !item.deleted && !item.completed));
        break;
      }
      default:{
        setTodoList(data.filter(item => item.deleted));
      }
    }
  },[data, status])
  return (
    <div className="wrapper">

      <Form data={data} setData={setData} setStatus={setStatus} />

      <div className="wrapper-bottom">
      <TodoList setKey={setKey} todoList={todoList} data={data} setData={setData} status={status} />
      <Footer status={status} setStatus={setStatus} />
      </div>

    </div>
  );
}

export default App;
