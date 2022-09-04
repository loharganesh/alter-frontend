import React from 'react';

const style = {
    primary: 'text-white fill-white',
    secondary: 'text-[#000000] fill-[#000000]',
    danger: 'text-white fill-white',
};

function Spinner(props) {
    const { size = 'w-[22px] h-[22px]', variant = 'primary' } = props;

    return (
        <svg
            fill="none"
            className={`[ ${size} animate-spin ${style[variant]} ]`}
            viewBox="0 0 28 28"
        >
            <path
                d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zM4.049 14c0 5.496 4.455 9.951 9.951 9.951s9.951-4.455 9.951-9.951S19.496 4.049 14 4.049 4.049 8.504 4.049 14z"
                fillOpacity={0.1}
            />
            <path d="M28 14a14 14 0 01-15.268 13.942l.358-3.93A10.054 10.054 0 0024.053 14H28z" />
        </svg>
    );
}

export default Spinner;
