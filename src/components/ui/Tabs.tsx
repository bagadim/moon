import { useState } from 'react';

interface PropsTabs {
    tabs: Array<{ label: string; component: JSX.Element }>;
}

export default function Tabs({ tabs }: PropsTabs) {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const renderedNavTabs = tabs.map((tab) => {
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
