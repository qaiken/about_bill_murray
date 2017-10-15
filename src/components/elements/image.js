import React from 'react'
import Radium from 'radium'

import mediaQueries from '../../media_queries'

const style = {
  base: {
    flex: '0 0 20%',
    margin: '0 0 10px 0',
    padding: '0 5px',
    textAlign: 'center',
    [mediaQueries.tablet]: {
      flex: '0 0 33.3333333%'
    },
    [mediaQueries.mobile]: {
      flex: '0 0 50%'
    }
  },
  img: {
    maxWidth: '100%',
    cursor: 'pointer'
  }
}

const Image = ({src, onClick}) => (
  <div style={style.base}>
    <img src={src} onClick={onClick} style={style.img} />
  </div>
)

export default Radium(Image)
