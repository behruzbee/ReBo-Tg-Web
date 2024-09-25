import { Outlet, useNavigate } from "react-router-dom"
import { Button } from "@mantine/core"

import styles from './styles.module.scss'
import { useBasketStore } from "~shared/store"
import { useMemo } from "react"

const LayoutPage = () => {
    const navigate = useNavigate()
    const products = useBasketStore(({ products }) => products)

    const totalPrice = useMemo(() => {
        if (!products.length) {
            return 0;
        }
        return products.reduce((prev, curr) => {
            return prev + (curr.price * curr.count);
        }, 0);
    }, [products]);

    const handleBackButton = () => {
        navigate('/')
    }

    const handleBuyButton = () => {
        navigate('/')
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.nav}>
                <Button className={styles.button} onClick={handleBackButton}>
                    <i className='bx bx-arrow-back' ></i>
                </Button>

                <p className={styles.totalSum}>
                    <i className='bx bx-bitcoin'></i>
                    {String(totalPrice).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm
                </p>
            </div>

            <Outlet />

            <Button className={styles.buyButton} onClick={handleBuyButton}>Buyurma Berish</Button>
        </div>
    )
}

export default LayoutPage