import React from 'react'
import Radium from 'radium'

import mediaQueries from '../../media_queries'

const style = {
  base: {
    display: 'flex',
    flex: '0 0 33.3333333%',
    padding: '20px 10px',
    [mediaQueries.tablet]: {
      display: 'block'
    }
  },
  imageContainer: {
    flex: 1,
    marginRight: 10,
    [mediaQueries.tablet]: {
      marginBottom: 10
    }
  },
  body: {
    flex: 1
  },
  image: {
    width: '100%'
  }
}

const Profile = ({imageSrc, body}) => (
  <div style={style.base}>
    <div style={style.imageContainer}>
      <img src={imageSrc} style={style.image} />
    </div>
    <div style={style.body}>
      {body}
    </div>
  </div>
)

export default Radium(Profile)
