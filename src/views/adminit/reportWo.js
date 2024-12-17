import React, { useState } from 'react';
import {
  CRow, CCol, CCard, CCardHeader, CCardBody, CButton, CFormInput, CFormLabel, CCardFooter
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPrint } from '@coreui/icons';

const reportWo = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Placeholder function for printing the report
  const handlePrintReport = () => {
    alert('Printing Report...');
  };

  return (
    <CCard className="mb-4">
      {/* The header with a blue background and white text */}
      <CCardHeader className="bg-primary text-white">
        <h5 className="m-0">Report Wo</h5>
      </CCardHeader>

      <CCardBody>
        {/* Date Input Fields */}
        <CRow className="mb-3">
          <CCol md="6">
            <CFormLabel htmlFor="startDate">Tanggal Masuk</CFormLabel>
            <CFormInput
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="mm/dd/yyyy"
            />
          </CCol>

          <CCol md="6">
            <CFormLabel htmlFor="endDate">Tanggal Akhir</CFormLabel>
            <CFormInput
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="mm/dd/yyyy"
            />
          </CCol>
        </CRow>
      </CCardBody>

      {/* Footer with Print Button */}
      <CCardFooter>
        <CButton color="primary" className="float-end" onClick={handlePrintReport}>
          <CIcon icon={cilPrint} /> PRINT REPORT
        </CButton>
      </CCardFooter>
    </CCard>
  );
};

export default reportWo;
