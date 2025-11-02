"use client"
import { useRouter } from "next/navigation";
import css from "./page.module.css";

const HomePage = () => {
  const router = useRouter();

  return (
    <div className={css.homeCont}>
      <div className={css.titleCont}>
        <div className={css.textCont}>
          <h1>Campers of your dreams</h1>
          <h2>You can find everything you want in our catalog</h2>
        </div>
        <button className={`${css.homeBtn} btn p-white`} onClick={() => router.push("/catalog")}>View Now</button>
      </div>
    </div>
  )
}

export default HomePage