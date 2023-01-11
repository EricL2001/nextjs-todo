"use client";
import styles from '/styles/Home.module.css';
import { useRouter } from "next/navigation";


//function to update the todo list done in API data
async function update(id, isDone, refresh) {
    await fetch(`/api/todo/update`, {
        method: 'POST',
        body: JSON.stringify({ id, isDone }),
    });

    refresh();
}


//function to delete items in list
async function deleteListItem (id, refresh) {
    await fetch(`/api/todo/delete?id=${id}`, {
        method: 'DELETE',
    });

    refresh();
}


// function to handle checkbox change and delete events
export default function Todo({ todo }) {
    const router = useRouter();

    return (
      <>
        <input 
          type="checkbox" 
          onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
          checked={todo.isDone}
          />
        <span>{todo.name}</span>
        <button className={styles.buttons} onClick={(e) => deleteListItem(todo.id, router.refresh)}>
            Delete</button>
        </>
    );
}