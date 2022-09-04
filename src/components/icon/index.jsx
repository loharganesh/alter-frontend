import * as React from 'react';
import icons from './paths';

const Icon = (props) => {
    const { name = '', className, type = 'line', onClick } = props;
    return (
        <svg
            onClick={onClick}
            className={`${className} min-w-[22px] min-h-[22px] w-[22px] h-[22px] fill-gray-800 cursor-pointer`}
            viewBox="0 0 24 24"
            fill="none"
        >
            <path fillRule="evenodd" clipRule="evenodd" d={icons[type][name]} />
        </svg>
    );
};

export default Icon;
