import { categories } from "@/lib/data";

export default function Categories() {
  return (
    <section className="categories section">
      <div className="container">
        <div className="categories-grid">
          {categories.map((cat) => (
            <div className="category-card reveal-up" key={cat.title}>
              <span className="category-icon">{cat.icon}</span>
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}