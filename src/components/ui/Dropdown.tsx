import { useState } from 'react';
const Dropdown = ({ label = 'Dropdown' }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);
    const menuClass = `dropdown-menu${isOpen ? ' show' : ''}`;

    return (
        <div className="dropdown" onClick={toggleOpen}>
            <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
            >
                {label}
            </button>
            <div className={menuClass} aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#nogo">
                    Item 1
                </a>
                <a className="dropdown-item" href="#nogo">
                    Item 2
                </a>
                <a className="dropdown-item" href="#nogo">
                    Item 3
                </a>
            </div>
        </div>
    );
};

export default Dropdown;
