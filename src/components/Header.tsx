import { Button, Flex } from '@mantine/core'
import styles from '../styles/Header.module.scss'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <Flex className={styles.header} justify='space-between' align='center'>
            <h2>
                <NavLink className={styles.logo} to='/'>
                    ReBo
                </NavLink>
            </h2>
            <NavLink to='/basket'>
                <Button variant='white' size='compact-sm'>
                    <i className={`bx bx-basket ${styles.icon}`}></i>
                </Button>
            </NavLink>
        </Flex>
    )
}

export default Header