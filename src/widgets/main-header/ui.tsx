import { NavLink } from "react-router-dom"
import { Button } from "@mantine/core"

import styles from './styles.module.scss'

const MainHeader = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>
        <NavLink to='/'>ReBo</NavLink>
      </h1>
      <Button bg='indigo.6'>
        <NavLink to='/basket'>
          <i className={`bx bx-basket ${styles.icon}`}></i>
        </NavLink>
      </Button>
    </div>
  )
}

export default MainHeader