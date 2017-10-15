import React from 'react'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import FlipMove from 'react-flip-move'
import {createSelector} from 'reselect'
import Radium from 'radium'
import {pipe, path, flip, slice, find, propEq, values, uniq, filter} from 'ramda'
import {map} from 'lodash'

import Profile from './profile'
import mediaQueries from '../../media_queries'

const style = {
  base: {
    padding: '0 40px 10px 40px',
    [mediaQueries.tablet]: {
      padding: '0 5px 10px 5px'
    }
  },
  profileContainer: {
    display: 'flex'
  }
}

const mapStateToProps = state => ({
  router: state.router,
  employees: state.data.employees,
  previousRoutes: state.session.routeHistory
})

const profilesSelector = createSelector(
  mapStateToProps,
  ({router, employees, previousRoutes}) => {

    const currentPathname = path(['location', 'pathname'])(router)
    const findEmployeeByPathName = pathname => pipe(
      values,
      find(
        propEq('slug', slice(1, Infinity)(pathname))
      )
    )(employees)

    const routeHistory = pipe(
      uniq,
      filter(route => route !== '/'),
      slice(0, 3)
    )([currentPathname, ...previousRoutes])

    const profiles = flip(map)(
      pipe(
        findEmployeeByPathName,
        employee => ({
          imageSrc: path(['profileImage'])(employee),
          bio: path(['bio'])(employee),
          slug: path(['slug'])(employee)
        })
      )
    )(routeHistory)

    return {profiles}
  }
)

const Profiles = ({profiles}) => (
  <div style={style.base}>
    <FlipMove duration={750} easing="ease-out" style={style.profileContainer}>
      {
        flip(map)(profile => (
          <Profile
            key={path(['slug'])(profile)}
            imageSrc={path(['imageSrc'])(profile)}
            body={path(['bio'])(profile)}
          />
        ))(profiles)
      }
    </FlipMove>
  </div>
)

export default pipe(
  Radium,
  connect(profilesSelector)
)(Profiles)
