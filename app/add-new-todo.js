"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from '/styles/Home.module.css';


// event handler function to add new todo items to list
async function addToDo(name, refresh) {
    await fetch(`/api/todo/add`, {
        method: 'POST',
        body: JSON.stringify({ name }),
    });

    refresh();
}


//add new todo list item...renders on page.js
export default function AddNewTodo() {
    const router = useRouter();
    let [name, setName] = useState("");
    return (
        <div className>
            <input className={styles.input_box} type="text" placeholder="Enter new task here" onChange={(e) => setName(e.target.value)} value={name} />
            <button className={styles.add_button} onClick={async () => {await addToDo(name, router.refresh); setName("");
            }}>Add</button>
        </div>
    );
}