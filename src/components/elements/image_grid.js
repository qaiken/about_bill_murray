import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import {flip, path} from 'ramda'
import {map} from 'lodash'

import Image from './image'

const style = {
  display: 'flex',
  flexWrap: 'wrap'
}

const ImageGrid = ({images}) => (
  <div style={style}>
    {
      flip(map)(
        (image, idx) => (
          <Image
            key={idx}
            src={path(['src'])(image)}
            onClick={path(['onClick'])(image)}
          />
        )
      )
      (images)
    }
  </div>
)

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      onClick: PropTypes.func
    })
  )
}

export default Radium(ImageGrid)
