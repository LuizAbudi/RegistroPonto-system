const universalBOM = "\uFEFF";

export const downloadFile = ({ filename, content, contentType }) => {
  const blob = new Blob([content], { type: contentType });

  if (window.navigator.msSaveOrOpenBlob) {
    // For IE
    window.navigator.msSaveBlob(blob, filename);
  } else {
    // For onthers browsers
    const elem = window.document.createElement("a");
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
};

export const downloadCsv = ({ filename, content }) => {
  return downloadFile({
    filename,
    content: universalBOM + content,
    contentType: "text/csv",
  });
};

export const downloadPdf = ({ filename, content }) => {
  return downloadFile({
    filename,
    content,
    contentType: "application/pdf",
  });
};




