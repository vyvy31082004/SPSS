import React from "react";
import styled from "styled-components";
import FileItem from "./FileItem";

const FileList = () => {
  const files = [
    { name: "CNPM.pdf", date: "T10/2024" },
    { name: "TN5.pdf", date: "" },
    { name: "MMT.pdf", date: "" },
  ];

  return (
    <FileListContainer>
      <UploadIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b7ec2dddf1ca2f25150ee29fcd08f65cb9a03b31217ed7a2c00555b3e0d0614?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="Upload icon" />
      <UploadText>Tải file</UploadText>
      <DateText>T10/2024</DateText>
      {files.map((file, index) => (
        <FileItem key={index} fileName={file.name} />
      ))}
    </FileListContainer>
  );
};

const FileListContainer = styled.div`
  display: flex;
  margin-top: 23px;
  width: 100%;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const UploadIcon = styled.img`
  aspect-ratio: 1.09;
  object-fit: contain;
  width: 120px;
  align-self: center;
  max-width: 100%;
`;

const UploadText = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: center;
  margin-top: 28px;
  font: 400 36px/1 Segoe UI, sans-serif;
`;

const DateText = styled.div`
  color: rgba(0, 0, 0, 1);
  align-self: start;
  margin-top: 27px;
  font: 400 24px/0.8 Roboto, sans-serif;
`;

export default FileList;