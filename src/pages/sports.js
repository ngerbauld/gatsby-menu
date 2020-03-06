import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SportsStyles from './sports.module.scss'

const Sports = () => {
  return (
    <Layout>
      <div className={SportsStyles.content}>
        <h1>Sport Page</h1>
        <p>All sports products will be showing here</p>
        <Link to="/">Go to Home Page</Link>
      </div>
    </Layout>
    )
}

export default Sports
