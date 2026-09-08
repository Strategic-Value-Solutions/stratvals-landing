"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ContactFormSection.module.css";

const serviceOptions = [
  "Mobile Development",
  "Web Development",
  "Consulting Services",
  "UI/UX Services",
  "DevOps",
  "Cloud / ERP / CMS",
  "Other",
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          services: selectedServices,
          budget: selectedBudget,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err: unknown) {
      console.error("Form submission error:", err);
      const message = err instanceof Error ? err.message : "Failed to send your inquiry. Please email contact@stratvals.com directly.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
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
                <span className={styles.pillBadge}>Get in touch</span>
                <h2 className={styles.heading}>
                  Say Hi! <br />
                  We&apos;d love to hear from you.
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.92rem", lineHeight: 1.7, color: "var(--foreground-muted)", marginTop: "16px" }}>
                  Reach us at{" "}
                  <a href="mailto:contact@stratvals.com" style={{ color: "var(--foreground)", fontWeight: 600 }}>contact@stratvals.com</a>
                  {" "}or call{" "}
                  <a href="tel:+12157201710" style={{ color: "var(--foreground)", fontWeight: 600 }}>+1 (215) 720-1710</a>
                </p>
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
                  <label className={styles.sectionLabel}>What can we help you with?</label>
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
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={isSubmitting || submitted}
                    style={{
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                    }}
                  >
                    {isSubmitting ? "Sending..." : submitted ? "Message Sent! ✓" : "Submit"}
                  </button>
                  {errorMessage && (
                    <p style={{ color: "#ef4444", fontSize: "0.85rem", marginTop: "10px", width: "100%" }}>
                      {errorMessage}
                    </p>
                  )}
                  {submitted && (
                    <p style={{ color: "#10b981", fontSize: "0.85rem", marginTop: "10px", width: "100%" }}>
                      Thank you! Your inquiry has been sent to contact@stratvals.com.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
