import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilTerminal,
  cilCursor,
  cilDescription,
  cilDrop,
  cilHistory,
  cilHome,
  cilHouse,
  cilMenu,
  cilWindow,
  cilMoney,
  cilPeople,
  cilLocationPin,
  cilSpeedometer,
  cilStar,
  cilClearAll,
  cilApps,
  cilUser,
  cilBook,
  cilMonitor,
  cilTask,
  cilNoteAdd,
  cilLibrary,
  cilTruck,
  cilSmilePlus,
  cilAddressBook,
  cilFile,
  cilClone,
  cilClipboard,
  cilCog,
  cilLayers,
  cilBalanceScale,
  cilStorage,
  cilGrain,
  cilBank,
  cilNotes,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const userType = 'adminit'

let menuItems = []

if (userType === 'adminit') {
  menuItems = [
        {
          component: CNavItem,
          name: 'Dashboard',
          to: '/dashboard',
          icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
        },
          
        {
          component: CNavItem,
          name: 'Karyawan',
          to: '/karyawan',
          icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
        },
      
        {
          component: CNavItem,
          name: 'Asset',
          to: '/asset',
          icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
        },
      
        {
          component: CNavItem,
          name: 'Program',
          to: '/program',
          icon: <CIcon icon={cilMonitor} customClassName="nav-icon" />,
        },
      
        {
          component: CNavItem,
          name: 'Report Wo',
          to: '/reportWo',
          icon: <CIcon icon={cilTask} customClassName="nav-icon" />,
        },
      
        {
          component: CNavItem,
          name: 'Jadwal Perawatan',
          to: '/jadwalPerawatan',
          icon: <CIcon icon={cilHistory} customClassName="nav-icon" />,
        },
      
        {
          component: CNavItem,
          name: 'Pemeliharaan Server',
          to: '/PemServer',
          icon: <CIcon icon={cilTerminal} customClassName="nav-icon" />,
        },
        {
          component: CNavTitle,
          name: 'Warehouse',
        },
      
        {
          component: CNavGroup,
          name: 'Warehouse',
          to: '/warehouse',
          icon: <CIcon icon={cilHouse} customClassName="nav-icon" />,
          items: [
            {
              component: CNavItem,
              name: 'Barang Masuk',
              to: '/barangmasuk',
            },
            {
              component: CNavItem,
              name: 'Barang Keluar',
              to: '/barangkeluar',
            },
          ],
        },
      
        {
          component: CNavItem,
          name: 'Stock',
          to: '/stock',
          icon: <CIcon icon={cilWindow} customClassName="nav-icon" />,
        },
      
        {
          component: CNavTitle,
          name: 'Admin HRGA',
        },
      
        // {
        //   component: CNavItem,
        //   name: 'Home Permintaan',
        //   to: '/homePermintaan',
        //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
        // },
      
        {
          component: CNavItem,
          name: 'Permintaan',
          to: '/permintaan',
          icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
        },
        {
          component: CNavItem,
          name: 'Soal',
          to: '/soal',
          icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,
       },
        {
          component: CNavItem,
          name: 'Data Bank Soal',
          to: '/bankSoal',
          icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
        },
      
        {
          component: CNavItem,
          name: 'Data Tamu',
          to: '/dataTamu',
          icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
        },
      
        {
          component: CNavItem,
          name: 'Hasil Survei',
          to: '/hasilSurvei',
          icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
        },
      
        {
          component: CNavItem,
          name: 'Saran',
          to: '/saran',
          icon: <CIcon icon={cilSmilePlus} customClassName="nav-icon" />,
        },
      
        {
          component: CNavTitle,
          name: 'Costing',
        },
      
        {
          component: CNavItem,
          name: 'Home Costing',
          to: '/homeCosting',
          icon: <CIcon icon={cilBalanceScale} customClassName="nav-icon" />,
        },
      
        // {
        //   component: CNavItem,
        //   name: 'Hitung',
        //   to: '/hitung',
        //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
        // },
      
        {
          component: CNavItem,
          name: 'Kertas',
          to: '/kertas',
          icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
        },
      
        {
          component: CNavItem,
          name: 'Mesin',
          to: '/mesin',
          icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
        },
      
        {
          component: CNavItem,
          name: 'Ukuran Kertas',
          to: '/ukuranKertas',
          icon: <CIcon icon={cilClone} customClassName="nav-icon" />,
        },
      
        {
          component: CNavItem,
          name: 'Biaya Finishing',
          to: '/biayaFinishing',
          icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
        },
      
        {
          component: CNavItem,
          name: 'Perlengkapan',
          to: '/perlengkapan',
          icon: <CIcon icon={cilStorage} customClassName="nav-icon" />,
        },
      
        {
          component: CNavItem,
          name: 'Plat',
          to: '/plat',
          icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
        },
      
        {
          component: CNavItem,
          name: 'Foil',
          to: '/foil',
          icon: <CIcon icon={cilGrain} customClassName="nav-icon" />,
        },
      
        {
          component: CNavItem,
          name: 'Pengiriman',
          to: '/pengiriman',
          icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
        },
      ]
    } else if (userType === 'adminhrga') {
      menuItems = [
      
        {
          component: CNavItem,
          name: 'Permintaan',
          to: '/permintaan',
          icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
        },
        {
          component: CNavItem,
          name: 'Soal',
          to: '/soal',
          icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
        },
        {
          component: CNavItem,
          name: 'Data Bank Soal',
          to: '/bankSoal',
          icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
        },
      
        {
          component: CNavItem,
          name: 'Data Tamu',
          to: '/dataTamu',
          icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
        },
      
        {
          component: CNavItem,
          name: 'Hasil Survei',
          to: '/hasilSurvei',
          icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
        },
      
        {
          component: CNavItem,
          name: 'Saran',
          to: '/saran',
          icon: <CIcon icon={cilSmilePlus} customClassName="nav-icon" />,
        },
      ]
    } else if (userType === 'admincosting') {
      menuItems = [
        {
              component: CNavItem,
              name: 'Home Costing',
              to: '/homeCosting',
              icon: <CIcon icon={cilBalanceScale} customClassName="nav-icon" />,
            },
          
            {
              component: CNavItem,
              name: 'Hitung',
              to: '/hitung',
              icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
            },
          
            {
              component: CNavItem,
              name: 'Kertas',
              to: '/kertas',
              icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
            },
          
            {
              component: CNavItem,
              name: 'Mesin',
              to: '/mesin',
              icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
            },
          
            {
              component: CNavItem,
              name: 'Ukuran Kertas',
              to: '/ukuranKertas',
              icon: <CIcon icon={cilClone} customClassName="nav-icon" />,
            },
          
            {
              component: CNavItem,
              name: 'Biaya Finishing',
              to: '/biayaFinishing',
              icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
            },
          
            {
              component: CNavItem,
              name: 'Perlengkapan',
              to: '/perlengkapan',
              icon: <CIcon icon={cilStorage} customClassName="nav-icon" />,
            },
          
            {
              component: CNavItem,
              name: 'Plat',
              to: '/plat',
              icon: <CIcon icon={cilLayers} customClassName="nav-icon" />,
            },
          
            {
              component: CNavItem,
              name: 'Foil',
              to: '/foil',
              icon: <CIcon icon={cilGrain} customClassName="nav-icon" />,
            },
          
            {
              component: CNavItem,
              name: 'Pengiriman',
              to: '/pengiriman',
              icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
            },
      ]
    } else if (userType === 'adminwh') {
    menuItems = [
      {
            component: CNavGroup,
            name: 'Warehouse',
            to: '/warehouse',
            icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
            items: [
              {
                component: CNavItem,
                name: 'Barang Masuk',
                to: '/barangmasuk',
              },
              {
                component: CNavItem,
                name: 'Barang Keluar',
                to: '/barangkeluar',
              },
            ],
          },
          {
            component: CNavItem,
            name: 'Stock',
            to: '/stock',
            icon: <CIcon icon={cilWindow} customClassName="nav-icon" />,
          },
    ]
  }

const _nav = [
  ...menuItems,
]
export default _nav
