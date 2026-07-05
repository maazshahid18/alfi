"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(result.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(
        result.message ||
          "Thank you! Your enquiry has been received. We'll be in touch soon."
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again or call us directly.");
    }
  }

  return (
    <form className="contact-form reveal-up" onSubmit={handleSubmit}>
      {status === "success" && (
        <div className="form-status form-status--success" role="status">
          {message}
        </div>
      )}
      {status === "error" && (
        <div className="form-status form-status--error" role="alert">
          {message}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Your name"
          disabled={status === "loading"}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="you@email.com"
          disabled={status === "loading"}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="+91 XXXXX XXXXX"
          disabled={status === "loading"}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your project..."
          disabled={status === "loading"}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}