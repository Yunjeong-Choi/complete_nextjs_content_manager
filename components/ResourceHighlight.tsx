import { Resource } from "pages/api/Resource";

interface ResourceHighlightProps {
  resources: Resource[];
}

const ResourceHighlight = (props: ResourceHighlightProps) => {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          {props.resources.map((resource) => (
            <section key={resource.id} className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">{resource.createdAt}</h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceHighlight;
