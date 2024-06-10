import Dropdown from 'react-bootstrap/Dropdown';
import React from "react";
function Show_Feature() {
    return (
        <>
            <h4>Danh sách chức năng</h4>
            <Dropdown className="d-inline ">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                    Tên Nhóm Chức Năng
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Chức Năng 1</Dropdown.Item>
                    <Dropdown.Item href="#">Chức Năng 2</Dropdown.Item>
                    <Dropdown.Item href="#">Chức Năng 3</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}
export default Show_Feature;