import { useState } from 'react';

export default function Tabs(props: {
    tabs: Array<{ label: string; component: JSX.Element }>;
}) {
    console.log('Tabs props:', props);
    const [activeTab, setActiveTab] = useState(props.tabs[0]);
    const renderedNavTabs = props.tabs.map((tab) => {
        return (
            <li className="nav-item" key={tab.label}>
                <a
                    className={`nav-link ${
                        activeTab === tab ? 'active' : null
                    }`}
                    onClick={() => setActiveTab(tab)}
                    href="#"
                >
                    {tab.label}
                </a>
            </li>
        );
    });
    const activeComponent = activeTab.component;

    return (
        <div>
            <ul className="mt-5 nav nav-tabs">{renderedNavTabs}</ul>
            <div className="mt-5">{activeComponent}</div>
        </div>
    );
}
