import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { usePrintSettings } from "./PageSetting/PrintSettingContext"; // Import context

const Print = () => {
  const [files, setFiles] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState("");
  const { printSettings, savePrintSettings } = usePrintSettings(); // Lấy hàm từ context
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy file được chọn
    axios
      .get("http://localhost:5000/files/selected")
      .then((res) => setSelectedFileName(res.data?.fileName || ""))
      .catch(() => setSelectedFileName("")); // Nếu không có file được chọn
  }, []);

  const handlePrint = async () => {
    try {
      // Lưu cài đặt in
      await savePrintSettings();
      alert("Cài đặt in đã được lưu thành công!");

      // Điều hướng đến trang xác nhận hoặc thực hiện in
      console.log("Settings:", printSettings); // Kiểm tra cài đặt
    } catch (error) {
      console.error("Error while saving print settings:", error);
      alert("Có lỗi xảy ra khi lưu cài đặt in.");
    }
  };

  return (
    <div className="d-flex flex-column p-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1>IN</h1>
        <h4>Phan Thao Vy</h4>
      </div>
      <section className="" style={{ backgroundColor: "white", padding: "24px" }}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5>TỆP</h5>
          <h5>Số trang hiện tại: </h5>
        </div>
        <hr />
        <div style={{ minHeight: "200px" }}>
          <div className="d-flex justify-content-evenly pt-5">
            <div onClick={() => navigate("/Print/Upload")} className="btn btn-primary btn-lg">
              Chọn tệp
            </div>
            <div>{selectedFileName || "Chưa có tệp nào được chọn"}</div>
            <div onClick={handlePrint} className="btn btn-primary btn-lg">
              In
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Print;
