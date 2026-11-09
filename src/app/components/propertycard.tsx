type Property = {
  number: string;
  title: string;
  location: string;
  price: string;
  image: string;
  tag: string;
};

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="property-card">
      <div className="property-photo" style={{ backgroundImage: `url("${property.image}")` }}>
        <span className="property-tag">{property.tag}</span>
        <span className="property-number">{property.number}</span>
      </div>
      <div className="property-details">
        <div><h3>{property.title}</h3><p>{property.location}</p></div>
        <strong>{property.price}</strong>
      </div>
    </article>
  );
}
