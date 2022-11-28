import style from './Main.module.scss'

export const Main = () => {
  return (
    <main className={style.main}>
      <header className={style.header}>
        <h1>
          Зарабатывайте<br />больше
          <strong>с&nbsp;WELBEX</strong>
        </h1>
        <h2>
          Развиваем и&nbsp;контролируем<br />
          продажи за&nbsp;вас
        </h2>
      </header>
      <div>
        <h3>
          Вместе с&nbsp;бесплатной консультацией мы&nbsp;дарим:
        </h3>
        <ul>
          <li>
            <h4>
              Header
            </h4>
            <div>
              Content content content content
            </div>
          </li>
          <li>
            <h4>
              Header
            </h4>
            <div>
              Content content content content
            </div>
          </li>
          <li>
            <h4>
              Header
            </h4>
            <div>
              Content content content content
            </div>
          </li>
          <li>
            <h4>
              Header
            </h4>
            <div>
              Content content content content
            </div>
          </li>
        </ul>
      </div>
    </main>
  )
}
