import style from './Header.module.scss'

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <a href="/" className={style.logoImg}>
          <img src="/logo_velbex_1.svg" alt="logo" />
          <span className={style.rightLogo}>
          <img src="/logo_velbex_2.svg" alt="velbex" />
        </span>
        </a>
        <div className={style.logoText}>крупный интегратор CRM в&nbsp;Росcии и&nbsp;ещё&nbsp;8&nbsp;странах</div>
      </div>
      <menu>
        <ul className={style.menu}>
          <a href="#"><li className={style.item}>Услуги</li></a>
          <a href="#"><li className={style.item}>Виджеты</li></a>
          <a href="#"><li className={style.item}>Интеграция</li></a>
          <a href="#"><li className={style.item}>Кейсы</li></a>
          <a href="#"><li className={style.item}>Сертификаты</li></a>
        </ul>
      </menu>
      <div className={style.contacts}>
        <a href="tel:+75555555555">+7&nbsp;555&nbsp;555-55-55</a>
        <a href="#"><img className={style.item} src="/telegram.svg" alt="telegram" /></a>
        <a href="#"><img className={style.item} src="/phone.svg" alt="phone" /></a>
        <a href="#"><img className={style.item} src="/whatsapp.svg" alt="whatsapp" /></a>
      </div>
    </header>
  )
}
