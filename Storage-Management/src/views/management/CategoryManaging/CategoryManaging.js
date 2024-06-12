import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const Managing = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8081/category')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  })
  return (<>
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Quản Lý Loại Sản Phẩm</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            <CInputGroup className="mb-3">
              <CInputGroupText id="basic-addon1">Tên Loại Sản Phẩm</CInputGroupText>
              <CFormInput
                placeholder="Tên Loại Sản Phẩm"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
              />
              <CInputGroupText id="basic-addon1">Mô tả</CInputGroupText>
              <CFormInput
                placeholder="Mô tả của Loại Sản Phẩm"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </CInputGroup>
          </CCardBody>
          <CButton
            color={'primary'}
            variant="outline"
          >
            Nhập Dữ Liệu
          </CButton>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Bảng Dữ Liệu</strong> <small>
            </small>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tên Loại Sản Phẩm</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Mô Tả</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Trạng Thái</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {data.map((d, i) =>
                (
                  <CTableRow>
                    <CTableHeaderCell scope="row" key={i}>{i + 1}</CTableHeaderCell>
                    <CTableDataCell>{d.Category_Name}</CTableDataCell>
                    <CTableDataCell>{d.Category_Description}</CTableDataCell>
                    <CTableDataCell>{d.status}</CTableDataCell>
                  </CTableRow>
                )
                )}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow >
  </>
  )
}

export default Managing;
