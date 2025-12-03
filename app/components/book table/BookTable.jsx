"use client";

import { useState } from "react";

export default function HomeBookTable() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    person: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://cafe-db.vercel.app/book-table", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok === true) {
      // اگر درخواست موفق بود
      setForm({
        name: "",
        email: "",
        date: "",
        time: "",
        person: "",
      });
    }
  };

  return (
    <div className="container-fluid my-5">
      <div className="container">
        <div className="reservation position-relative overlay-top overlay-bottom">
          <div className="row align-items-center">
            {/* LEFT TEXT */}
            <div className="col-lg-6 my-5 my-lg-0">
              <div className="p-5">
                <div className="mb-4">
                  <h1 className="display-3 text-primary">30% OFF</h1>
                  <h1 className="text-white">For Online Reservation</h1>
                </div>

                <p className="text-white">
                  Lorem justo clita erat lorem labore ea, justo dolor lorem
                  ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo
                  sed sed diam. Ea et erat ut sed diam sea
                </p>

                <ul className="list-inline text-white m-0">
                  <li className="py-2">
                    <i className="fas fa-check text-primary mr-3"></i>Lorem
                    ipsum dolor sit amet
                  </li>
                  <li className="py-2">
                    <i className="fas fa-check text-primary mr-3"></i>Lorem
                    ipsum dolor sit amet
                  </li>
                  <li className="py-2">
                    <i className="fas fa-check text-primary mr-3"></i>Lorem
                    ipsum dolor sit amet
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="col-lg-6">
              <div
                className="text-center p-5"
                style={{ background: "rgba(51, 33, 29, .8)" }}
              >
                <h1 className="text-white mb-4 mt-5">Book Your Table</h1>

                <form className="mb-5" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      name="name"
                      type="text"
                      className="form-control bg-transparent border-primary p-4"
                      placeholder="Name"
                      value={form.name} // ← اضافه شد
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      name="email"
                      type="email"
                      className="form-control bg-transparent border-primary p-4"
                      placeholder="Email"
                      value={form.email} // ← اضافه شد
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <div className="date" data-target-input="nearest">
                      <input
                        name="date"
                        type="text"
                        className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                        placeholder="Date"
                        value={form.date} // ← اضافه شد
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="time" data-target-input="nearest">
                      <input
                        name="time"
                        type="text"
                        className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                        placeholder="Time"
                        value={form.time} // ← اضافه شد
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <select
                      name="person"
                      className="custom-select bg-transparent border-primary px-4"
                      style={{ height: "49px" }}
                      value={form.person} // ← اضافه شد
                      required
                      onChange={handleChange}
                    >
                      <option value="">Person</option>
                      <option value="1">Person 1</option>
                      <option value="2">Person 2</option>
                      <option value="3">Person 3</option>
                      <option value="4">Person 4</option>
                    </select>
                  </div>

                  <div>
                    <button
                      className="btn btn-primary btn-block font-weight-bold py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
