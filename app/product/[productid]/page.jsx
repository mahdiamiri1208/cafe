import ProductsDetails from "@/app/product/ProductsDetails";
import Comments from "../Comments";

export default async function Page({ params }) {
  const resolvedParams = await params;
  const productIdStr = resolvedParams?.productId;

  if (!productIdStr) {
    return <div style={{ color: "white" }}>Invalid product ID</div>;
  }

  const productId = Number(productIdStr);
  if (isNaN(productId)) {
    return <div style={{ color: "white" }}>Product ID is not a number</div>;
  }

  const res = await fetch("http://localhost:4000/menu", { cache: "no-store" });
  if (!res.ok) {
    return <div style={{ color: "white" }}>Failed to fetch menu</div>;
  }
  const data = await res.json();

  const allItems = data.flatMap((category) => category.items || []);
  console.log("all items:", allItems);
  const product = allItems.find((item) => Number(item.id) === productId);

  console.log("searched id:", productId, "found product:", product);

  if (!product) {
    return (
      <>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            background:
              "linear-gradient(rgba(51, 33, 29, 0.9), rgba(51, 33, 29, 0.9)), url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1350&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "370px",
          }}
        >
          <h1 className="text-white">Product not found</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(rgba(51, 33, 29, 0.9), rgba(51, 33, 29, 0.9)), url(https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1350&q=80)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "150px",
        }}
      >
        <ProductsDetails data={product} />
      </div>
      <Comments data={product.comments || []} />
    </>
  );
}
