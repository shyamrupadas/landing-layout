import style from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.about}>
        <h4>О компании</h4>
        <ul>
          <a href="#">
            <li>Партнёрская программа</li>
          </a>
          <a href="#">
            <li>Вакансии</li>
          </a>
        </ul>
      </div>
      <div>
        <h4>Меню</h4>
        <div className={style.menu}>
          <ul>
            <a href="#">
              <li>Расчёт стоимости</li>
            </a>
            <a href="#">
              <li>Услуги</li>
            </a>
            <a href="#">
              <li>Виджеты</li>
            </a>
            <a href="#">
              <li>Интеграции</li>
            </a>
            <a href="#">
              <li>Наши клиенты</li>
            </a>
          </ul>
          <ul>
            <a href="#">
              <li>Кейсы</li>
            </a>
            <a href="#">
              <li>Благодарственные письма</li>
            </a>
            <a href="#">
              <li>Сертификаты</li>
            </a>
            <a href="#">
              <li>Блог на Youtube</li>
            </a>
            <a href="#">
              <li>Вопрос / Ответ</li>
            </a>
          </ul>
        </div>
      </div>
      <div className={style.contacts}>
        <h4>Контакты</h4>
        <ul>
          <li>tel</li>
          <li>icons</li>
          <li>Москва, Путевой проезд 3с1, к 902</li>
        </ul>
        <div className={style.copyright}>
          ©WELBEX 2022. Все права защищены.
          <div className={style.privacy}>
            Политика конфиденциальности
          </div>
        </div>
      </div>
    </footer>
  )
}
