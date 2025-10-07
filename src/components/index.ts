import { lazy } from 'react'

const Footer = lazy(() => import('./Footer'))
const Header = lazy(() => import('./Header'))
const Hero = lazy(() => import('./Hero'))


export {
  Header,
  Hero,
  Footer
}