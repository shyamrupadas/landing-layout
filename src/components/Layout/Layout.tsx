import { FC, ReactNode } from 'react';
import style from './Layout.module.scss'

type LayoutProps = {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={style.mainLayout}>
      {children}
    </div>
  )
}
