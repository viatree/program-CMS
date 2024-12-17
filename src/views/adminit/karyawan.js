import React, { useState } from 'react';
import { CRow, CCol, CCard, CCardHeader, CCardBody, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CPagination, CPaginationItem, CButton,
  CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CCardFooter,CFormInput } from '@coreui/react';
import CIcon from '@coreui/icons-react'; // Import CIcon for rendering icons
import { cilPencil, cilTrash, cilCheckCircle, cilPlus } from '@coreui/icons';

const karyawan = () => {
  // Sample data for the suggestion table
  const [data, setData] = useState([
    { no: 1, department: 'IT', nama: 'Veelaslavia', nohp: '0101010101' },
    // Add more data as necessary
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Filtered data based on search input
  const filteredData = data.filter(
    (item) =>
      item.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nohp.toLowerCase().includes(searchTerm.toLowerCase())
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
        <h5>Data Karyawan</h5>
      </CCardHeader>
      <CCardBody>
        {/* Export buttons similar to the layout in the image */}
        <CRow className="mb-3">
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

        {/* The table structure */}
        <CTable hover striped bordered responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>No</CTableHeaderCell>
              <CTableHeaderCell>Nama</CTableHeaderCell>
              <CTableHeaderCell>Departemen</CTableHeaderCell>
              <CTableHeaderCell>Nomor Handphone</CTableHeaderCell>
              <CTableHeaderCell>Action</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {filteredData.map((item, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{item.no}</CTableDataCell>
                <CTableDataCell>{item.nama}</CTableDataCell>
                <CTableDataCell>{item.department}</CTableDataCell>
                <CTableDataCell>{item.nohp}</CTableDataCell>
                <CTableDataCell>
                  {/* Edit and Delete buttons */}
                  <CButton color="info" size="sm" onClick={() => handleEdit(item.nama)}>
                    <CIcon icon={cilPencil} /> {/* Edit Icon */}
                  </CButton>
                  <CButton color="danger" size="sm" className="ms-2" onClick={() => handleDelete(item.nama)}>
                    <CIcon icon={cilTrash} /> {/* Delete Icon */}
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

export default karyawan;
