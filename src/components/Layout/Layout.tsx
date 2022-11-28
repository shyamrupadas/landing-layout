import { FC, ReactNode } from 'react';
import style from './Layout.module.scss'
import { Background } from './Background';

type LayoutProps = {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={style.mainLayout}>
      <Background>
        {children}
      </Background>
    </div>
  )
}
