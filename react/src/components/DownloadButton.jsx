const DownloadButton = ({ fileName, fileUrl }) => {
    const handleDownload = () => {
      // Получаем имя файла из URL
      const fileName = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
  
      fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement('a');
          link.href = url;
          // Используем имя файла из URL для атрибута download
          link.setAttribute('Download', fileName);
          document.body.appendChild(link);
          link.click();
          link.parentNode.removeChild(link);
        })
        .catch(error => console.error('Error downloading file:', error));
    };
  
    return (
      <button className="bg-almost-black text-white text-center py-2 px-4 rounded-full w-full block tracking-wider border-almost-black border hover:bg-almost-white hover:text-almost-black cursor-pointer w-max text-[0.85rem] mt-2 md:-mt-4" onClick={handleDownload}>Download {fileName}</button>
    );
  };
  
  export default DownloadButton;
  