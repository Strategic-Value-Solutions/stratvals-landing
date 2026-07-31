"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ContactFormSection.module.css";

const serviceOptions = [
  "Product Road Mapping",
  "Program Management",
  "Tech Transformation",
  "Cloud Migration",
  "Enterprise Apps",
  "Consulting",
];

const budgetOptions = ["<$10k", "10k-30k", "30k-80k", "80k+"];

export default function ContactFormSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["Program Management"]);
  const [selectedBudget, setSelectedBudget] = useState<string>("30k-80k");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.grid}>
            {/* Left Side */}
            <div className={styles.leftCol}>
              <div>
                <span className={styles.pillBadge}>Start a conversation</span>
                <h2 className={styles.heading}>
                  Tell us about your <br />
                  next stage.
                </h2>
              </div>

              {/* Bottom Testimonials Indicator */}
              <div className={styles.testimonialsBlock}>
                <span className={styles.testimonialsLabel}>Our Testimonials:</span>
                <div className={styles.clientIcons}>
                  <div className={styles.iconCircle} title="Husqvarna">H</div>
                  <div className={styles.iconCircle} title="Fancode">F</div>
                  <div className={styles.iconCircle} title="Penn State">P</div>
                </div>
              </div>
            </div>

            {/* Right Side - Interactive Form */}
            <div className={styles.rightCol}>
              <form onSubmit={handleSubmit} className={styles.form}>
                {/* 2-Column Inputs */}
                <div className={styles.inputGrid}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Company</label>
                    <input
                      type="text"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Your Email</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={styles.input}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Your Phone</label>
                    <input
                      type="tel"
                      placeholder="+1 (215) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={styles.input}
                    />
                  </div>
                </div>

                {/* Services Selection Pills */}
                <div className={styles.sectionBlock}>
                  <label className={styles.sectionLabel}>I&apos;m interested in...</label>
                  <div className={styles.pillsRow}>
                    {serviceOptions.map((s) => {
                      const isSelected = selectedServices.includes(s);
                      return (
                        <button
                          type="button"
                          key={s}
                          onClick={() => toggleService(s)}
                          className={`${styles.pillOption} ${
                            isSelected ? styles.selectedPill : ""
                          }`}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project Budget Selection Pills */}
                <div className={styles.sectionBlock}>
                  <label className={styles.sectionLabel}>Project Budget (USD)</label>
                  <div className={styles.pillsRow}>
                    {budgetOptions.map((b) => {
                      const isSelected = selectedBudget === b;
                      return (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setSelectedBudget(b)}
                          className={`${styles.pillOption} ${
                            isSelected ? styles.selectedPill : ""
                          }`}
                        >
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message Field */}
                <div className={styles.sectionBlock}>
                  <label className={styles.sectionLabel}>Tell us about your project.</label>
                  <textarea
                    rows={2}
                    placeholder="Write something concise..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={styles.textarea}
                  />
                </div>

                {/* Submit Button */}
                <div className={styles.submitRow}>
                  <button type="submit" className={styles.submitBtn}>
                    {submitted ? "Message Sent! ✓" : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
