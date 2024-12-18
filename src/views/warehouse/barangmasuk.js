import React, { useState } from 'react';
import {
  CRow, CCol, CCard, CCardHeader, CCardBody, CTable, CTableHead, CTableRow, CTableHeaderCell, 
  CTableBody, CTableDataCell, CButton, CModal, CModalHeader, CModalBody, CModalFooter, 
  CForm, CFormLabel, CFormInput
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPlus, cilSave } from '@coreui/icons';

const BarangMasuk = () => {
  // Data dummy
  const [data, setData] = useState([
    { no: 1, tgl:'01/10/2024', customer: 'PT. MAJU', kodeBarang: '0010', noRak:'22A',namaItem: 'BOX MM (2004)', jumlah: '1.268' },
    { no: 2, tgl:'01/10/2024', customer: 'PT.MAJU', kodeBarang: '0012', noRak:'24B',namaItem: 'BOX MM (2004)', jumlah: '1.268' },
    { no: 3, tgl:'01/10/2024', customer: 'PT.MAJU', kodeBarang: '0013', noRak:'27C', namaItem: 'PLASTIK ', jumlah: '1.268' },
    { no: 4, tgl:'01/10/2024', customer: 'PT.SKINCARE', kodeBarang: '00002', noRak:'24A', namaItem: 'INNER BOX', jumlah: '1.268' },
  ]);  

  // State untuk Modal
  const [visible, setVisible] = useState(false);
  const [code, setCode] = useState('');
  const [rak, setRak] = useState('');

  // Handle submit form modal
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!code) {
      SweetAlert({
        icon: 'error',
        text: 'Please input Code Product',
      });
      return;
    }

    // Tambah data ke tabel (dummy)
    const newItem = {
      no: data.length + 1,
      tgl: new Date().toLocaleDateString(),
      customer: 'New Customer',
      kodeBarang: code,
      namaItem: 'NEW-CODE',
      noRak: rak,
      jumlah: '700',
    };


    setData([...data, newItem]);
    setCode('');
    setRak('');
    setVisible(false);
    SweetAlert({
      icon: 'success',
      text: 'Data added successfully',
    });
  };

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <CRow>
          <CCol>
            <h5>Data Barang Masuk</h5>
          </CCol>

        </CRow>
      </CCardHeader>
      <CCardBody>
      <CCol className="text-right">
            <CButton color="primary" onClick={() => setVisible(true)}>
              <CIcon icon={cilPlus} className="me-2" />
              Input
            </CButton>
          </CCol>
        <CTable hover striped bordered responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>No</CTableHeaderCell>
              <CTableHeaderCell>Tanggal</CTableHeaderCell>
              <CTableHeaderCell>Nama Customer</CTableHeaderCell>
              <CTableHeaderCell>Kode Barang</CTableHeaderCell>
              <CTableHeaderCell>Nama Item</CTableHeaderCell>
              <CTableHeaderCell>No.Rak</CTableHeaderCell>
              <CTableHeaderCell>Total</CTableHeaderCell>
             
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data.map((item, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{item.no}</CTableDataCell>
                <CTableDataCell>{item.tgl}</CTableDataCell>
                <CTableDataCell>{item.customer}</CTableDataCell>
                <CTableDataCell>{item.kodeBarang}</CTableDataCell>
                <CTableDataCell>{item.namaItem}</CTableDataCell>
                <CTableDataCell>{item.noRak}</CTableDataCell>
                <CTableDataCell>{item.jumlah}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CCardBody>

      {/* Modal untuk input data baru */}
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader closeButton>Input Barang</CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleSubmit}>
            <CRow className="mb-3">
              <CFormLabel className="col-sm-2 col-form-label">Kode Barang</CFormLabel>
              <CCol sm={10}>
                <CFormInput
                  type="text"
                  placeholder="Input Kode Barang"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </CCol>
              
              <CFormLabel className="col-sm-2 col-form-label">No. Rak</CFormLabel>
              <CCol sm={10}>
                <CFormInput
                  type="text"
                  placeholder="Input No Rak"
                  value={rak}
                  onChange={(e) => setRak(e.target.value)}
                />
              </CCol>

            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>Close</CButton>
          <CButton color="primary" onClick={handleSubmit}>
            <CIcon icon={cilSave} className="me-2" />
            Save
          </CButton>
        </CModalFooter>
      </CModal>
    </CCard>
  );
};

export default BarangMasuk;
