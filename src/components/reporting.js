import React from 'react'
import styles from './reporting.module.css'

class Reporting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reports: [
        {
          id: 1,
          title: 'Monthly Report',
          description: 'Overview of monthly activities and statistics',
          date: new Date().toLocaleDateString(),
        },
        {
          id: 2,
          title: 'Quarterly Report',
          description: 'Quarterly business performance analysis',
          date: new Date().toLocaleDateString(),
        },
        {
          id: 3,
          title: 'Annual Report',
          description: 'Complete annual summary and insights',
          date: new Date().toLocaleDateString(),
        },
      ],
    }
  }

  render() {
    const { reports } = this.state

    return (
      <div className={styles.reportingContainer}>
        <div className={styles.reportGrid}>
          {reports.map((report) => (
            <div key={report.id} className={styles.reportCard}>
              <h3 className={styles.reportTitle}>{report.title}</h3>
              <p className={styles.reportDescription}>{report.description}</p>
              <div className={styles.reportMeta}>
                <span className={styles.reportDate}>Last updated: {report.date}</span>
              </div>
              <button className={styles.reportButton}>View Report</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Reporting
