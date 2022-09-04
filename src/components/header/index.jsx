import React from 'react';
import Icon from '../icon';
import Spinner from '../spinner';

function Header({ converting }) {
    return (
        <div className="px-4 py-3 flex items-center justify-end border-b">
            <button
                type="submit"
                form="form-files"
                className="button secondary"
                disabled={converting}
            >
                {!converting && <Icon name="shredder" className={`[ -m-3 ]`} />}
                {converting ? '' : 'Convert'}
                {converting && <Spinner variant="secondary" />}
            </button>
        </div>
    );
}

export default Header;
