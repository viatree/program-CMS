import React, { useState } from 'react';
import {
  CRow, CCol, CCard, CCardHeader, CCardBody, CTable, CTableHead, CTableRow,
  CTableHeaderCell, CTableBody, CTableDataCell, CButton, CFormInput,
  CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CCardFooter
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPencil, cilTrash, cilCheckCircle, cilPlus, cilQrCode, cilMenu } from '@coreui/icons'; // Include more icons

const asset = () => {
  // Sample data with additional columns
  const [data, setData] = useState([
    { no: 1, kodeAsset: 'Dum-IT-LEP-093', namaAsset: 'thinkpad yoga 370', lokasi: 'Ruang Staff 1', sn: '00999102003982', tglMasuk: '2024-09-13', tglKeluar: '2024-12-11', status: 'Good' },
    { no: 2, kodeAsset: 'Dum-IT-LEP-092', namaAsset: 'thinkpad', lokasi: 'Ruang Staff', sn: '-', tglMasuk: '2024-08-13', tglKeluar: '2005-11-13', status: 'Good' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Filter data based on search input
  const filteredData = data.filter(
    (item) =>
      item.namaAsset.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.kodeAsset.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle delete and edit actions
  const handleDelete = (namaAsset) => {
    alert(`Delete ${namaAsset}`);
  };

  const handleEdit = (namaAsset) => {
    alert(`Edit ${namaAsset}`);
  };

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <CRow>
          <CCol>
            <h5>Data Barang</h5>
          </CCol>
        </CRow>
      </CCardHeader>

      <CCardBody>
        {/* Add and Approve buttons */}
        <CRow className="mb-3">
          <CCol xs="auto">
            <CButton color="primary">
              <CIcon icon={cilPlus} />Add
            </CButton>
            
          </CCol>
          <CCol xs="auto">
            <CButton color="success">
              <CIcon icon={cilQrCode} /> Print semua Qrcode
            </CButton>
          </CCol>
          
          <CCol xs="auto" className="ms-auto">
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

        {/* Table structure */}
        <CTable hover striped bordered responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>No</CTableHeaderCell>
              <CTableHeaderCell>Kode Asset</CTableHeaderCell>
              <CTableHeaderCell>Nama</CTableHeaderCell>
              <CTableHeaderCell>Lokasi</CTableHeaderCell>
              <CTableHeaderCell>SN</CTableHeaderCell>
              <CTableHeaderCell>Tanggal Masuk</CTableHeaderCell>
              <CTableHeaderCell>Tanggal Keluar</CTableHeaderCell>
              <CTableHeaderCell>Status</CTableHeaderCell>
              <CTableHeaderCell>Aksi</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {filteredData.map((item, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{item.no}</CTableDataCell>
                <CTableDataCell>{item.kodeAsset}</CTableDataCell>
                <CTableDataCell>{item.namaAsset}</CTableDataCell>
                <CTableDataCell>{item.lokasi}</CTableDataCell>
                <CTableDataCell>{item.sn}</CTableDataCell>
                <CTableDataCell>{item.tglMasuk}</CTableDataCell>
                <CTableDataCell>{item.tglKeluar}</CTableDataCell>
                <CTableDataCell>{item.status}</CTableDataCell>
                <CTableDataCell>
                  <CDropdown>
                    <CDropdownToggle color="secondary" variant="outline">Actions</CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem onClick={() => alert(`Print ${item.namaAsset}`)}>Print</CDropdownItem>
                      <CDropdownItem onClick={() => alert(`Pindah GA ${item.namaAsset}`)}>Pindah GA</CDropdownItem>
                      <CDropdownItem onClick={() => handleEdit(item.namaAsset)}>Edit</CDropdownItem>
                      <CDropdownItem onClick={() => handleDelete(item.namaAsset)}>Hapus</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
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

export default asset;
