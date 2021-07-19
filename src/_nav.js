import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavItem',
    anchor: '_nav/anchor',
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Column',
    to: '/column',
    icon: <CIcon name="cil-notes" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Columns',
    to: '/columnSummary',
    icon: <CIcon name="cil-notes" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavGroup',
    anchor: 'Pages',
    icon: <CIcon name="cil-star" customClassName="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Login',
        to: '/login',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Register',
        to: '/register',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Error 404',
        to: '/404',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav