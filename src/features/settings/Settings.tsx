import { Component } from 'react';
import SettingsAttribution from './SettingsAttribution';
import SettingsEvents from './SettingsEvents';
import Tabs from '../../components/ui/Tabs';
export default class Settings extends Component<{}, { activeTab: string }> {
    tabs = [
        { label: 'Attribution', component: <SettingsAttribution /> },
        { label: 'Events', component: <SettingsEvents /> }
    ];

    onNavTabClick(tabName: string) {
        this.setState({ activeTab: tabName });
    }

    render() {
        return (
            <div className="container">
                <h3>Playable - Settings</h3>
                <Tabs tabs={this.tabs} />
            </div>
        );
    }
}
