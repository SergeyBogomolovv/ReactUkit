import React from 'react'
import cl from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={cl.container}>
        <div className={cl.txt}>Мы в социальных сетях, подписывайтесь!</div>
        <a href="https://vk.com/public216005492"><img src="./pngs\png\VK_Compact_Logo.svg.png" alt="" className={[cl.img, cl.vk].join(' ')}/></a>
        <a href="https://t.me/ukit_college"><img src="./pngs\png\Telegram_logo.svg.png" alt="" className={[cl.img, cl.tg].join(' ')}/></a>
    </footer>
  )
}
