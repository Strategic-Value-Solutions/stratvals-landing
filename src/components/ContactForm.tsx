"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

const categories = [
  "Mobile Development",
  "Web Development",
  "Consulting Services",
  "UI UX Services",
  "DevOps",
  "Cloud ERP CMS",
  "Other"
];

export default function ContactForm() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    category: [] as string[],
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    addressline2: "",
    city: "",
    state: "",
    postal: "",
    country: "",
    website: "",
    message: ""
  });

  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlur = (field: string) => setFocusedField(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryToggle = (cat: string) => {
    setFormData(prev => {
      const isSelected = prev.category.includes(cat);
      if (isSelected) {
        return { ...prev, category: prev.category.filter(c => c !== cat) };
      } else {
        return { ...prev, category: [...prev.category, cat] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="section-spacing">
      <div className="container">
        <div className={styles.mainWrapper}>
          <div className={styles.secondaryTitle}>
            <h2 className={styles.h2}>Say Hi!</h2>
          </div>

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.categorySelect}>
              {categories.map((cat) => (
                <div key={cat} className={styles.categoryItem}>
                  <input
                    type="checkbox"
                    id={`cat-${cat}`}
                    checked={formData.category.includes(cat)}
                    onChange={() => handleCategoryToggle(cat)}
                  />
                  <label htmlFor={`cat-${cat}`}>{cat}</label>
                </div>
              ))}
            </div>

            <div className={styles.halfInputRow}>
              <div className={`${styles.formGroup} ${styles.halfInput} ${(focusedField === "firstname" || formData.firstname) ? styles.focused : ""}`}>
                <label className={styles.formLabel} htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  onFocus={() => handleFocus("firstname")}
                  onBlur={() => handleBlur("firstname")}
                  required
                />
              </div>
              <div className={`${styles.formGroup} ${styles.halfInput} ${(focusedField === "lastname" || formData.lastname) ? styles.focused : ""}`}>
                <label className={styles.formLabel} htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  onFocus={() => handleFocus("lastname")}
                  onBlur={() => handleBlur("lastname")}
                  required
                />
              </div>
            </div>

            <div className={`${styles.formGroup} ${(focusedField === "email" || formData.email) ? styles.focused : ""}`}>
              <label className={styles.formLabel} htmlFor="email">Business Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={() => handleBlur("email")}
                required
              />
            </div>

            <div className={`${styles.formGroup} ${styles.halfInput} ${(focusedField === "phone" || formData.phone) ? styles.focused : ""}`}>
              <label className={styles.formLabel} htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => handleFocus("phone")}
                onBlur={() => handleBlur("phone")}
                required
              />
            </div>

            <div className={`${styles.formGroup} ${(focusedField === "address" || formData.address) ? styles.focused : ""}`}>
              <label className={styles.formLabel} htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                onFocus={() => handleFocus("address")}
                onBlur={() => handleBlur("address")}
                required
              />
            </div>

            <div className={`${styles.formGroup} ${(focusedField === "addressline2" || formData.addressline2) ? styles.focused : ""}`}>
              <label className={styles.formLabel} htmlFor="addressline2">Address Line 2</label>
              <input
                type="text"
                id="addressline2"
                name="addressline2"
                value={formData.addressline2}
                onChange={handleChange}
                onFocus={() => handleFocus("addressline2")}
                onBlur={() => handleBlur("addressline2")}
              />
            </div>

            <div className={styles.halfInputRow}>
              <div className={`${styles.formGroup} ${styles.halfInput} ${(focusedField === "city" || formData.city) ? styles.focused : ""}`}>
                <label className={styles.formLabel} htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  onFocus={() => handleFocus("city")}
                  onBlur={() => handleBlur("city")}
                  required
                />
              </div>
              <div className={`${styles.formGroup} ${styles.halfInput} ${(focusedField === "state" || formData.state) ? styles.focused : ""}`}>
                <label className={styles.formLabel} htmlFor="state">State/Region/Province</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  onFocus={() => handleFocus("state")}
                  onBlur={() => handleBlur("state")}
                  required
                />
              </div>
            </div>

            <div className={styles.halfInputRow}>
              <div className={`${styles.formGroup} ${styles.halfInput} ${(focusedField === "postal" || formData.postal) ? styles.focused : ""}`}>
                <label className={styles.formLabel} htmlFor="postal">Postal / Zip Code</label>
                <input
                  type="text"
                  id="postal"
                  name="postal"
                  value={formData.postal}
                  onChange={handleChange}
                  onFocus={() => handleFocus("postal")}
                  onBlur={() => handleBlur("postal")}
                  required
                />
              </div>
              <div className={`${styles.formGroup} ${styles.halfInput} ${styles.countryList} ${(focusedField === "country" || formData.country) ? styles.focused : ""}`}>
                <label className={styles.formLabel} htmlFor="country">Select Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  onFocus={() => handleFocus("country")}
                  onBlur={() => handleBlur("country")}
                  required
                >
                  <option value="" disabled></option>
                  <option value="United States of America">United States of America</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="India">India</option>
                </select>
              </div>
            </div>

            <div className={`${styles.formGroup} ${(focusedField === "website" || formData.website) ? styles.focused : ""}`}>
              <label className={styles.formLabel} htmlFor="website">Company Website</label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                onFocus={() => handleFocus("website")}
                onBlur={() => handleBlur("website")}
              />
            </div>

            <div className={`${styles.formGroup} ${(focusedField === "message" || formData.message) ? styles.focused : ""}`}>
              <label className={styles.formLabel} htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus("message")}
                onBlur={() => handleBlur("message")}
                rows={1}
              />
            </div>

            <div className={styles.btnWrap}>
              <button type="submit" className="circular-btn">Hit Enter to Hi!</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
