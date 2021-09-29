import React from 'react';
import Dropdown from '../components/ui/Dropdown';
import Navigation from '../components/Navigation';

const Design = () => {
    return (
        <div>
            <div className="container mt-2">
                <h2>Buttons</h2>
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-light">Light</button>
                <button className="btn btn-outline-playable">Playable</button>
                <button className="btn btn-outline-replay">
                    Outline Replay
                </button>
                <Dropdown />
            </div>
        </div>
    );
};

export default Design;
