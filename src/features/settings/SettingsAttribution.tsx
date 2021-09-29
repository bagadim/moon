import { Form, Field } from 'react-final-form';

const onSubmit = (values: any) => {
    console.log('Submit values:', values);
};

export default function SettingsAttribution() {
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-3">Big img here</div>
                        <div className="col-9">
                            <div className="form-group">
                                <label htmlFor="appName">App name</label>
                                <Field
                                    name="appName"
                                    type="text"
                                    component="input"
                                    className="form-control"
                                    id="appName"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="appleURL">Apple URL</label>
                                <Field
                                    name="appleUrl"
                                    type="url"
                                    className="form-control"
                                    component="input"
                                    id="appleURL"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="googlePlayUrl">
                                    Google Play URL
                                </label>
                                <Field
                                    name="googlePlayUrl"
                                    type="googlePlayUrl"
                                    className="form-control"
                                    id="googlePlayUrl"
                                    component="input"
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
                            <Field
                                name="provider"
                                component="select"
                                className="btn"
                            >
                                <option />
                                <option value="Balloon">Balloon</option>
                                <option value="Pepega">Pepega</option>
                                <option value="PepeSad">PepeSad</option>
                            </Field>
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
                            <Field
                                name="ignoredCreatives"
                                component="select"
                                className="btn"
                            >
                                <option />
                                <option value="Creative1">Creative1</option>
                                <option value="Creative2">Creative2</option>
                                <option value="Creative3">Creative3</option>
                            </Field>
                        </div>
                    </div>
                    <h4 className="mt-5">Form Values</h4>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
            )}
        />
    );
}
