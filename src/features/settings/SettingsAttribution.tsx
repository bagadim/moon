import { Component } from 'react';
import Dropdown from '../../components/ui/Dropdown';

export default class SettingsAttribution extends Component {
    render() {
        return (
            <form>
                <div className="row">
                    <div className="col-3">Big img here</div>
                    <div className="col-9">
                        <div className="form-group">
                            <label htmlFor="appName">App name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="appName"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="appleURL">Apple URL</label>
                            <input
                                type="url"
                                className="form-control"
                                id="appleURL"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="googlePlayUrl">
                                Google Play URL
                            </label>
                            <input
                                type="googlePlayUrl"
                                className="form-control"
                                id="googlePlayUrl"
                                aria-describedby="emailHelp"
                            />
                        </div>
                    </div>
                </div>
                <h5 className="mt-5">Attribution settings</h5>

                <div className="form-group row">
                    <label
                        htmlFor="staticEmail"
                        className="col-sm-3 col-form-label"
                    >
                        Provider
                    </label>
                    <div className="col-sm-9">
                        <Dropdown label="None" />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="inputPassword"
                        className="col-sm-3 col-form-label"
                    >
                        Ignored creatives
                    </label>
                    <div className="col-sm-9">
                        <Dropdown label="No creatives" />
                    </div>
                </div>
            </form>
        );
    }
}
