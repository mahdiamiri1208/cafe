import ProductsDetails from "@/app/product/ProductsDetails";
import Comments from "../Comments";
import styles from "../Product.module.css";

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

  const res = await fetch("https://cafe-db.vercel.app/menu", { cache: "no-store" });
  if (!res.ok) {
    return <div style={{ color: "white" }}>Failed to fetch menu</div>;
  }
  const data = await res.json();

  const allItems = data.flatMap((category) => category.items || []);
  const product = allItems.find((item) => Number(item.id) === productId);


  if (!product) {
    return (
      <>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            background: `linear-gradient(rgba(51,33,29,0.9), rgba(51,33,29,0.9)), url(/productbg.avif)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding:"350px"
          }}
        >
          <h1 className="text-white">Product not found</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.productContainer}>
        <ProductsDetails data={product} />
      </div>
      <Comments data={product.comments || []} />
    </>
  );
}
