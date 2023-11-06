import React from 'react'

export default function Card3D(props) {
  const classes = "cart center " + props.class
  return (
    <div className={classes}>

        <div className="front">
            <img src={props.title} alt=""/>
        </div>

        <div className="back">
          <div className="backContent contentCenter">
            <h2>{props.name}</h2>
          </div>
        </div>
      </div>
  )
}
