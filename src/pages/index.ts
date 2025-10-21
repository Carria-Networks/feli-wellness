import { lazy } from 'react'

const DistributorRelationships = lazy(() => import('./DistributorRelationships'))
const Contacts = lazy(() => import('./Contacts'))
const Home = lazy(() => import('./Home'))
const Partners = lazy(() => import('./Partners'))
const Products = lazy(() => import('./Products'))
const Testimonies = lazy(() => import('./Testimonials'))
const About = lazy(() => import('./About'))
const Mission = lazy(() => import('./Mission'))
const Vision = lazy(() => import('./Vision'))
const WhyChooseUs = lazy(() => import('./WhyChooseUs'))
const ChangingLives = lazy(() => import('./ChangingLives'))
const NewProduct = lazy(() => import('./NewProduct'))
const FeliwellnessProductOverview = lazy(() => import('./FeliwellnessProductOverview'))

export {
  Home,
  Contacts,
  About,
  Mission,
  Vision,
  WhyChooseUs,
  ChangingLives,
  Testimonies,
  Partners,
  Products,
  NewProduct,
  DistributorRelationships,
  FeliwellnessProductOverview
}