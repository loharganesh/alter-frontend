import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Icon from '../icon';
import { bytesToSize, getFileSizeFromBase64 } from '../../helpers/string';

function DownloadFile({ file, index }) {
    return (
        <div className="w-full flex items-center p-4 gap-6 border-b">
            {/* <Icon name="file" /> */}
            <div className="w-14 h-14">
                <img
                    src={`data:image/webp;base64,${file.base64Image}`}
                    className="w-full h-full object-cover rounded-md border"
                />
            </div>
            <div className="flex-1 overflow-hidden">
                <h4 className="title medium truncate">{file.name}</h4>
                <p className="text-gray-500">
                    Converted Size{' '}
                    {bytesToSize(
                        getFileSizeFromBase64(file.base64Image.length)
                    )}
                </p>
            </div>
            <a
                className="button secondary"
                href={`data:image/webp;base64,${file.base64Image}`}
                download={`alter_${file.name}`}
            >
                <Icon name="download" className="-m-3" />
                Download
            </a>
        </div>
    );
}

export default React.memo(DownloadFile);
