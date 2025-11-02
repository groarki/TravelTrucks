import css from "./SideComponent.module.css";

const SideComponents = () => {
  return (
    <div className={css.sideContainer}>
        <div className={css.inputWrapper}>
          <label htmlFor="city" className="p-gray">Location</label>
          <div className={css.inputContainer}>
            <svg className={css.inputIcon}>
              <use href="/sprite.svg#icon-map"></use>
            </svg>
            <input id="city" className={`${css.input} p-gray`} type="text" placeholder="City" />
          </div>
        </div>
          <div className={css.filterWrapper}>
              <p className="p-text">Filters</p>
              <div>
                  <h3>Vehicle equipment</h3>
                  <div className={css.equipment}>
                      <div className={css.filters}>
                        <svg className={css.filterIcon} width="32" height="32">
                         <use href="/sprite.svg#icon-wind"></use>
                          </svg>
                          <p className="p-main-bold">AC</p> 
                      </div>
                      <div className={css.filters}>
                        <svg className={css.filterIcon} width="32" height="32">
                         <use href="/sprite.svg#icon-diagram"></use>
                        </svg>
                          <p className="p-main-bold">Automatic</p>
                      </div>
                      <div className={css.filters}>
                        <svg className={css.filterIcon} width="32" height="32">
                         <use href="/sprite.svg#icon-cup-hot"></use>
                          </svg>
                          <p className="p-main-bold">Kitchen</p>
                      </div>
                      <div className={css.filters}>
                        <svg className={css.filterIcon} width="32" height="32">
                         <use href="/sprite.svg#icon-tv"></use>
                          </svg>
                          <p className="p-main-bold">TV</p>
                      </div>
                      <div className={css.filters}>
                        <svg className={css.filterIcon} width="31" height="32">
                         <use href="/sprite.svg#icon-shower"></use>
                          </svg>
                          <p className="p-main-bold">Bathroom</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className={css.typeWrapper}>
              <h3>Vehicle Type</h3>
              <div className={css.vanTypes}>
                  <div className={css.types}> 
                    <svg width="32" height="32">
                   <use href="/sprite.svg#icon-grid1"></use>
                      </svg>
                      <p className="p-main-bold">Van</p>
                  </div>
                  <div className={css.types}> 
                    <svg width="20" height="20">
                   <use href="/sprite.svg#icon-grid2"></use>
                      </svg>
                      <p className="p-main-bold">Fully Integrated</p>
                  </div>
                  <div className={css.types}> 
                    <svg width="32" height="32">
                   <use href="/sprite.svg#icon-grid3"></use>
                      </svg>
                      <p className="p-main-bold">Alcove</p>
                  </div>
              </div>
          </div>
        <button className='btn'>Search</button>
      </div>
  )
}

export default SideComponents