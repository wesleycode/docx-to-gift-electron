import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { MdOutlineCloudUpload } from 'react-icons/md';
import { StringUtils } from '@renderer/application/common/utils/StringUtils';

const SelectFileButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
  /* Esconda o input file */
  display: none;
`;

const Text = styled.p<{color: string}>`
    color: ${(props) => props.color};
    font-size: 14px;
`;

const DropZone = styled.div<{ color: string, bordercolor: string; }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 100px;
    font-size: 14px;
    border: 1px dashed ${(props) => props.bordercolor};
    background: none;
    color: ${(props) => props.color};
    border-radius: 10px;
    gap: 10px;
`;

export function CustomSelectFile() {
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState('');

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragging(true);
  };

  function handleDragLeave() {
    setDragging(false);
  };

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setDragging(false);

    const files = event.dataTransfer.files;
    if (files) {
      handleFileChange(event.dataTransfer.files);
    }
  };

  function handleFileChange(fileList: FileList) {
    // Faça algo com o arquivo selecionado, como enviar para o servidor
    if (fileList.length === 1) {
      setFileName(fileList[0].name.slice(0, 10));
      console.log("File: " + fileList[0].path);
    } else {
      for (let x = 0 ; x < fileList.length ; x++) {
        console.log("File: " + fileList.item(x)?.path);
      }
      setFileName('Loaded multiple files...');
    }

  };

  return (
    <SelectFileButtonContainer>
      <Input id='fileInput' type='file' accept='.doc,.docx,.txt' onChange={(event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
          handleFileChange(files);
        }
      }} />
      <DropZone
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        color={dragging ? '#00ff88' : '#bebebe'}
        bordercolor={ dragging ? '#00ff88' : '#414141' }
      >
        <MdOutlineCloudUpload /> Drag files here...
      </DropZone>
      <Text color={fileName ? '#00ff88' : '#bebebe'}>{fileName ? `File: ${StringUtils.getConverterParaNomeDeArquivoResumido(fileName)}` : 'No file selected...'}</Text>
    </SelectFileButtonContainer>
  );
};