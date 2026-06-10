"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, Send, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="relative min-h-screen bg-[#120a0c]">
      {/* Decorative background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[5%] right-[-5%] w-[35%] h-[35%] rounded-full bg-[#a0304e]/[0.03] blur-[100px]" />
      </div>

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(180,60,80,0.2)] bg-[rgba(160,48,78,0.08)] mb-6">
              <Mail className="w-3.5 h-3.5 text-[#d4607a]" />
              <span className="text-[10px] font-mono tracking-[0.15em] text-[#d4607a] uppercase">
                Get in Touch
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#f5e8ea] tracking-tight mb-3">
              Let&apos;s Talk Data
            </h1>
            <p className="text-base text-[#a08088] max-w-xl mx-auto leading-relaxed">
              Have a question about our methodology, want to suggest a tool for review,
              or interested in collaborating? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-8">
                <h2 className="text-base font-bold text-[#f5e8ea] mb-6">Send a Message</h2>

                {submitted ? (
                  <div className="rounded-lg border border-[#d4607a]/30 bg-[rgba(160,48,78,0.1)] p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#d4607a]/10 flex items-center justify-center mx-auto mb-3">
                      <Send className="w-6 h-6 text-[#d4607a]" />
                    </div>
                    <p className="text-[#f5e8ea] font-semibold text-lg mb-1">Message Sent</p>
                    <p className="text-[#a08088] text-sm">
                      Thank you for reaching out. We&apos;ll respond within 48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-[#a08088] mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-[#120a0c] border border-[rgba(180,60,80,0.15)] rounded-lg text-[#f5e8ea] placeholder:text-[#695058] focus:border-[#a0304e] focus:outline-none transition-colors text-sm"
                          placeholder="Alex Mercer"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#a08088] mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-[#120a0c] border border-[rgba(180,60,80,0.15)] rounded-lg text-[#f5e8ea] placeholder:text-[#695058] focus:border-[#a0304e] focus:outline-none transition-colors text-sm"
                          placeholder="alex@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#a08088] mb-1.5">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-[#120a0c] border border-[rgba(180,60,80,0.15)] rounded-lg text-[#f5e8ea] focus:border-[#a0304e] focus:outline-none transition-colors text-sm"
                      >
                        <option value="">Select a topic...</option>
                        <option value="general">General Inquiry</option>
                        <option value="tool-suggestion">Suggest a Tool</option>
                        <option value="methodology">Methodology Question</option>
                        <option value="collaboration">Collaboration / Partnership</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#a08088] mb-1.5">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-[#120a0c] border border-[rgba(180,60,80,0.15)] rounded-lg text-[#f5e8ea] placeholder:text-[#695058] focus:border-[#a0304e] focus:outline-none transition-colors text-sm resize-none"
                        placeholder="Tell us about your project or question..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 bg-[#a0304e] hover:bg-[#b8385a] text-[#f5e8ea] text-sm font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-6">
                <h3 className="text-xs font-semibold text-[#f5e8ea] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#d4607a]" />
                  Email Us
                </h3>
                <div className="space-y-3">
                  <p className="text-xs text-[#a08088]">
                    <strong className="text-[#d4b8bd]">General:</strong>
                    <br />
                    <a href="mailto:hello@cleverco-analytics.com" className="text-[#d4607a] hover:underline">
                      hello@cleverco-analytics.com
                    </a>
                  </p>
                  <p className="text-xs text-[#a08088]">
                    <strong className="text-[#d4b8bd]">Editorial:</strong>
                    <br />
                    <a href="mailto:editorial@cleverco-analytics.com" className="text-[#d4607a] hover:underline">
                      editorial@cleverco-analytics.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-6">
                <h3 className="text-xs font-semibold text-[#f5e8ea] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#d4607a]" />
                  Studio
                </h3>
                <p className="text-xs text-[#a08088] leading-relaxed">
                  Platform, New Station Street
                  <br />
                  Leeds LS1 4JB
                  <br />
                  United Kingdom
                </p>
              </div>

              <div className="rounded-xl border border-[rgba(180,60,80,0.12)] bg-[#1a1013] p-6">
                <h3 className="text-xs font-semibold text-[#f5e8ea] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#d4607a]" />
                  Response Time
                </h3>
                <p className="text-xs text-[#a08088]">
                  We typically respond within <strong className="text-[#d4b8bd]">48 hours</strong> on business days.
                  For urgent matters, mention it in your subject line.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xs text-[#695058]">
              Prefer to chat? Follow us on{" "}
              <a href="#" className="text-[#a08088] hover:text-[#d4b8bd] transition-colors">LinkedIn</a>{" "}
              or{" "}
              <a href="#" className="text-[#a08088] hover:text-[#d4b8bd] transition-colors">Twitter</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
