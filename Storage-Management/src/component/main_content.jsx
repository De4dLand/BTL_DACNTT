import React from "react";
import '../global.scss';
import Show_Feature from "./Show_Feature";
function Main_Content() {
    return (
        <>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    {/* Shop Sidebar Start */}
                    <div className="col-lg-3 col-md-12 border">
                        {/* Danh sách các chức năng ở đây */}
                        <Show_Feature></Show_Feature>
                    </div>
                    {/* Shop Sidebar End */}
                    {/* Shop Product Start */}
                    <div className="col-lg-9 col-md-12 border">
                        <div className="row pb-3 border">
                            <div className="col-12 pb-1 border">
                                {/* Hiển thị Biểu mẫu nhập thông tin ở đây */}
                            </div>
                            <div>
                                {/* Hiển thị bảng Thông Tin ở đây */}
                            </div>
                        </div>
                    </div>
                    {/* Shop Product End */}
                </div>
            </div>

        </>
    )
}
export default Main_Content;