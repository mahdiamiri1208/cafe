# ☕ Coffee Shop Website  
A modern, responsive, and fully client-side coffee shop website built with **Next.js**, **React**, **JSON database** using `db.json` (json-server).  
The project includes dynamic product pages, discount handling, rating display, Swiper sliders, responsive UI, and modular component architecture.

---

## ⭐ Features

- Fully responsive modern UI
- Dynamic product details page
- Discount calculation (old price + new price)
- Star-based rating system
- Swiper slider with navigation
- Category-based menu with dynamic routing
- Clean folder structure and reusable components
- Local mock database using `db.json`
- No backend required (json-server acts as API)
- Optimized for performance and scalability

---

## 🚀 Tech Stack

| Technology | Description |
|-----------|-------------|
| **Next.js 16** | App Router, dynamic routes, server & client components |
| **React 19** | Component-driven UI |
| **json-server** | Lightweight mock API via `db.json` |
| **Swiper.js** | Interactive image slider |
| **CSS Modules** | Scoped component styling |
| **Font Awesome** | Icons |

---

## 🗂 Project Structure

```
app/
│   globals.css
│   layout.jsx
│   page.jsx
│
├── about/
│   └── page.jsx
├── contact/
│   └── page.jsx
├── home/
│   └── components/
│       ├── home newsletter section/
│       │   └── HomeNewsletter.jsx
│       └── home slider section/
│           ├── HomeSliderSection.jsx
│           ├── HomeSliderSection.module.css
│           └── carousel-1.jpg, carousel-2.jpg
├── menu/
│   └── page.jsx
├── product/
│   ├── Comments.jsx
│   ├── Product.module.css
│   ├── ProductsDetails.jsx
│   └── [productId]/page.jsx
├── reservation/
│   └── page.jsx
├── search/
│   └── page.jsx
├── services/
│   └── page.jsx
├── testimonial/
│   └── page.jsx
└── components/
    ├── about section/      (AboutSection.jsx)
    ├── book table/         (BookTable.jsx)
    ├── comment/            (Comment.jsx + CommentItem.jsx)
    ├── footer/             (Footer.jsx + Footer.module.css)
    ├── header/             (Header.jsx + Header.module.css)
    ├── menu section/       (Menu.jsx + MenuItem.jsx)
    ├── navbar/             (Navbar.jsx + Navbar.module.css)
    └── our services section/ (Services.jsx + ServiceItem.jsx)

```

---

## 📦 Installation & Setup

### 1) Clone the repository
```bash
git clone https://https://github.com/mahdiamiri1208/cafe
cd coffee-shop
```

### 2) Install dependencies
```bash
npm install
```

### 3) Run JSON Server (Local API)
```bash
npx json-server --watch db.json --port 4000
```

API will be available at:

```
http://localhost:4000/menu
```

### 4) Start Next.js App
```bash
npm run dev
```

---

## 📁 Local Database (db.json)

Data example:

```json
{
  "menu": [
    {
      "category": "Hot Coffee",
      "items": [
        {
          "id": 1,
          "title": "Hot Chocolate",
          "price": 5,
          "rating": 4,
          "off": 20,
          "image": "/home-menu/menu-3.jpg"
        }
      ]
    }
  ]
}
```

---

## 🔥 Dynamic Discount System

<details>
  <summary><b>Click to view logic</b></summary>

The app checks if a product has a discount (off%).  
If yes → it displays:

- Old price (red + line-through)
- New price (white)

Example:

```javascript
{data.off ? (
  <>
    <p>${(data.price - (data.price * data.off) / 100).toFixed(2)}</p>
    <p style={{ color: "red", textDecoration: "line-through" }}>
      ${data.price.toFixed(2)}
    </p>
  </>
) : (
  <p>${data.price.toFixed(2)}</p>
)}
```

</details>

---

## 🎠 Homepage Swiper Slider

Using Swiper.js with Navigation module:

```jsx
<Swiper loop={true} navigation={true} modules={[Navigation]}>
  <SwiperSlide style={{ backgroundImage: `url(${carousel1.src})` }} />
</Swiper>
```

---

## ⭐ Rating System

Dynamic star generation:

```jsx
{Array.from({ length: 5 }).map((_, i) => (
  <i key={i} className={`fa-star ${i < rating ? "filled" : ""}`} />
))}
```

---

## 🛠 Scripts

```
npm run dev        # Run Next.js
npm run build      # Production build
npm start          # Start after build
json-server        # Mock API server
```

---


## 🤝 Contributing

Pull requests are welcome.  
For major changes, please open an issue first to discuss what you would like to modify.

---

## 📄 License

This project is open-source and available under the **MIT License**.

