import { Link } from "react-router";
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  Bell,
  Mail,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className="py-20 px-6 relative overflow-hidden"
        style={{ background: "#0a0a0a" }}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            className="orb-float-1 absolute w-72 h-72 rounded-full"
            style={{
              top: "-10%",
              right: "10%",
              background: "radial-gradient(circle, #f14625, transparent 70%)",
            }}
          />
          <div
            className="orb-float-3 absolute w-48 h-48 rounded-full"
            style={{
              bottom: "0%",
              left: "5%",
              background: "radial-gradient(circle, #a855f7, transparent 70%)",
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Shield
              className="w-8 h-8 text-white"
              style={{ color: "#f14625" }}
            />
            <h1
              className="text-4xl md:text-5xl font-black text-white"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Privacy Policy
            </h1>
          </div>
          <p className="text-gray-400 text-lg">Last updated: February 2026</p>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <Shield className="w-5 h-5" style={{ color: "#f14625" }} />
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Slonix Solutions ("we," "our," or "us") is committed to
                protecting the privacy and security of your personal
                information. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your data when you use our educational
                platform, website, and related services (collectively, the
                "Services").
              </p>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using our Services, you agree to the terms of
                this Privacy Policy. If you do not agree, please discontinue use
                of our Services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <Database className="w-5 h-5" style={{ color: "#f14625" }} />
                Information We Collect
              </h2>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Personal Information You Provide
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                <li>
                  <strong>Account Information:</strong> Name, email address,
                  phone number, and login credentials when you register for an
                  account.
                </li>
                <li>
                  <strong>Enrollment Data:</strong> Course selections,
                  educational background, career goals, and certification
                  preferences.
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing address and
                  payment details (processed securely through third-party
                  payment processors — we do not store full card numbers).
                </li>
                <li>
                  <strong>Communications:</strong> Messages, inquiries, and
                  feedback you send to us through contact forms, email, or
                  support channels.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Information Collected Automatically
              </h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Usage Data:</strong> Pages visited, features used,
                  time spent on the platform, course progress, and interaction
                  patterns.
                </li>
                <li>
                  <strong>Device Information:</strong> IP address, browser type,
                  operating system, device identifiers, and screen resolution.
                </li>
                <li>
                  <strong>Cookies & Tracking:</strong> We use cookies and
                  similar technologies to enhance your experience, remember
                  preferences, and analyze platform usage.
                </li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <Eye className="w-5 h-5" style={{ color: "#f14625" }} />
                How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect exclusively for educational
                and operational purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Providing, maintaining, and improving our educational platform
                  and services.
                </li>
                <li>
                  Personalizing your learning experience and recommending
                  relevant courses.
                </li>
                <li>
                  Processing enrollments, payments, and issuing certificates.
                </li>
                <li>
                  Communicating with you about your account, courses, updates,
                  and promotional offers (with opt-out options).
                </li>
                <li>
                  Analyzing usage trends to improve content quality and user
                  experience.
                </li>
                <li>
                  Ensuring security and preventing fraud or unauthorized access.
                </li>
                <li>Complying with legal obligations and regulations.</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <UserCheck className="w-5 h-5" style={{ color: "#f14625" }} />
                Data Sharing and Disclosure
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We respect your data and do not sell your personal information
                to third parties. We may share your information only in the
                following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Service Providers:</strong> Trusted third-party
                  vendors who assist us with hosting, payment processing,
                  analytics, and email delivery — all bound by data protection
                  agreements.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law,
                  regulation, or legal process, or to protect the rights,
                  privacy, safety, or property of Slonix Solutions and our
                  users.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets, with appropriate
                  notice to affected users.
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly
                  authorize us to share your data.
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4 font-medium">
                We never use student data for targeted advertising or commercial
                profiling.
              </p>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <Lock className="w-5 h-5" style={{ color: "#f14625" }} />
                Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your
                personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>SSL/TLS encryption for all data in transit.</li>
                <li>Encrypted storage of sensitive data at rest.</li>
                <li>
                  Role-based access controls limiting data access to authorized
                  personnel only.
                </li>
                <li>Regular security audits and vulnerability assessments.</li>
                <li>
                  Incident response protocols for prompt breach identification
                  and notification.
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                While we strive to protect your data, no method of transmission
                or storage is 100% secure. We encourage you to use strong
                passwords and protect your account credentials.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <Database className="w-5 h-5" style={{ color: "#f14625" }} />
                Data Retention
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We retain personal information only as long as necessary to
                fulfill the purposes outlined in this policy, provide our
                services, or comply with legal obligations. When data is no
                longer needed, it is securely deleted or anonymized. You may
                request deletion of your account and associated data at any time
                by contacting us.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <UserCheck className="w-5 h-5" style={{ color: "#f14625" }} />
                Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your jurisdiction, you may have the following
                rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Access:</strong> Request a copy of the personal data
                  we hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  or incomplete data.
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  data, subject to legal retention requirements.
                </li>
                <li>
                  <strong>Opt-Out:</strong> Unsubscribe from marketing
                  communications at any time via the unsubscribe link in our
                  emails.
                </li>
                <li>
                  <strong>Data Portability:</strong> Request your data in a
                  structured, commonly used format.
                </li>
                <li>
                  <strong>Withdraw Consent:</strong> Where processing is based
                  on consent, you may withdraw it at any time.
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:slonixbim.team@gmail.com"
                  className="font-semibold hover:underline"
                  style={{ color: "#f14625" }}
                >
                  slonixbim.team@gmail.com
                </a>
                .
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <Eye className="w-5 h-5" style={{ color: "#f14625" }} />
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Keep you logged in and remember your preferences.</li>
                <li>Analyze site traffic and usage patterns.</li>
                <li>Improve our platform's performance and features.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                You can manage cookie preferences through your browser settings.
                Disabling certain cookies may affect your experience on our
                platform.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <Bell className="w-5 h-5" style={{ color: "#f14625" }} />
                Changes to This Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or applicable laws. We will notify you
                of any material changes by posting the updated policy on our
                website with a revised "Last Updated" date. We encourage you to
                review this policy periodically.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <Mail className="w-5 h-5" style={{ color: "#f14625" }} />
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or your personal data, please contact us:
              </p>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <p className="text-gray-700 font-medium">Slonix Solutions</p>
                <p className="text-gray-600">
                  Email:{" "}
                  <a
                    href="mailto:slonixbim.team@gmail.com"
                    className="font-semibold hover:underline"
                    style={{ color: "#f14625" }}
                  >
                    slonixbim.team@gmail.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6" style={{ background: "#0a0a0a" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Slonix Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
