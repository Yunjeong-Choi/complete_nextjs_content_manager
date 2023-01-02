import Layout from "components/Layout";
import { useState } from "react";

enum KEY_OF_DATA {
  TITLE = "title",
  DESCRIPTION = "description",
  LINK = "link",
  PRIORITY = "priority",
  TIME_TO_FINISH = "timeToFinish",
}

const DEFAULT_DATA = {
  [KEY_OF_DATA.TITLE]: "",
  [KEY_OF_DATA.DESCRIPTION]: "",
  [KEY_OF_DATA.LINK]: "",
  [KEY_OF_DATA.PRIORITY]: "2",
  [KEY_OF_DATA.TIME_TO_FINISH]: 60,
};

const ResourceCreate = () => {
  const [form, setForm] = useState(DEFAULT_DATA);

  const handleValueChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitForm = () => {
    alert(JSON.stringify(form));
  };

  const resetForm = () => setForm(DEFAULT_DATA);

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div className="resource-form">
              <h1 className="title">Add New Resource</h1>
              <form>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name={KEY_OF_DATA.TITLE}
                      placeholder="Learn Next JS and Sanity IO"
                      value={form.title}
                      onChange={handleValueChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={KEY_OF_DATA.DESCRIPTION}
                      placeholder="Learn these technologies because they are very popular and enable better SEO"
                      value={form.description}
                      onChange={handleValueChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Link</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name={KEY_OF_DATA.LINK}
                      placeholder="https://www.google.com"
                      value={form.link}
                      onChange={handleValueChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Priority</label>
                  <div className="control">
                    <div className="select">
                      <select
                        name={KEY_OF_DATA.PRIORITY}
                        value={form.priority}
                        onChange={handleValueChange}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <label className="label">Time to finish</label>
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      name={KEY_OF_DATA.TIME_TO_FINISH}
                      placeholder="60"
                      value={form.timeToFinish}
                      onChange={handleValueChange}
                    />
                  </div>
                  <p className="help">Time is in minutes</p>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button
                      className="button is-link"
                      type="button"
                      onClick={submitForm}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="control">
                    <button
                      className="button is-link is-light"
                      type="button"
                      onClick={resetForm}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
