import { Link } from "react-router";
import {
  ArrowLeft,
  FileText,
  Scale,
  BookOpen,
  AlertTriangle,
  CreditCard,
  UserX,
  Globe,
  Bell,
  Mail,
} from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className="py-20 px-6 relative overflow-hidden"
        style={{ background: "#0a0a0a" }}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            className="orb-float-2 absolute w-72 h-72 rounded-full"
            style={{
              top: "-10%",
              left: "10%",
              background: "radial-gradient(circle, #06b6d4, transparent 70%)",
            }}
          />
          <div
            className="orb-float-4 absolute w-48 h-48 rounded-full"
            style={{
              bottom: "0%",
              right: "5%",
              background: "radial-gradient(circle, #f14625, transparent 70%)",
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
            <FileText className="w-8 h-8" style={{ color: "#f14625" }} />
            <h1
              className="text-4xl md:text-5xl font-black text-white"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Terms & Conditions
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
                <FileText className="w-5 h-5" style={{ color: "#f14625" }} />
                Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to Slonix Solutions. These Terms and Conditions
                ("Terms") govern your access to and use of our website,
                educational platform, courses, training materials, and all
                related services (collectively, the "Services") provided by
                Slonix Solutions ("we," "our," or "us").
              </p>
              <p className="text-gray-600 leading-relaxed">
                By creating an account, enrolling in a course, or otherwise
                accessing our Services, you agree to be bound by these Terms. If
                you do not agree to these Terms, please do not use our Services.
              </p>
            </section>

            {/* Eligibility */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <UserX className="w-5 h-5" style={{ color: "#f14625" }} />
                Eligibility
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our Services are intended for individuals who are at least 18
                years of age or have the consent of a parent or legal guardian.
                By using our Services, you represent and warrant that you meet
                these eligibility requirements.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you are enrolling on behalf of a minor, you accept these
                Terms on their behalf and are responsible for their use of the
                platform.
              </p>
            </section>

            {/* Account Responsibilities */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <Scale className="w-5 h-5" style={{ color: "#f14625" }} />
                Account Responsibilities
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  You are responsible for maintaining the confidentiality of
                  your account credentials and for all activities under your
                  account.
                </li>
                <li>
                  You agree to provide accurate, current, and complete
                  information during registration and to update it as needed.
                </li>
                <li>
                  You must immediately notify us of any unauthorized access or
                  use of your account.
                </li>
                <li>
                  Sharing account credentials with others or allowing multiple
                  users to share a single account is prohibited unless
                  explicitly authorized.
                </li>
              </ul>
            </section>

            {/* Use of Services */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <BookOpen className="w-5 h-5" style={{ color: "#f14625" }} />
                Use of Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree to use our Services only for lawful, educational
                purposes. Specifically, you shall not:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Copy, reproduce, distribute, or publicly display any course
                  content, training materials, or proprietary resources without
                  prior written consent.
                </li>
                <li>
                  Use automated tools, bots, or scrapers to access or harvest
                  data from the platform.
                </li>
                <li>
                  Interfere with or disrupt the platform's functionality,
                  servers, or networks.
                </li>
                <li>
                  Upload or transmit viruses, malware, or any harmful code.
                </li>
                <li>
                  Impersonate another person or entity, or misrepresent your
                  affiliation with any person or entity.
                </li>
                <li>
                  Use the Services for any commercial purpose without our
                  express written consent.
                </li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <Scale className="w-5 h-5" style={{ color: "#f14625" }} />
                Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content on our platform — including but not limited to
                course materials, videos, project files, assessments, graphics,
                logos, software code, and documentation — is the intellectual
                property of Slonix Solutions or its licensors and is protected
                by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Upon enrollment, we grant you a limited, non-exclusive,
                non-transferable, revocable license to access and use the course
                content solely for your personal, non-commercial educational
                purposes.
              </p>
              <p className="text-gray-600 leading-relaxed font-medium">
                You may not redistribute, resell, sublicense, or create
                derivative works from our content without explicit written
                permission.
              </p>
            </section>

            {/* Payments and Refunds */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <CreditCard className="w-5 h-5" style={{ color: "#f14625" }} />
                Payments, Fees & Refunds
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Course fees are displayed on the relevant course page and are
                  payable in full at the time of enrollment unless a payment
                  plan is offered.
                </li>
                <li>
                  All prices are in Indian Rupees (INR) unless otherwise stated
                  and are inclusive of applicable taxes.
                </li>
                <li>
                  Payments are processed securely through trusted third-party
                  payment gateways.
                </li>
                <li>
                  <strong>Refund Policy:</strong> You may request a full refund
                  within 7 days of enrollment if you have not accessed more than
                  25% of the course content. After this period or threshold,
                  refunds are issued at our discretion.
                </li>
                <li>
                  We reserve the right to modify fees at any time. Modifications
                  will not affect already-enrolled students for their current
                  course.
                </li>
              </ul>
            </section>

            {/* Certifications */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <BookOpen className="w-5 h-5" style={{ color: "#f14625" }} />
                Certifications
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Certificates of completion are issued upon successful
                fulfillment of all course requirements. Certificates are issued
                by Slonix Solutions and represent completion of our training
                program. They do not constitute a degree, diploma, or
                professional license. The value and recognition of certificates
                may vary by employer and industry.
              </p>
            </section>

            {/* Disclaimer */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <AlertTriangle
                  className="w-5 h-5"
                  style={{ color: "#f14625" }}
                />
                Disclaimers & Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our Services are provided on an "as is" and "as available"
                basis. To the fullest extent permitted by law, Slonix Solutions
                disclaims all warranties, express or implied, including but not
                limited to implied warranties of merchantability, fitness for a
                particular purpose, and non-infringement.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not guarantee that:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>
                  The Services will be uninterrupted, error-free, or completely
                  secure.
                </li>
                <li>
                  Completion of any course will result in employment,
                  certification by a third party, or any specific career
                  outcome.
                </li>
                <li>
                  All course content will be accurate, complete, or up-to-date
                  at all times.
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                In no event shall Slonix Solutions be liable for any indirect,
                incidental, special, consequential, or punitive damages arising
                out of or relating to your use of the Services.
              </p>
            </section>

            {/* Termination */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <UserX className="w-5 h-5" style={{ color: "#f14625" }} />
                Termination
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right to suspend or terminate your account and
                access to our Services at any time, with or without cause or
                notice, if we believe you have violated these Terms or engaged
                in activities that may harm other users or our platform.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You may close your account at any time by contacting us. Upon
                termination, your right to access course materials will cease,
                though certain provisions of these Terms (such as intellectual
                property, limitation of liability, and governing law) will
                survive.
              </p>
            </section>

            {/* Third-Party Links */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <Globe className="w-5 h-5" style={{ color: "#f14625" }} />
                Third-Party Links and Services
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our platform may contain links to third-party websites, tools,
                or services. These are provided for convenience and do not imply
                endorsement. Slonix Solutions is not responsible for the
                content, privacy practices, or availability of any third-party
                services. You access them at your own risk.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <Scale className="w-5 h-5" style={{ color: "#f14625" }} />
                Governing Law & Disputes
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms are governed by and construed in accordance with the
                laws of India. Any disputes arising from these Terms or your use
                of our Services shall be subject to the exclusive jurisdiction
                of the courts located in India. We encourage users to contact us
                first to resolve disputes amicably before pursuing legal
                remedies.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="mb-12">
              <h2
                className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                <Bell className="w-5 h-5" style={{ color: "#f14625" }} />
                Changes to These Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update these Terms from time to time. We will notify you
                of material changes by posting the updated Terms on our website
                with a revised "Last Updated" date. Your continued use of the
                Services after such changes constitutes your acceptance of the
                revised Terms.
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
                If you have any questions about these Terms and Conditions,
                please contact us:
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
