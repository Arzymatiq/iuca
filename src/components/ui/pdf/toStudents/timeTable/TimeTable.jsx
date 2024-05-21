import React from "react";
import PDFViewer from "./PDFViewer";

function TimeTable() {
    return (
        <div className="TimeTable">
            <PDFViewer filePath="./time-table-fall-2023g.docx.pdf" />
        </div>
    );
}

export default TimeTable;
