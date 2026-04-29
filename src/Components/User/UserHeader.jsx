import UserHeaderNav from "./UserHeaderNav"
import styles from './UserHeader.module.css'
import { useState } from "react"

const UserHeader = () => {
  const [title, setTitle] = useState('')

  return (
    <header className={styles.header}>
      <h1 className="title">Titulo</h1>
      <UserHeaderNav/>
    </header>
  )
}

export default UserHeader
