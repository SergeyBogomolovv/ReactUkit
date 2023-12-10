import React from 'react'
import cl from './legend.module.scss'

export default function Legend() {
  return (
    <div className={cl.legendContainer}>
        <img src='./pngs\threekits.jpg' className={[cl.legendImg, 'siteImage'].join(' ')}/>
        <div className={cl.legend}>
            Наверное все слышали легенду о том, что земля держится на трех китах и черепахе. Так вот, в нашем колледже присутствует аналогия этой легенде, но тут она уже ею не является, 
            потому что это сущая правда. Наш колледж держиться на трех китах - Глускер, Гнутов и Гуламадзода. Без них это была бы самая обычная унылая шарага, ничем не отличающаяся от 
            других. 
        </div>
    </div>
    
  )
}
