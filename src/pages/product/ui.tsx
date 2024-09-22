import { Button } from "@mantine/core"

import { Carousel } from "~widgets/carousel";

import styles from './styles.module.scss';
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate()

  const handleBackButton = () => {
    navigate(-1)
  }

  const handleBuyButton = () => {
    navigate('/basket')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Carousel />
        <Button className={styles.backButton} onClick={handleBackButton} variant="white" w={40} h={40} p={1} radius={100}>
          <i className='bx bx-arrow-back'></i>
        </Button>
        <Button className={styles.heartButton} variant="white" w={40} h={40} p={1} radius={100}>
          <i className='bx bx-heart' ></i>
        </Button>
      </div>

      <div className={styles.productContent}>
        <div className={styles.priceWrapper}>
          <p className={styles.price}>22 000 so'm</p>
          <p className={styles.model}>SAMSUNG</p>
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