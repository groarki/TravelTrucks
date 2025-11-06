"use client"

import css from "./SideComponent.module.css";
import { useCampersStore } from "@/lib/store/useCampersStore";
import { useEffect } from "react";

const SideComponents = () => {
  const { setFilters, resetFilters } = useCampersStore();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetFilters();

    const formData = new FormData(e.currentTarget);

    const filters = Object.fromEntries(formData.entries());
    console.log(filters);
    setFilters(filters);
}

  useEffect(() => {
    resetFilters();
  }, [resetFilters]);

  return (
    <form onSubmit={handleSearch}>
      <div className={css.sideContainer}>
        <div className={css.inputWrapper}>
          <label htmlFor="city" className="p-gray">Location</label>
          <div className={css.inputContainer}>
            <svg className={css.inputIcon}>
              <use href="/sprite.svg#icon-map"></use>
            </svg>
            <input id="city" name="location" className={`${css.input} p-gray`} type="text" placeholder="City"  />
          </div>
        </div>
        <div className={css.filterWrapper}>
          <p className="p-text">Filters</p>
          <div>
            <h3>Vehicle equipment</h3>
            <div className={css.equipment}>
              <label className={css.filters}>
                <input type="checkbox" name="AC" value="true" className={css.hiddenCheck } />
                <svg className={css.filterIcon} width="32" height="32">
                  <use href="/sprite.svg#icon-wind"></use>
                </svg>
                <p className="p-main-bold">AC</p>
              </label>
              <label className={css.filters}>
                <input type="checkbox" name="transmission" value="automatic"  className={css.hiddenCheck }/>
                <svg className={css.filterIcon} width="32" height="32">
                  <use href="/sprite.svg#icon-diagram"></use>
                </svg>
                <p className="p-main-bold">Automatic</p>
              </label>
              <label className={css.filters}>
                <input type="checkbox" name="kitchen" value="true" className={css.hiddenCheck } />
                <svg className={css.filterIcon} width="32" height="32">
                  <use href="/sprite.svg#icon-cup-hot"></use>
                </svg>
                <p className="p-main-bold">Kitchen</p>
              </label>
              <label className={css.filters}>
                <input type="checkbox" name="TV"value="true"  className={css.hiddenCheck } />
                <svg className={css.filterIcon} width="32" height="32">
                  <use href="/sprite.svg#icon-tv"></use>
                </svg>
                <p className="p-main-bold">TV</p>
              </label>
              <label className={css.filters}>
                <input type="checkbox" name="bathroom" value="true"  className={css.hiddenCheck }/>
                <svg className={css.filterIcon} width="31" height="32">
                  <use href="/sprite.svg#icon-shower"></use>
                </svg>
                <p className="p-main-bold">Bathroom</p>
              </label>
            </div>
          </div>
        </div>
        <div className={css.typeWrapper}>
          <h3>Vehicle Type</h3>
          <div className={css.vanTypes}>
            <label className={css.types}>
              <input type="radio" name="form" value="van" className={css.hiddenCheck }/>
              <svg width="32" height="32">
                <use href="/sprite.svg#icon-grid1"></use>
              </svg>
              <p className="p-main-bold">Van</p>
            </label>
            <label className={css.types}>
              <input type="radio" name="form" value="fullyIntegrated" className={css.hiddenCheck }/>
              <div>
                <svg width="32" height="32">
                  <use href="/sprite.svg#icon-grid2"></use>
                </svg>
              </div>
              <p className="p-main-bold">Fully Integrated</p>
            </label>
            <label className={css.types}>
              <input type="radio" name="form" value="alcove"className={css.hiddenCheck }/>
              <svg width="32" height="32">
                <use href="/sprite.svg#icon-grid3"></use>
              </svg>
              <p className="p-main-bold">Alcove</p>
            </label>
          </div>
        </div>
        <button className='btn' type="submit">Search</button>
      </div>
    </form>
  );
}

export default SideComponents