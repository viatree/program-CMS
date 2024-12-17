import React, { useState } from 'react';
import { CRow, CCol, CCard, CCardHeader, CCardBody, CTable, CTableHead, CTableRow,
  CTableHeaderCell, CTableBody, CTableDataCell, CButton, CFormInput,
  CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CCardFooter } from '@coreui/react';

const dataTamu = () => {
  // Data dummy tamu yang mirip dengan gambar yang diunggah
  const [data, setData] = useState([
    {
      no: 1,
      namaTamu: 'VTAES',
      email: 'VTAES@gmail.com',
      noHp: '081381387293',
      asal: '-',
      tujuan: 'IT',
      nomorPolisi: 'B 1234 UV',
      typeKendaraan: '-',
      jamMasuk: '0000-00-00 00:00:00',
      jamPulang: '0000-00-00 00:00:00',
      status: 'masih di area',
    },
    // Tambahkan data lainnya sesuai kebutuhan
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Filtered data based on search input
  const filteredData = data.filter(
    (item) =>
      item.namaTamu.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.noHp.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.asal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tujuan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.nomorPolisi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.typeKendaraan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.jamMasuk.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.jamPulang.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <h5>Data Tamu</h5>
      </CCardHeader>
      <CCardBody>
        {/* Search input */}
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
        
        {/* Export options */}
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
        
        {/* Tabel Data Tamu */}
        <CTable hover striped bordered responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>No</CTableHeaderCell>
              <CTableHeaderCell>Nama Tamu</CTableHeaderCell>
              <CTableHeaderCell>Email</CTableHeaderCell>
              <CTableHeaderCell>No Hp</CTableHeaderCell>
              <CTableHeaderCell>Asal</CTableHeaderCell>
              <CTableHeaderCell>Tujuan</CTableHeaderCell>
              <CTableHeaderCell>Nomor Polisi</CTableHeaderCell>
              <CTableHeaderCell>Type Kendaraan</CTableHeaderCell>
              <CTableHeaderCell>Jam Masuk</CTableHeaderCell>
              <CTableHeaderCell>Jam Pulang</CTableHeaderCell>
              <CTableHeaderCell>Status</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {filteredData.map((item, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{item.no}</CTableDataCell>
                <CTableDataCell>{item.namaTamu}</CTableDataCell>
                <CTableDataCell>{item.email}</CTableDataCell>
                <CTableDataCell>{item.noHp}</CTableDataCell>
                <CTableDataCell>{item.asal}</CTableDataCell>
                <CTableDataCell>{item.tujuan}</CTableDataCell>
                <CTableDataCell>{item.nomorPolisi}</CTableDataCell>
                <CTableDataCell>{item.typeKendaraan}</CTableDataCell>
                <CTableDataCell>{item.jamMasuk}</CTableDataCell>
                <CTableDataCell>{item.jamPulang}</CTableDataCell>
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

export default dataTamu;
