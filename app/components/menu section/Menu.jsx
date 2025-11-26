import HomeMenuItem from "./MenuItem";

export default async function HomeMenu() {
  const res = await fetch("http://localhost:4000/menu", {
    next: { revalidate: 60 * 60 * 12 },
  });
  const menuCategories = await res.json();

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Menu & Pricing
          </h4>
          <h1 className="display-4">Competitive Pricing</h1>
        </div>
        <div className="row">
          {menuCategories.map((category, idx) => (
            <div className="col-lg-6" key={idx}>
              <h2 className="mb-4">{category.category}</h2>
              {category.items.map((item) => (
                <div className="row align-items-center mb-5" key={item.id}>
                  <HomeMenuItem
                    title={item.title}
                    desc={item.desc}
                    image={item.image}
                    price={item.price}
                    id={item.id}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
