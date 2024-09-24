import { Button } from "@mantine/core"
import { useNavigate, useParams } from "react-router-dom";

import { Carousel } from "~widgets/carousel";
import { productsCategory } from "~shared/constants";
import { useBasketStore } from "~shared/store";

import styles from './styles.module.scss';

const ProductPage = () => {
  const navigate = useNavigate()
  const { productId } = useParams<{ productId: string }>()
  const addToBasket = useBasketStore(({ addProduct }) => addProduct)

  const handleBackButton = () => {
    navigate(-1)
  }

  const handleBuyButton = () => {
    navigate('/basket')
    addToBasket(product)
  }

  const product = productsCategory.flatMap(category => category.products).find(({ id }) => id === productId) || { id: '1', imageUrl: '', name: '', price: 22 }

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Carousel CarouselSlideProps={{ h: '50vh' }} slides={[{ imageUrl: product.imageUrl, alt: product.name }]} />
        <Button className={styles.backButton} onClick={handleBackButton} variant="white" w={40} h={40} p={1} radius={100}>
          <i className='bx bx-arrow-back'></i>
        </Button>
        <Button className={styles.heartButton} variant="white" w={40} h={40} p={1} radius={100}>
          <i className='bx bx-heart' ></i>
        </Button>
      </div>

      <div className={styles.productContent}>
        <div className={styles.priceWrapper}>
          <p className={styles.price}>{String(product.price).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm</p>
          <p className={styles.model}>{product.name}</p>
        </div>

        <div className={styles.productDesc}>
          <h6 className={styles.subtitle}>Tavsif</h6>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nulla culpa praesentium sapiente dicta eius dignissimos ea rem corrupti et.
          </p>
        </div>
      </div>

      <Button className={styles.buyButton} onClick={handleBuyButton}>Korzinkaga qo'shish <i className='bx bx-cart-add' ></i></Button>
    </div>
  )
}

export default ProductPage