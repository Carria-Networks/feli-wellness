import { lazy } from 'react'

const DistributorRelationships = lazy(() => import('./DistributorRelationships'))
const Contacts = lazy(() => import('./Contacts'))
const Home = lazy(() => import('./Home'))
const Partners = lazy(() => import('./Partners'))
const Products = lazy(() => import('./Products'))
const Testimonies = lazy(() => import('./Testimonials'))
const About = lazy(() => import('./About'))

export {
  Home,
  Contacts,
  About,
  Testimonies,
  Partners,
  Products,
  DistributorRelationships
}