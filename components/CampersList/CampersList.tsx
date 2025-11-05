"use client"

import { getCampers } from "@/lib/services/camperService"
import css from "./CapmersList.module.css"
import { Categories } from '@/lib/types/types'
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import Image from 'next/image'
import { useEffect, useRef, useState } from "react"


type CategoryMapType = Record<Categories, {
  icon: string
  value: (type: string | boolean) => string
}>

  const categoryMap:CategoryMapType = {
    engine: {
      icon: "/sprite.svg#icon-fuel",
      value: (type) => String(type)
    },
    AC: {
      icon: "/sprite.svg#icon-wind",
      value: () => "AC"
    },
    TV: {
        icon: "/sprite.svg#icon-tv",
        value: () => "TV",
    },
    bathroom: {
        icon: "/sprite.svg#icon-shower",
        value: () => "Bathroom",
    },
    gas: {
        icon: "/sprite.svg#icon-gas",
        value: () => "Gas",
    },
    kitchen: {
        icon: "/sprite.svg#icon-cup-hot",
        value: () => "Kitchen",
    },
    microwave: {
        icon: "/sprite.svg#icon-microwave",
        value: () => "Microwave",
    },
    radio: {
        icon: "/sprite.svg#icon-radio",
        value: () => "Radio",
    },
    refrigerator: {
        icon: "/sprite.svg#icon-fridge",
        value: () => "Refrigerator",
    },
    transmission: {
        icon: "/sprite.svg#icon-diagram",
        value: (type) => String(type),
    },
    water: {
        icon: "/sprite.svg#icon-water",
        value: () => "Water",
    },
  };

const categoryOrder:Categories[] = ["transmission",
  "engine",
  "AC",
  "bathroom",
  "kitchen",
  "TV",
  "radio",
  "refrigerator",
  "microwave",
  "gas",
  "water"];
      
const CampersList = () => {
  const [page, SetPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["campers", page],
    queryFn: () => getCampers(page),
    placeholderData: keepPreviousData, 
  });

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [page]);

  const handleLoadMore = () => {
    SetPage(page + 1);
  }

  const campers = data?.items;

  const totalPages = Math.ceil((data?.total ?? 0) / 4);

  return (
    <div ref={topRef} className={css.listWrapper}>
      <ul className={css.camperList}>
        {campers && campers.map((item) => {
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
                      <h2 className="h2-black">${item.price}.00</h2>
                      <svg width="25" height="24" >
                        <use href="/sprite.svg#icon-heart-black"></use>
                      </svg>
                    </div>
                  </div>
                  <div className={css.secBlock}>
                    <div className={css.reviews}>
                      <svg width="16" height="16">
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
                <div className={css.category}>
                  {categoryOrder.map((key) => (
                    <div className={css.categoryItem} key={key}>
                      <svg height={20} width={20} className={ ["microwave", "water", "gas"].includes(key) ? css.iconUnfilled : css.icon}>
                        <use href={categoryMap[key].icon}></use>
                      </svg>
                      <p className="p-main">{categoryMap[key].value(item[key])}</p>
                    </div>
                  ))}
                </div>
                <button className='btn'>Show more</button>
              </div>
            </li>
          )
        })}
      </ul>
      {!isLoading && page < totalPages && <button onClick={handleLoadMore} className="btn-loadmore" disabled={isLoading}>Load More</button>}
    </div>
  )
}

export default CampersList
