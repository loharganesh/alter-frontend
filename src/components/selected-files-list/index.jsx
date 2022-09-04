import React from 'react';
import File from '../file';

function SelectedFilesList({ files, handleRemove }) {
    return (
        <div className="w-full grow overflow-y-scroll">
            {files.map((file, index) => (
                <File
                    file={file}
                    key={index}
                    onRemove={handleRemove}
                    index={index}
                />
            ))}
        </div>
    );
}

export default SelectedFilesList;
