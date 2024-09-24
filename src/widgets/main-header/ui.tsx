import { NavLink } from "react-router-dom"
import { Button } from "@mantine/core"

import styles from './styles.module.scss'
import { useBasketStore } from "~shared/store"

const MainHeader = () => {
  const products = useBasketStore(({ products }) => products)

  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>
        <NavLink to='/'>ReBo</NavLink>
      </h1>
      <Button bg='indigo.6'>
        <NavLink to='/basket'>
          <i className={`bx bx-basket ${styles.icon}`}></i>
        </NavLink>
        {products.length ? <p>{products.length}</p> : null}
      </Button>
    </div>
  )
}

export default MainHeader