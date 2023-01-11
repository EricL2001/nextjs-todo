import AddNewTodo from "./add-new-todo";
import ToDoList from "./todo-list";
import styles from '/styles/Home.module.css';


//import component layout with add new todo and todo list items
export default function Page () {
    return (
        <div className={styles.container}>
            <AddNewTodo />
            <ToDoList />
        </div>
    );
};