import React from "react";
import styled from "styled-components";
import FileList from "./FileList";
import UploadButton from "./UploadButton";
import ActionButtons from "./ActionButtons";

const FileUploader = () => {
  return (
    <UploaderContainer>
      <UploaderContent>
        <UploadButton />
        <FileList />
        <ActionButtons />
      </UploaderContent>
    </UploaderContainer>
  );
};

const UploaderContainer = styled.div`
  display: flex;
  max-width: 798px;
  flex-direction: column;
`;

const UploaderContent = styled.div`
  background-color: rgba(128, 156, 172, 0.8);
  display: flex;
  width: 100%;
  padding: 0 35px 18px 80px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px 18px;
  }
`;

export default FileUploader;