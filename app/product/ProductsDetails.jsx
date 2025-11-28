import styles from "@/app/product/Product.module.css";

export default function ProductsDetails({ data }) {
  const ratingNum = Number(data?.rating ?? 0);
  const filledStars = Math.floor(Math.min(Math.max(ratingNum, 0), 5));
  const totalStars = 5;

  return (
    <div
      className={`${styles.product_main} align-items-center mb-5 text-decoration-none justify-content-center flex-wrap`}
    >
      <img
        className={`${styles.product_img} mb-3 mb-sm-0`}
        src={data.image}
        alt={data.title}
      />

      <div style={{ width: "500px" }}>
        <h4 className="text-white mb-3">{data.title}</h4>
        <hr style={{ borderColor: "white" }} />

        <div
          style={{
            display: "flex",
            gap: "6px",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {Array.from({ length: totalStars }).map((_, i) => (
            <i
              key={i}
              className={`fa-solid fa-star ${i < filledStars ? styles.fill_star : ""}`}
              style={{ opacity: i < filledStars ? 1 : 0.3 }}
            ></i>
          ))}

          <span style={{ color: "#fff", marginLeft: "10px" }}>
            {ratingNum} / 5
          </span>
        </div>

        <div className={styles.price_details} style={{ marginTop: "12px" }}>
          {data.off && data.off > 0 ? (
            <>
              <p style={{ color: "white", fontWeight: "bold" }}>
                ${(data.price - (data.price * data.off) / 100).toFixed(2)}
              </p>
              <p style={{ color: "red", textDecoration: "line-through" }}>
                ${data.price.toFixed(2)}
              </p>
            </>
          ) : (
            <p style={{ color: "white", fontWeight: "bold" }}>
              ${data.price.toFixed(2)}
            </p>
          )}
        </div>

        <p style={{ color: "#fff" }} className="m-0 pr-5">
          {data.desc}
        </p>

        <button className={styles.shopping_btn} style={{ marginTop: "12px" }}>
          buy <i className="fa-solid fa-bag-shopping ml-2"></i>
        </button>
      </div>
    </div>
  );
}
