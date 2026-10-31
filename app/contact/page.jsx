"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, Sprout, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setStatusMessage(
          data.message ||
            "Thank you! Your message has been sent successfully. We will contact you soon."
        );
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
        setStatusMessage(
          data.error || "Failed to send message. Please check your details and try again."
        );
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage("A network error occurred. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["D-503, Pristine Pronext,", "Survey no-190, Wakad,", "Pune, Maharashtra 411057"],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 72619 83131", "+91 93254 66881"],
      link: "tel:+917261983131",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["greenglobeimports@gmail.com"],
      link: "mailto:greenglobeimports@gmail.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Breadcrumb Header */}
      <section className="relative h-[360px] md:h-[420px] flex items-center justify-center overflow-hidden bg-black">
        <Image
          src="/breadcum-1.jpg"
          alt="GreenGlobe contact hero background"
          fill
          priority
          quality={80}
          className="object-cover opacity-65 transition-transform duration-[2000ms] hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 space-y-4 max-w-3xl mt-16">
          <span className="inline-block px-4 py-1.5 bg-[#5BC242]/20 border border-[#5BC242]/30 rounded-full text-xs font-bold uppercase tracking-wider text-[#69D34F]">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-none font-serif">
            Contact Us
          </h1>
          <p className="text-gray-200 text-sm md:text-base font-medium max-w-xl mx-auto">
            Have questions about our smart agricultural products or need consulting? Send us a message today.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-semibold text-white/90 pt-2">
            <Link href="/" className="hover:text-[#69D34F] transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-[#69D34F]">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <main className="flex-1 bg-[#FAF8F2] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* Main Dual Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#469A35] font-bold text-xs uppercase tracking-wider">
                  <Sprout className="w-4 h-4" />
                  <span>Connect With Us</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0D4E22] tracking-tight leading-tight">
                  Ready to Grow Together?
                </h2>
                <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
                  We are here to answer your technical questions, assist with contract agricultural bulk orders, or provide guidance.
                </p>
              </div>

              {/* Info Matrix Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactDetails.map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-gray-100 p-6 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#FAF8F2] border border-gray-100/50 flex items-center justify-center text-[#0D4E22] shadow-xs">
                        <IconComp className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <div className="space-y-1.5 text-left">
                        <h4 className="text-sm font-bold text-[#0D4E22] uppercase tracking-wider">
                          {item.title}
                        </h4>
                        <div className="space-y-0.5 text-xs text-gray-500 font-semibold leading-relaxed">
                          {item.details.map((detail, dIdx) => (
                            <p key={dIdx}>
                              {item.link ? (
                                <a href={item.link} className="hover:underline hover:text-[#469A35]">
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-100 p-6 sm:p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-[#0D4E22] tracking-tight mb-6 text-left">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-600">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-[#FAF8F2] border border-gray-200/80 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-[#469A35] transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-600">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-[#FAF8F2] border border-gray-200/80 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-[#469A35] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone field */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-gray-600">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-[#FAF8F2] border border-gray-200/80 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-[#469A35] transition-colors"
                    />
                  </div>

                  {/* Subject field */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-gray-600">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Bulk Sourcing Query"
                      className="w-full bg-[#FAF8F2] border border-gray-200/80 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-[#469A35] transition-colors"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-[#FAF8F2] border border-gray-200/80 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-[#469A35] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center w-full px-6 py-4 bg-[#0D4E22] hover:bg-[#1a5b30] text-white font-bold rounded-2xl text-sm transition-all duration-300 gap-2 cursor-pointer shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Submit alerts */}
                {submitStatus === "success" && (
                  <div className="flex items-start gap-3 bg-[#69D34F]/10 border border-[#69D34F]/30 text-[#0D4E22] text-xs sm:text-sm font-semibold rounded-2xl p-4">
                    <CheckCircle2 className="w-5 h-5 text-[#469A35] shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold rounded-2xl p-4">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span>{statusMessage}</span>
                  </div>
                )}
              </form>
            </div>

          </div>

          {/* Bottom Area: Live Interactive Google Map */}
          <div className="w-full rounded-[32px] overflow-hidden border border-gray-200/80 shadow-xl bg-white relative">
            {/* Map Container */}
            <div className="relative w-full h-[400px] sm:h-[460px] md:h-[500px]">
              <iframe
                title="GreenGlobe Headquarters Location Map"
                src="https://maps.google.com/maps?q=18.5993,73.7625&hl=en&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Location Card Overlay */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 max-w-[340px] sm:max-w-[380px] bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.15)] border border-gray-100/90 z-10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0D4E22] text-[#FDF0B4] flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5 text-[#FDF0B4]" />
                  </div>
                  <div>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#469A35] bg-[#5BC242]/10 px-2 py-0.5 rounded-md mb-1">
                      Corporate Headquarters
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                      GreenGlobe Agrochemical
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] text-gray-600 font-medium leading-relaxed mt-3">
                  D-503, Pristine Pronext, Survey no-190, Wakad, Pune, Maharashtra 411057
                </p>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
                  <a
                    href="https://maps.google.com/?q=Pristine+Pronext+Wakad+Pune"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#5BC242] hover:bg-[#4ba834] text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors shadow-xs"
                  >
                    <span>Get Directions</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
