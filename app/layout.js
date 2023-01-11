//main layout for the entire app
import styles from '/styles/Home.module.css';


export default function RootLayout({ children }) {
  return (
    <html className={styles.html}>
      <head />
        <body className={styles.body}> 
          <h1 className={styles.title}>Next.js Todo App</h1>
          {children}
          <footer className={styles.footer}>Eric • Next.js Todo App • 2023</footer>
        </body>
    </html>
  )
}
