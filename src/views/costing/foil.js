import React, { useState } from 'react';
import {
  CRow, CCol, CCard, CCardHeader, CCardBody, CTable, CTableHead, CTableRow,
  CTableHeaderCell, CTableBody, CTableDataCell, CButton, CFormInput,
  CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CCardFooter
} from '@coreui/react';
import CIcon from '@coreui/icons-react'; // Import CIcon for rendering icons
import { cilPencil, cilTrash,cilPlus } from '@coreui/icons'; // Icons for Edit and Delete

const foil = () => {
  // Updated data with 'status' field included
  const [data, setData] = useState([
    { no: 1, nama: 'Gold',harga: 'Rp.9000' },
    { no: 2, nama: 'Silver', harga: 'Rp.909900'},
    { no: 3, nama: 'Rose Gold', harga: 'Rp.2300'},
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');

  // Filter data based on search input
  const filteredData = data.filter(
    (item) =>
      item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.harga.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle delete and edit actions
  const handleDelete = (nama) => {
    alert(`Delete ${nama}`);
  };

  const handleEdit = (nama) => {
    alert(`Edit ${nama}`);
  };

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <h5>Foil</h5>
      </CCardHeader>
      <CCardBody>
        {/* Export buttons */}
        <CRow className="mb-3">
          <CCol>
          <CButton color="primary" className="mt-2">
              <CIcon icon={cilPlus} />Add
            </CButton>
          </CCol>
          <CCol xs="auto">
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

        {/* Table structure */}
        <CTable hover striped bordered responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>No.</CTableHeaderCell>
              <CTableHeaderCell>Name</CTableHeaderCell>
              <CTableHeaderCell>Harga</CTableHeaderCell>
              <CTableHeaderCell>Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {filteredData.map((item, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{item.no}</CTableDataCell>
                <CTableDataCell>{item.nama}</CTableDataCell>
                <CTableDataCell>{item.harga}</CTableDataCell>
                <CTableDataCell>
                  {/* Edit and Delete buttons */}
                  <CButton color="info" size="sm" onClick={() => handleEdit(item.nama)}>
                    <CIcon icon={cilPencil} />
                  </CButton>
                  <CButton color="danger" size="sm" className="ms-2" onClick={() => handleDelete(item.nama)}>
                    <CIcon icon={cilTrash} />
                  </CButton>
                </CTableDataCell>
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

export default foil;