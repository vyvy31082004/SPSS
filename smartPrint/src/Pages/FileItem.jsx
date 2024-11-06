import React from "react";
import styled from "styled-components";

const FileItem = ({ fileName }) => {
  return (
    <FileItemContainer>
      <FileName>{fileName}</FileName>
      <ViewButton>View</ViewButton>
      <ProgressBar />
      <ActionIcons>
        <ActionIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/abb223c999fc3b2442723d84658fdc21d2e52887c7dd3fad64113b76993b0d1e?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="Edit icon" />
        <ActionIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ae4d6e675c68b7bd1841304975db787c663f4950e07e93b3ff7d1a9df7b66e4?placeholderIfAbsent=true&apiKey=38ba977d7ba34b14bb717fb2f7e29757" alt="Delete icon" />
      </ActionIcons>
    </FileItemContainer>
  );
};

const FileItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 29px;
`;

const FileName = styled.div`
  color: rgba(0, 0, 0, 1);
  font: 400 20px/1 Segoe UI, sans-serif;
`;

const ViewButton = styled.button`
  background: none;
  border: none;
  color: rgba(0, 0, 0, 1);
  font: 400 20px/1 Segoe UI, sans-serif;
  cursor: pointer;
`;

const ProgressBar = styled.div`
  background-color: rgba(16, 140, 242, 0.67);
  width: 306px;
  height: 31px;
`;

const ActionIcons = styled.div`
  display: flex;
  gap: 18px;
`;

const ActionIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 37px;
`;

export default FileItem;