import { Product } from '~entities/product'

import styles from './styles.module.scss'

interface IProductListProps {
    title: string,
    products: { id: string, imageUrl: string, name: string, price: number }[]
}

const ProductList = ({ title, products }: IProductListProps) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>{title}</h3>

            <div className={styles['product-list']}>
                {products.map(product => (
                    <Product key={product.id} {...product}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList