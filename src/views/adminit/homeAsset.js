import React, { useState } from 'react';
import {
  CRow, CCol, CCard, CCardBody, CCardHeader, CCardText
} from '@coreui/react';
import CIcon from '@coreui/icons-react'; // Import CIcon for rendering icons
import { cilHome, cilList, cilWrench, cilScreenDesktop } from '@coreui/icons'; // Example icons from CoreUI

const homeAsset = () => {
  // Data for the dashboard
  const data = {
    totalRequests: 221,
    maintenanceQueue: 8,
    hrgaQueue: 5,
    itQueue: 3,
  };

  return (
    <div>
      <h3>Home Asset</h3>
      {/* First row of cards */}
      <CRow>
        <CCol xs="6" sm="3">
          <CCard className="mb-4 shadow-sm">
            <CCardBody>
              <CRow>
                <CCol xs="auto">
                  <CIcon icon={cilList} size="xl" />
                </CCol>
                <CCol>
                  <h5 className="text-danger">{data.totalRequests}</h5>
                  <CCardText className="text-muted">Jumlah Permintaan Keseluruhan</CCardText>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="6" sm="3">
          <CCard className="mb-4 shadow-sm">
            <CCardBody>
              <CRow>
                <CCol xs="auto">
                  <CIcon icon={cilWrench} size="xl" />
                </CCol>
                <CCol>
                  <h5 className="text-danger">{data.maintenanceQueue}</h5>
                  <CCardText className="text-muted">Antrian Permintaan Maintenance</CCardText>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="6" sm="3">
          <CCard className="mb-4 shadow-sm">
            <CCardBody>
              <CRow>
                <CCol xs="auto">
                  <CIcon icon={cilHome} size="xl" />
                </CCol>
                <CCol>
                  <h5 className="text-danger">{data.hrgaQueue}</h5>
                  <CCardText className="text-muted">Antrian Permintaan HRGA</CCardText>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="6" sm="3">
          <CCard className="mb-4 shadow-sm">
            <CCardBody>
              <CRow>
                <CCol xs="auto">
                  <CIcon icon={cilScreenDesktop} size="xl" />
                </CCol>
                <CCol>
                  <h5 className="text-danger">{data.itQueue}</h5>
                  <CCardText className="text-muted">Antrian Permintaan IT</CCardText>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default homeAsset;
