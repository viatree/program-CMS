import { elements } from 'chart.js'
import React from 'react'

// Dashboard
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const logactivity = React.lazy(() => import('./views/dashboard/logactivity'))

//dashboard IT
const asset = React.lazy(() => import('./views/adminit/asset'))

const divs = React.lazy(() => import('./views/adminit/div'))
const divsForm = React.lazy(() => import('./views/adminit/divForm'))

const homeAsset = React.lazy(() => import('./views/adminit/homeAsset'))
const jadwalPerawatan = React.lazy(() => import('./views/adminit/jadwalPerawatan'))

const karyawan = React.lazy(() => import('./views/adminit/karyawan'))
const karyawanForm = React.lazy(() => import('./views/adminit/karyawanForm'))

const kategori = React.lazy(() => import('./views/adminit/kategori'))
const kategoriForm = React.lazy(() => import('./views/adminit/kategoriForm'))

const lokasi = React.lazy(() => import('./views/adminit/lokasi'))
const lokasiForm = React.lazy(() => import('./views/adminit/lokasiForm'))


// const menu = React.lazy(() => import('./views/adminit/menu'))
const pemeliharaanServer = React.lazy(() => import('./views/adminit/pemServer'))
const program = React.lazy(() => import('./views/adminit/program'))
const reportWo = React.lazy(() => import('./views/adminit/reportWo'))
// const subMenu = React.lazy(() => import('./views/adminit/subMenu'))
// const user = React.lazy(() => import('./views/adminit/user'))

// HRGA
const homePermintaan = React.lazy(() => import('./views/hrga/homePermintaan'))
const permintaan = React.lazy(() => import('./views/hrga/permintaan'))
const bankSoal = React.lazy(() => import('./views/hrga/bankSoal'))
const dataTamu = React.lazy(() => import('./views/hrga/dataTamu'))
const hasilSurvei = React.lazy(() => import('./views/hrga/hasilSurvei'))
const saran = React.lazy(() => import('./views/hrga/saran'))
const soal = React.lazy(() => import('./views/hrga/soal'))

// Costing
const homeCosting = React.lazy(() => import('./views/costing/homeCosting'))
const hitung = React.lazy(() => import('./views/costing/hitung'))
const kertas = React.lazy(() => import('./views/costing/kertas'))
const mesin = React.lazy(() => import('./views/costing/mesin'))
const ukuranKertas = React.lazy(() => import('./views/costing/ukuranKertas'))
const biayaFinishing = React.lazy(() => import('./views/costing/biayaFinishing'))
const perlengkapan = React.lazy(() => import('./views/costing/perlengkapan'))
const plat = React.lazy(() => import('./views/costing/plat'))
const foil = React.lazy(() => import('./views/costing/foil'))
const pengiriman = React.lazy(() => import('./views/costing/pengiriman'))

// Warehouse
const barangmasuk = React.lazy(() => import('./views/warehouse/barangmasuk'))
const barangkeluar = React.lazy(() => import('./views/warehouse/barangkeluar'))
const stock = React.lazy(() => import('./views/warehouse/stock'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/logactivity', name: 'logactivity', element: logactivity },

  //  IT Department
  { path: '/asset', name: 'Asset', element: asset },

  { path: '/div', name: 'Div', element: divs, exact:true },
  { path: '/div/add', name: 'Add Lokasi', element: divsForm },
  { path: '/div/edit/:id', name: 'Edit Lokasi', element: divsForm},


  { path: '/homeAsset', name: 'Home Asset', element: homeAsset },
  { path: '/jadwalPerawatan', name: 'Jadwal Perawatan', element: jadwalPerawatan },

  { path: '/karyawan', name: 'Karyawan', element: karyawan },
  { path: '/karyawan/add', name: 'Add Karyawan', element: karyawanForm },
  { path: '/karyawan/edit/:id', name: 'Edit Karyawan', element: karyawanForm},


  { path: '/kategori', name: 'Kategori', element: kategori, exact:true },
  { path: '/kategori/add', name: 'Add Kategori', element: kategoriForm },
  { path: '/kategori/edit/:id', name: 'Edit Kategori', element: kategoriForm},

  { path: '/lokasi', name: 'Lokasi', element: lokasi, exact:true },
  { path: '/lokasi/add', name: 'Add Lokasi', element: lokasiForm },
  { path: '/lokasi/edit/:id', name: 'Edit Lokasi', element: lokasiForm},

  // { path: '/menu', name: 'Menu', element: menu },
  { path: '/pemServer', name: 'Pemeliharaan Server', element: pemeliharaanServer },
  { path: '/program', name: 'Program', element: program },
  { path: '/reportWo', name: 'Report WO', element: reportWo },
  // { path: '/subMenu', name: 'Sub Menu', element: subMenu },
  // { path: '/user', name: 'User', element: user },
  
  // AdminHRGA Department
  { path: '/homePermintaan', name: 'Home Permintaan', element: homePermintaan },
  { path: '/permintaan', name: 'Permintaan', element: permintaan },
  { path: '/bankSoal', name: 'Data Bank Soal', element: bankSoal },
  { path: '/dataTamu', name: 'Data Tamu', element: dataTamu },
  { path: '/hasilSurvei', name: 'Hasil Survei', element: hasilSurvei },
  { path: '/saran', name: 'Saran', element: saran },
  { path: '/soal', name: 'Soal', element: soal },

  // Costing Department
  { path: '/homeCosting', name: 'Home Costing', element: homeCosting },
  { path: '/hitung', name: 'Hitung', element: hitung },
  { path: '/kertas', name: 'Kertas', element: kertas },
  { path: '/mesin', name: 'Mesin', element: mesin },
  { path: '/ukuranKertas', name: 'Ukuran Kertas', element: ukuranKertas },
  { path: '/biayaFinishing', name: 'Biaya Finishing', element: biayaFinishing },
  { path: '/perlengkapan', name: 'Perlengkapan', element: perlengkapan },
  { path: '/plat', name: 'Plat', element: plat },
  { path: '/foil', name: 'Foil', element: foil },
  { path: '/pengiriman', name: 'Pengiriman', element: pengiriman },

  // Warehouse //
  { path: '/barangmasuk', name: 'Barang Masuk', element: barangmasuk },
  { path: '/barangkeluar', name: 'Barang Keluar', element: barangkeluar },
  { path: '/stock', name: 'Stock', element: stock },
]
export default routes
