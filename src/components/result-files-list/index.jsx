import React from 'react';
import DownloadFile from '../download-file';

function ResultFilesList({ files }) {
    return (
        <div className="w-full grow overflow-y-scroll">
            {files.map((file, index) => (
                <DownloadFile file={file} key={index} index={index} />
            ))}
        </div>
    );
}

export default ResultFilesList;
