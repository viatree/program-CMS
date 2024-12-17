import React, { useState, useEffect } from 'react';
import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CRow, CFormSelect } from '@coreui/react';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert2';
import CIcon from '@coreui/icons-react';
import { cilSave, cilChevronLeft } from '@coreui/icons';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DivForm = () => {
  const { id } = useParams();  // Get ID from URL for edit
  const navigate = useNavigate();  // Untuk navigasi di versi terbaru
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [lokasiList, setLokasiList] = useState([]);  // State untuk menyimpan daftar lokasi
  const [selectedLokasi, setSelectedLokasi] = useState(''); // State untuk menyimpan lokasi terpilih

  // Load data for editing
  const loadData = () => {
    setLoading(true);
    axios.get(`http://192.168.2.9:4001/divisi/${id}`)
      .then((res) => {
        if (res.data.status === 'ok') {
          const resData = res.data.data;
          setValue('nama', resData.nama);  // Set form value for name
          setValue('id_lokasi', resData.id_lokasi);  // Set form value for lokasi ID
          setSelectedLokasi(resData.id_lokasi);  // Set lokasi yang dipilih
        } else {
          SweetAlert.fire('Error', res.data.message, 'error');
          navigate(-1); 
        }
      })
      .catch(() => {
        SweetAlert.fire('Error', 'Oops.. Something Wrong!', 'error');
        navigate(-1); 
      })
      .finally(() => setLoading(false));
  };

  // Load lokasi options
  const loadLokasi = () => {
    axios.get('http://192.168.2.9:4001/lokasi')  // Adjust API if necessary
      .then((res) => {
        if (res.data.status === 'ok') {
          setLokasiList(res.data.data);  // Simpan daftar lokasi ke state
        } else {
          SweetAlert.fire('Error', res.data.message, 'error');
        }
      })
      .catch(() => {
        SweetAlert.fire('Error', 'Failed to load lokasi data', 'error');
      });
  };

  // Submit data for creation or editing
  const onSubmit = (data) => {
    setLoading(true);
    if (id) {
      // Edit existing division
      axios.put(`http://192.168.2.9:4001/divisi/${id}`, data)
        .then((res) => {
          SweetAlert.fire('Success', res.data.message, 'success');
          navigate('/div');
        })
        .catch(() => {
          SweetAlert.fire('Error', 'Failed to update division', 'error');
        })
        .finally(() => setLoading(false));
    } else {
      // Create new division
      axios.post('http://192.168.2.9:4001/divisi', data)
        .then((res) => {
          SweetAlert.fire('Success', res.data.message, 'success');
          navigate('/div');
        })
        .catch(() => {
          SweetAlert.fire('Error', 'Failed to create division', 'error');
        })
        .finally(() => setLoading(false));
    }
  };

  // Load data if editing
  useEffect(() => {
    if (id) loadData();  // Load data jika sedang mengedit
    loadLokasi();  // Load daftar lokasi pada saat komponen di-mount
  }, [id]);

  return (
    <CCard>
      <CCardHeader>
        {/* Title and Back button in the same row, with Back on the right */}
        <div className="d-flex justify-content-between align-items-center">
          <h5>{id ? 'Edit Divisi' : 'Add New Divisi'}</h5>
          <CButton color="secondary" variant="outline" onClick={() => navigate(-1)}>
            <CIcon icon={cilChevronLeft} className="me-2" /> Back
          </CButton>
        </div>
      </CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit(onSubmit)}>
          <CRow className="mb-3">
            <CCol sm={2}>
              <label>Nama Divisi</label>
            </CCol>
            <CCol sm={8}>
              <CFormInput
                type="text"
                placeholder="Nama Divisi"
                {...register('nama', { required: 'Nama Divisi is required' })}
              />
              {errors.nama && <span className="text-danger">{errors.nama.message}</span>}
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol sm={2}>
              <label>Lokasi</label>
            </CCol>
            <CCol sm={8}>
              <CFormSelect
                {...register('id_lokasi', { required: 'Lokasi is required' })}  // Register lokasi dengan id_lokasi
                value={selectedLokasi}  // Set value dari lokasi yang terpilih
                onChange={(e) => setSelectedLokasi(e.target.value)}  // Update selected lokasi on change
              >
                <option value="">Pilih Lokasi</option>
                {lokasiList.map((lokasi) => (
                  <option key={lokasi.id} value={lokasi.id}>
                    {lokasi.nama}
                  </option>
                ))}
              </CFormSelect>
              {errors.id_lokasi && <span className="text-danger">{errors.id_lokasi.message}</span>}
            </CCol>
          </CRow>
          <CRow className="mt-5">
            <CCol className="text-center">
              <CButton type="submit" color="primary" disabled={loading}>
                <CIcon icon={cilSave} className="mx-2" /> Save
              </CButton>
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default DivForm;
