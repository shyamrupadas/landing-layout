import style from './Header.module.scss'

export const Header = () => {
  return (
    <header className={style.main}>
      <div>
        <div className={style.logoImg}>
          <img src="/logo_velbex_1.svg" alt="velbex" />
          <span className={style.rightLogo}>
          <img src="/logo_velbex_2.svg" alt="velbex" />
        </span>
        </div>
        <div className={style.logoText}>крупный интегратор CRM в&nbsp;Росcии и&nbsp;ещё&nbsp;8&nbsp;странах</div>
      </div>
      <menu>
        <ul className={style.menu}>
          <li className={style.item}>Услуги</li>
          <li className={style.item}>Виджеты</li>
          <li className={style.item}>Интеграция</li>
          <li className={style.item}>Кейсы</li>
          <li className={style.item}>Сертификаты</li>
        </ul>
      </menu>
      <div className={style.contacts}>
        <span>+7&nbsp;555&nbsp;555-55-55</span>
        <img className={style.item} src="/telegram.svg" alt="telegram" />
        <img className={style.item} src="/phone.svg" alt="phone" />
        <img className={style.item} src="/whatsapp.svg" alt="whatsapp" />
      </div>
    </header>
  )
}
