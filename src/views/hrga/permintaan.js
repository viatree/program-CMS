import React, { useState } from 'react';
import {
  CRow, CCol, CCard, CCardHeader, CCardBody, CTable, CTableHead, CTableRow,
  CTableHeaderCell, CTableBody, CTableDataCell, CButton, CFormInput,
  CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CCardFooter,CBadge
} from '@coreui/react';
import CIcon from '@coreui/icons-react'; // Import CIcon for rendering icons
import { cilCheckAlt,cilPlus } from '@coreui/icons'; // Checkmark icon for "Selesai"

// Sample data for the table
const data = [
  { no: 3, nama: 'Vtaes', departemen: 'it', lokasi: 'Ruang atas', keterangan: 'Perbaikan macet', waktuMulai: '2024-10-08 08:17:26', waktuSelesai: '0000-00-00 00:00:00', status: 'Sedang diKerjakan' },
  { no: 8, nama: 'lorem', departemen: 'it', lokasi: 'bersih ruangan', keterangan: 'lampu  mati', waktuMulai: '2024-10-05 14:48:05', waktuSelesai: '0000-00-00 00:00:00', status: 'Sedang diKerjakan' },
  { no: 25, nama: 'vtaes', departemen: 'IT', lokasi: '-Ruang Staff 3', keterangan: 'telfon erorr lagee', waktuMulai: '2024-09-30 10:58:49', waktuSelesai: '0000-00-00 00:00:00', status: 'Sedang diKerjakan' },
  { no: 26, nama: 'vtaes', departemen: 'HRGA', lokasi: '-Ruang bawah', keterangan: 'Pembersihan', waktuMulai: '2024-10-07 14:56:04', waktuSelesai: '0000-00-00 00:00:00', status: 'Sedang diKerjakan' },
];

const permintaan = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter data based on search input
  const filteredData = data.filter(
    (item) =>
      item.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.departemen.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <h5>Daftar Permintaan</h5>
      </CCardHeader>
      <CCardBody>
        {/* Search input */}
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
              <CTableHeaderCell>No</CTableHeaderCell>
              <CTableHeaderCell>Nama User</CTableHeaderCell>
              <CTableHeaderCell>Departemen</CTableHeaderCell>
              <CTableHeaderCell>Lokasi</CTableHeaderCell>
              <CTableHeaderCell>Keterangan</CTableHeaderCell>
              <CTableHeaderCell>Waktu Mulai</CTableHeaderCell>
              <CTableHeaderCell>Waktu Selesai</CTableHeaderCell>
              <CTableHeaderCell>Status</CTableHeaderCell>
              <CTableHeaderCell>Aksi</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {filteredData.map((item, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{item.no}</CTableDataCell>
                <CTableDataCell>{item.nama}</CTableDataCell>
                <CTableDataCell>{item.departemen}</CTableDataCell>
                <CTableDataCell>{item.lokasi}</CTableDataCell>
                <CTableDataCell>{item.keterangan}</CTableDataCell>
                <CTableDataCell>{item.waktuMulai}</CTableDataCell>
                <CTableDataCell>{item.waktuSelesai}</CTableDataCell>
                <CTableDataCell>
                  <CBadge color="warning">{item.status}</CBadge>
                </CTableDataCell>
                <CTableDataCell>
                  {/* Green checkmark button with label "Selesai" */}
                  <CButton color="success" size="sm">
                    <CIcon icon={cilCheckAlt} /> Selesai
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

export default permintaan;
