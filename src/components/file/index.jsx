import React, { useRef } from 'react';
import { useEffect } from 'react';
import Icon from '../icon';
import { bytesToSize } from '../../helpers/string';

function File({ file, index, onRemove }) {
    const thumbnail = useRef('');

    useEffect(() => {
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            thumbnail.current.src = event.target.result;
        });

        reader.readAsDataURL(file);
        return () => {};
    }, [file]);

    const handleRemove = () => {
        onRemove(index);
    };

    return (
        <div className="w-full flex items-center p-4 gap-6 border-b">
            {/* <Icon name="file" /> */}
            <div className="w-14 h-14">
                <img
                    ref={thumbnail}
                    className="w-full h-full object-cover rounded-md border"
                    alt="file thumbnail"
                />
            </div>
            <div className="flex-1 overflow-hidden">
                <h4 className="title medium truncate">{file.name}</h4>
                <p className="text-gray-500 caption mt-1">
                    Original Size {bytesToSize(file.size)}
                </p>
            </div>
            <Icon
                name="trash"
                onClick={handleRemove}
                className="fill-red-600"
            />
        </div>
    );
}

export default React.memo(File);
