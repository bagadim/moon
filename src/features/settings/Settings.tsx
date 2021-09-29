import { Component } from 'react';
import SettingsAttribution from './SettingsAttribution';
import SettingsEvents from './SettingsEvents';
import Tabs from '../../components/ui/Tabs';
const settingsTabs = [
    { label: 'Attribution', component: <SettingsAttribution /> },
    { label: 'Events', component: <SettingsEvents /> }
];
export default class Settings extends Component {
    render() {
        return (
            <div className="container">
                <h3>Playable - Settings</h3>
                <Tabs tabs={settingsTabs} />
            </div>
        );
    }
}
