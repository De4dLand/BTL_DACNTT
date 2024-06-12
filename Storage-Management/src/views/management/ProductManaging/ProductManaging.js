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
import axios from 'axios';
import ProductypeForm from './ProductTypeForm';

const ProductManaging = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData('tbCategory');
    })
    const fetchData = (tableName) => {
        fetch(`http://localhost:8081/${tableName}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    };

    const handleDelete = (tableName, id) => {
        axios.delete(`http://localhost:8081/delete/${tableName}/${id}`)
            .then(() => {
                fetchData(tableName); // Refresh data after deletion
            })
            .catch((err) => console.error(err));
    };
    return (<>
        <CRow>
            <ProductypeForm></ProductypeForm>
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
                                    <CTableHeaderCell scope="col">Chức Năng</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {data.map((d, i) =>
                                (
                                    <CTableRow>
                                        <CTableHeaderCell scope="row" key={i}>{i + 1}</CTableHeaderCell>
                                        <CTableDataCell>{d.Category_Name}</CTableDataCell>
                                        <CTableDataCell>{d.Category_Description}</CTableDataCell>
                                        <CTableDataCell>
                                            <CButton color="danger" onClick={() => handleDelete("tbCategory", d.Category_ID)}>Xóa</CButton>
                                            {/* <CButton color="danger" onClick={() => handleUpdate("tbCategory", d.Category_ID)}>Sửa</CButton> */}
                                        </CTableDataCell>
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

export default ProductManaging;
