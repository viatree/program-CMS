import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CButton
} from '@coreui/react'
import {
  cilAccountLogout,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import avatar8 from '../../assets/images/green-logo.png'
const Logout = async () => {
  localStorage.removeItem('component')
  localStorage.removeItem('divisi')
  localStorage.removeItem('isAuthenticated')
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  
}
const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownItem href='/'>
         <CButton onClick={Logout} className="button is-light">
          <CIcon icon={cilAccountLogout} className="me-2" />
          Logout
          </CButton>
        </CDropdownItem>
    </CDropdown>
  )
}

export default AppHeaderDropdown
