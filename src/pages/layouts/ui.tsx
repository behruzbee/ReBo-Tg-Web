import { Outlet, useNavigate } from "react-router-dom"
import { Button } from "@mantine/core"

import styles from './styles.module.scss'

const LayoutPage = () => {
    const navigate = useNavigate()

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
                    102.400 so'm
                </p>
            </div>

            <Outlet />

            <Button className={styles.buyButton} onClick={handleBuyButton}>Buyurma Berish</Button>
        </div>
    )
}

export default LayoutPage