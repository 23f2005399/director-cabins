import React from 'react';
import './styles/comparisonTable.css';

const tableData = [
  {
    feature: 'Privacy',
    altf: 'Full',
    home: 'Low',
    lease: 'Full',
  },
  {
    feature: 'Setup Time',
    altf: 'Instant',
    home: 'N/A',
    lease: 'One to three months',
  },
  {
    feature: 'Internet and Power',
    altf: 'Always On',
    home: 'Unreliable',
    lease: 'Requires Setup',
  },
  {
    feature: 'Maintenance',
    altf: 'Included',
    home: 'Not Applicable',
    lease: 'Requires Vendors',
  },
  {
    feature: 'Business Credibility',
    altf: 'High',
    home: 'Low',
    lease: 'Medium',
  },
  {
    feature: 'Lock-in Period',
    altf: 'One to twelve months',
    home: 'None',
    lease: 'Thirty six months',
  },
];

const ComparisonTable = () => {
  return (
    <section className="ct-section">
      <div className="ct-container">
        <h2>Compare Your Options</h2>
        <div className="ct-table-wrapper">
          <table className="ct-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>alt.f Director Cabin</th>
                <th>Home Office</th>
                <th>Traditional Lease</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.feature}</td>
                  <td>{row.altf}</td>
                  <td>{row.home}</td>
                  <td>{row.lease}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
