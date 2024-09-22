import { Image } from '@mantine/core'

import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'

interface IMiniCardsProps {
    categories: { imageUrl: string, name: string, path: string }[]
}

const MiniCards = ({ categories }: IMiniCardsProps) => {
    const navigate = useNavigate()

    return (
        <div className={styles.wrapper} >
            {categories.map(category => (
                <div key={category.name} className={styles.item} onClick={() => navigate(category.path)}>
                    <Image
                        src={category.imageUrl}
                        alt={category.name}
                        w='100%'
                        radius='8px'
                    />
                    <p className={styles.text}>{category.name}</p>
                </div>
            ))}
        </div>
    )
}

export default MiniCards