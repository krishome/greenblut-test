import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Reporting from '../components/reporting'
import styles from './reporting.module.css'

class ReportingPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`Reporting - ${siteTitle}`} />
          <div className={styles.wrapper}>
            <h1 className={styles.title}>Reporting Dashboard</h1>
            <Reporting />
          </div>
        </div>
      </Layout>
    )
  }
}

export default ReportingPage

export const pageQuery = graphql`
  query ReportingQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
