import { Resource } from "pages/api/Resource";

interface ResourceListProps {
  resources: Resource[];
}

const ResourceList = (props: ResourceListProps) => {
  return (
    <section className="hero ">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-multiline is-variable is-8">
            {props.resources.map((resource) => (
              <div key={resource.id} className="column is-5 is-offset-1 ">
                <div className="content is-medium">
                  <h2 className="subtitle is-5 has-text-grey">
                    {resource.createdAt}
                  </h2>
                  <h1 className="title has-text-black is-3">
                    {resource.title}
                  </h1>
                  <p className="has-text-dark">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceList;
