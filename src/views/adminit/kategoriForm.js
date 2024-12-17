import React, { useState, useEffect } from 'react';
import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CRow, CBreadcrumb, CBreadcrumbItem } from '@coreui/react';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert2';
import CIcon from '@coreui/icons-react';
import { cilSave, cilChevronLeft } from '@coreui/icons';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const kategoriForm = () => {
  const { id } = useParams();  // Get ID from URL for edit
  const navigate = useNavigate();  // Untuk navigasi di versi terbaru
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  // Load data for editing
  const loadData = () => {
    setLoading(true);
    axios.get(`http://192.168.2.9:4001/kategori/${id}`)
      .then((res) => {
        if (res.data.status === 'ok') {
          const resData = res.data.data;
          setValue('nama', resData.nama);  // Set form value for name
          setValue('kode', resData.kode);  // Set form value for code
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

  // Submit data for creation or editing
  const onSubmit = (data) => {
    setLoading(true);
    if (id) {
      // Edit existing category
      axios.put(`http://192.168.2.9:4001/kategori/${id}`, data)
        .then((res) => {
          SweetAlert.fire('Success', res.data.message, 'success');
          navigate('/kategori');
        })
        .catch(() => {
          SweetAlert.fire('Error', 'Failed to update category', 'error');
        })
        .finally(() => setLoading(false));
    } else {
      // Create new category
      axios.post('http://192.168.2.9:4001/kategori', data)
        .then((res) => {
          SweetAlert.fire('Success', res.data.message, 'success');
          navigate('/kategori');
        })
        .catch(() => {
          SweetAlert.fire('Error', 'Failed to create category', 'error');
        })
        .finally(() => setLoading(false));
    }
  };

  // Load data if editing
  useEffect(() => {
    if (id) loadData();
  }, [id]);

  return (
    <CCard>
      <CCardHeader>
        {/* <CBreadcrumb className="d-flex justify-content-start">
          <CBreadcrumbItem>
            <Link to="/">Home</Link>
          </CBreadcrumbItem>
          <CBreadcrumbItem>
            <Link to="/kategori">Kategori</Link>
          </CBreadcrumbItem>
          <CBreadcrumbItem active>{id ? 'Edit Kategori' : 'Add Kategori'}</CBreadcrumbItem>
        </CBreadcrumb> */}

        {/* Title and Back button in the same row, with Back on the right */}
        <div className="d-flex justify-content-between align-items-center">
          <h5>{id ? 'Edit Kategori' : 'Add New Kategori'}</h5>
          <CButton color="secondary" variant="outline" onClick={() => navigate(-1)}>
            <CIcon icon={cilChevronLeft} className="me-2" /> Back
          </CButton>
        </div>
      </CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit(onSubmit)}>
          <CRow className="mb-3">
            <CCol sm={2}>
              <label>Nama Kategori</label>
            </CCol>
            <CCol sm={8}>
              <CFormInput
                type="text"
                placeholder="Nama Kategori"
                {...register('nama', { required: 'Nama Kategori is required' })}
              />
              {errors.nama && <span className="text-danger">{errors.nama.message}</span>}
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CCol sm={2}>
              <label>Kode Kategori</label>
            </CCol>
            <CCol sm={8}>
              <CFormInput
                type="text"
                placeholder="Kode Kategori"
                {...register('kode', { required: 'Kode Kategori is required' })}
              />
              {errors.kode && <span className="text-danger">{errors.kode.message}</span>}
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

export default kategoriForm;
