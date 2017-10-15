import React from 'react'
import {push, replace} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {path, flip} from 'ramda'
import {map} from 'lodash'

import {updateRoute} from '../../modules/session'
import ImageGrid from '../elements/image_grid'

const mapStateToProps = state => ({
  employees: state.data.employees
})

const mapDispatchToProps = dispatch => bindActionCreators({
  onClick: employeeId => {

    const oldRoute = window.location.pathname
    const newRoute =  `/${employeeId}`

    if (newRoute === oldRoute) {
      return replace(newRoute)
    }

    dispatch(updateRoute(oldRoute))
    return push(newRoute)
  }
}, dispatch)

const About = ({employees, onClick}) => (
  <div>
    {
      <ImageGrid
        images={
          flip(map)(
            employee => ({
              src: path(['profileImage'])(employee),
              onClick: () => onClick(path(['slug'])(employee))
            })
          )
          (employees)
        }
      />
    }
  </div>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
