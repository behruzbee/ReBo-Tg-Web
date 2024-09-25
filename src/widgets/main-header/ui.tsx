import { NavLink } from "react-router-dom"
import { Button } from "@mantine/core"

import styles from './styles.module.scss'
import { useBasketStore } from "~shared/store"
import { useMemo } from "react"

const MainHeader = () => {
  const products = useBasketStore(({ products }) => products)
  const productCount = useMemo(() => {
    if (!products.length) {
      return 0
    }
    return products.reduce((prev, curr) => {
      return prev + curr.count
    }, 0)
  }, [products])

  return (
    <div className={styles.header}>
      <h1 className={styles.logo}>
        <NavLink to='/'>ReBo</NavLink>
      </h1>
      <Button bg='indigo.6'>
        <NavLink to='/basket'>
          <i className={`bx bx-basket ${styles.icon}`}></i>
        </NavLink>
        <p>{productCount}</p>
      </Button>
    </div>
  )
}

export default MainHeader