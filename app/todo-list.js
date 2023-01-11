import Todo from "./todo";
import styles from '/styles/Home.module.css';

//get todo list from API
const getTodos = async () => {
    const todos = await fetch("http://localhost:3001/api/todo/list");
    return todos.json();
}

//map specific items we get from API call and add to list.  render via page.js
export default async function ToDoList() {
    const { todos } = await getTodos();
  
    return (
    <div className={styles.list_container}>
        <ul className={styles.list}>
         {todos.map((t) => {
            return (
                <li key={t.id} className={styles.list_item}>
                    <Todo todo={t}/>
                </li>
            );
         })}
        </ul>
    </div>
    );
}