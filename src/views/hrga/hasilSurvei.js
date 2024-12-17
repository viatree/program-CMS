import React, { useState } from 'react';
import {  CRow, CCol, CCard, CCardHeader, CCardBody, CTable, CTableHead, CTableRow,
  CTableHeaderCell, CTableBody, CTableDataCell, CButton, CFormInput,
  CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CCardFooter} from '@coreui/react';

const hasilSurvei = () => {
  // Sample survey data
  const [data, setData] = useState([
    {
      no: 1,
      namaSurvei: 'Survei Catering',
      department: 'IT',
      nilai: 16,
      status: 'Selesai',
    },
    // Add more survey data if needed
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
        <h5>Data Survei</h5>
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
              <CTableHeaderCell>Nama Survei</CTableHeaderCell>
              <CTableHeaderCell>Department</CTableHeaderCell>
              <CTableHeaderCell>Nilai</CTableHeaderCell>
              <CTableHeaderCell>Status</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data.map((item, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{item.no}</CTableDataCell>
                <CTableDataCell>{item.namaSurvei}</CTableDataCell>
                <CTableDataCell>{item.department}</CTableDataCell>
                <CTableDataCell>{item.nilai}</CTableDataCell>
                <CTableDataCell>{item.status}</CTableDataCell>
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

export default hasilSurvei;
