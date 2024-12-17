import React, { useState, useEffect } from 'react';
import {
  CRow, CCol, CCard, CCardHeader, CCardBody, CTable, CTableHead, CTableRow,
  CTableHeaderCell, CTableBody, CTableDataCell, CButton, CFormInput,
  CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem, CCardFooter, CPagination, CPaginationItem
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPencil, cilTrash, cilPlus, cilPen } from '@coreui/icons';
import axios from 'axios'; // For making API calls
import SweetAlert from 'sweetalert2';
import { Link } from 'react-router-dom';

const lokasi = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 10; 

  // Function to fetch data from the API
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://192.168.2.9:4001/lokasi');
      if (response.data.status === 'ok') {
        // Assuming API returns a list of categories
        setData(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle search term filter
  const filteredData = data.filter(
    (item) =>
      item.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem); // Sliced data for current page
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Handle delete and edit actions
  const handleDelete = (id) => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://192.168.2.9:4001/lokasi/${id}`)
          .then((res) => {
            if (res.data.status === 'ok') {
              SweetAlert.fire('Deleted!', res.data.message, 'success');
              fetchData();
            } else {
              SweetAlert.fire('Error', res.data.message, 'error');
            }
          })
          .catch(() => {
            SweetAlert.fire('Error', 'Failed to delete category', 'error');
          });
      }
    });
  };

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <h5>Data Lokasi</h5>
      </CCardHeader>
      <CCardBody>
        {/* Add and Print Qris buttons */}
        <CRow className="mb-3">
          <CCol xs="auto">
          <Link to="/lokasi/add" className="btn btn-primary">
              <CIcon icon={cilPlus} className="me-2" />
              Add Lokasi
            </Link>
          </CCol>
          <CCol xs="auto">
          <CButton color="success" className="mt-2 text-white">
              <CIcon icon={cilPlus} />Print Qris
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

        {/* Table */}
        <CTable hover striped bordered responsive>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>ID</CTableHeaderCell>
              <CTableHeaderCell>Nama</CTableHeaderCell>
              <CTableHeaderCell>Aksi</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {currentData.map((item, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{indexOfFirstItem + index + 1}</CTableDataCell>
                <CTableDataCell>{item.nama}</CTableDataCell>
                <CTableDataCell>
                  {/* Edit and Delete buttons */}
                  <Link to={`/lokasi/edit/${item.id}`}>
                    <CButton color="info" size="sm">
                      <CIcon icon={cilPen} />
                    </CButton>
                  </Link>
                  <CButton color="danger" size="sm" className="ms-2" onClick={() => handleDelete(item.id)}>
                    <CIcon icon={cilTrash} /> {/* Delete Icon */}
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>

        {/* Pagination Footer */}
        <CCardFooter>
          <CRow>
            <CCol>
              <div>Showing {indexOfFirstItem + 1} to {indexOfLastItem} of {filteredData.length} entries</div>
            </CCol>
            <CCol xs="auto">
              <CPagination aria-label="Page navigation example">
                <CPaginationItem
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </CPaginationItem>
                {[...Array(totalPages)].map((_, pageIndex) => (
                  <CPaginationItem
                    key={pageIndex}
                    active={currentPage === pageIndex + 1}
                    onClick={() => handlePageChange(pageIndex + 1)}
                  >
                    {pageIndex + 1}
                  </CPaginationItem>
                ))}
                <CPaginationItem
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </CPaginationItem>
              </CPagination>
            </CCol>
          </CRow>
        </CCardFooter>
      </CCardBody>
    </CCard>
  );
};

export default lokasi;
