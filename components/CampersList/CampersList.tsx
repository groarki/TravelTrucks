import css from "./CapmersList.module.css"
import { Camper } from '@/lib/types/types'
import Image from 'next/image'

interface CampersProps {
  items: Camper[],
}

const CampersList = ({items}: CampersProps) => {
  return (
    <div className={css.listWrapper}>
      <ul className={css.camperList}>
        {items && items.map((item) => {
          return (
            <li key={item.id} className={css.card}>
              <div className={css.imageWrapper}>
                <Image
                  className={css.image}
                  width={292}
                  height={320}
                  src={item.gallery?.[0].original}
                  alt={item.name} />
              </div>
              <div className={css.right}>
                <div>
                  <div className={css.name}>
                    <h2 className='h2-black'>{item.name}</h2>
                    <div className={css.price}>
                      <h2 className="h2-black">${item.price}</h2>
                      <svg width="25" height="24">
                        <use href="/sprite.svg#icon-heart-black"></use>
                      </svg>
                    </div>
                  </div>
                  <div className={css.secBlock}>
                    <div className={css.reviews}>
                      <svg  width="16" height="16">
                       <use href="/sprite.svg#icon-star-pressed"></use>
                      </svg>
                      <p className='p-main'>{item.rating}({item.reviews.length} Reviews)</p>
                    </div>
                    <div className={css.city}>
                      <svg width="16" height="16">
                       <use href="/sprite.svg#icon-map-main"></use>
                      </svg>
                      <p className='p-main'>{item.location}</p>
                    </div>
                  </div>
                </div>
                <p className='p-text p-shorted'>{item.description}</p>
                <div className={css.category}></div>
                <button className='btn'>Show more</button>
              </div>
            </li>)
        }
        )};
      </ul>
    </div>
  );
}

export default CampersList