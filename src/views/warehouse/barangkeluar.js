import React, { useState } from 'react';
import {
  CRow, CCol, CCard, CCardHeader, CCardBody, CTable, CTableHead, CTableRow, CTableHeaderCell, 
  CTableBody, CTableDataCell, CButton, CModal, CModalHeader, CModalBody, CModalFooter, 
  CForm, CFormLabel, CFormInput
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPlus, cilSave } from '@coreui/icons';

const BarangKeluar = () => {
  // Data dummy
  const [data, setData] = useState([
    { no: 1, tgl:'01/10/2024', customer: 'PT.MAJU', kodeBarang: '0010', namaItem: 'BOX MM (2004)', jumlah: '1.268', ket:'Habis' },
    { no: 2, tgl:'01/10/2024', customer: 'PT.MAJU', kodeBarang: 'O0012', namaItem: 'BOX MM (2004)', jumlah: '1.268',ket:'Kelar' },
    { no: 3, tgl:'01/10/2024', customer: 'PT.MAJU', kodeBarang: '0013', namaItem: 'PLASTIK MM PP 80 MICRON', jumlah: '1.268', ket:'Jangan' },
    { no: 4, tgl:'01/10/2024', customer: 'PT.SKINCARE', kodeBarang: '0002', namaItem: ' LIQUID POWDER 100 ML (2305)', jumlah: '1.268', ket:'Boleh' },
  ]);  

  // State untuk Modal
  const [visible, setVisible] = useState(false);
  const [code, setCode] = useState('');
  const [ket, setKet] = useState('');
  const [jumlah,setJumlah] = useState('');

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
      jumlah: jumlah,
      ket: ket,
    };


    setData([...data, newItem]);
    setCode('');
    setKet('');
    setJumlah('');
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
            <h5>Data Barang Keluar</h5>
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
              <CTableHeaderCell>Kuantitas</CTableHeaderCell>
              <CTableHeaderCell>Keterangan</CTableHeaderCell>
             
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
                <CTableDataCell>{item.jumlah}</CTableDataCell>
                <CTableDataCell>{item.ket}</CTableDataCell>
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
              </CRow>
              <CRow className="mb-3">
              <CFormLabel className="col-sm-2 col-form-label">Kuantitas</CFormLabel>
              <CCol sm={10}>
                <CFormInput
                  type="text"
                  placeholder="Input Jumlah Kuantitas"
                  value={jumlah}
                  onChange={(e) => setJumlah(e.target.value)}
                />
              </CCol>
              </CRow>
        
              <CRow className="mb-3">
              <CFormLabel className="col-sm-2 col-form-label">Keterangan</CFormLabel>
              <CCol sm={10}>
                <CFormInput
                  type="text"
                  placeholder="Input Keterangan"
                  value={ket}
                  onChange={(e) => setKet(e.target.value)}
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

export default BarangKeluar;
