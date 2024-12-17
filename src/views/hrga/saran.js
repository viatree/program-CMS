import React, { useState } from 'react';
import {  CRow, CCol, CCard, CCardHeader, CCardBody, CTable, CTableHead, CTableRow,
  CTableHeaderCell, CTableBody, CTableDataCell, CButton, CFormInput,
  CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CCardFooter
} from '@coreui/react';

const saran = () => {
  // Sample data for the suggestion table
  const [data, setData] = useState([
    { no: 1, department: 'IT', ruangan: 'Ruang staff', isiSaran: 'tes' },
    // Add more data as necessary
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Filtered data based on search input
  const filteredData = data.filter(
    (item) =>
      item.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ruangan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.isiSaran.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <h5>Data Saran</h5>
      </CCardHeader>
      <CCardBody>
        {/* Export buttons similar to the layout in the image */}
        <CRow className="mb-3">
        <CCol xs="auto" className="ms-auto text-end">
            <CFormInput
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </CCol>
        </CRow>
          {/* Export options (example only for UI purposes) */}
          <CRow className="mb-3">
          <CCol>
            <CButton color="secondary" variant="outline" className="me-2">Copy</CButton>
            <CButton color="secondary" variant="outline" className="me-2">CSV</CButton>
            <CButton color="secondary" variant="outline" className="me-2">Excel</CButton>
            <CButton color="secondary" variant="outline" className="me-2">PDF</CButton>
            <CButton color="secondary" variant="outline">Print</CButton>
          </CCol>
          <CCol xs="auto">
            <CDropdown>
              <CDropdownToggle color="secondary">Column visibility</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Show/Hide Columns</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CCol>
        </CRow>

        {/* The table structure */}
        <CTable hover striped bordered responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>No</CTableHeaderCell>
              <CTableHeaderCell>Department</CTableHeaderCell>
              <CTableHeaderCell>Ruangan</CTableHeaderCell>
              <CTableHeaderCell>Isi Saran</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {filteredData.map((item, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{item.no}</CTableDataCell>
                <CTableDataCell>{item.department}</CTableDataCell>
                <CTableDataCell>{item.ruangan}</CTableDataCell>
                <CTableDataCell>{item.isiSaran}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>

           {/* Footer for pagination */}
           <CCardFooter>
          <CRow>
            <CCol>
              <div>Showing 1 to {filteredData.length} of {data.length} entries</div>
            </CCol>
            <CCol xs="auto" className="text-end">
              <CButton color="secondary" size="sm" disabled>Previous</CButton>
              <CButton color="secondary" size="sm" className="ms-2">Next</CButton>
            </CCol>
          </CRow>
        </CCardFooter>
      </CCardBody>
    </CCard>
  );
};

export default saran;
