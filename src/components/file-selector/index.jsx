import React from 'react';
import Icon from '../icon';

function FileSelector({ onSelect, onSubmit, converting }) {
    return (
        <form
            id="form-files"
            className={`
                [ px-6 py-8 border border-dashed border-gray-300 hover:border-gray-400 duration-150 rounded-md flex flex-col items-center justify-center gap-4 ]
            `}
            onSubmit={onSubmit}
        >
            <Icon name="folder" className="w-[48px] h-[48px]" />
            <div>
                <h4 className="title medium text-center">
                    Select Images from your Computer
                </h4>
                <p className="text-center text-slate-500">Max Size 5MB</p>
            </div>
            <input
                id="files"
                name="files"
                type="file"
                multiple
                onChange={onSelect}
                className="hidden"
                disabled={converting}
            />
            <label
                htmlFor="files"
                className="button primary cursor-pointer"
                tabIndex={0}
            >
                Select Images
            </label>
        </form>
    );
}

export default FileSelector;
