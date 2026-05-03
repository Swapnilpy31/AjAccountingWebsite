import React from 'react';
import { ShieldAlert, Info, Scale, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Website Disclaimer | Aj Legal Consultant (I) Private Limited',
  description: 'Official website disclaimer for Aj Legal Consultant (I) Private Limited. Please read our terms regarding informational content and government affiliations.',
};

export default function DisclaimerPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase mb-6 border border-amber-100">
            <ShieldAlert className="w-4 h-4" />
            Legal Disclosure
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 font-serif tracking-tight leading-tight">
            Website <span className="text-primary-600">Disclaimer</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Please read this disclaimer carefully before using our website. By accessing this site, you acknowledge and agree to the following terms.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 p-8 md:p-12 space-y-10">
          
          {/* Section 1: General Info */}
          <div className="flex gap-6">
            <div className="hidden sm:flex w-12 h-12 bg-primary-50 rounded-2xl items-center justify-center shrink-0 border border-primary-100">
              <Info className="w-6 h-6 text-primary-600" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">General Information Purposes Only</h2>
              <p className="text-slate-600 leading-relaxed">
                The information provided on this website is for <strong>general informational and knowledge purposes only</strong>. While we strive to keep the content accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information.
              </p>
            </div>
          </div>

          {/* Section 2: Decision Making */}
          <div className="flex gap-6">
            <div className="hidden sm:flex w-12 h-12 bg-amber-50 rounded-2xl items-center justify-center shrink-0 border border-amber-100">
              <Scale className="w-6 h-6 text-amber-600" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Professional Advice & Decisions</h2>
              <p className="text-slate-600 leading-relaxed">
                This website does not intend to influence, induce, or encourage any person to make financial, legal, or business decisions, including but not limited to investments, registrations, or licensing activities. We do not guarantee any profit, success, or outcome, and we are not responsible for any loss or damage arising from reliance on the information provided.
              </p>
            </div>
          </div>

          {/* Section 3: Independence Disclosure */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm">
                !
              </span>
              Independent Consultancy Status
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our company is an <strong>independent consultancy service provider</strong> and is not affiliated, associated, authorized, or endorsed by any government authority, including but not limited to the:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Ministry of External Affairs',
                'Protector General of Emigrants',
                'Licensing Authorities',
                'Registration Authorities'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-100 shadow-sm">
                  <ArrowRight className="w-4 h-4 text-primary-500" />
                  <span className="font-semibold text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Verification */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Verify Before You Act</h2>
            <p className="text-slate-600 leading-relaxed">
              All information presented on this website is based on publicly available data, official notifications, and guidelines issued by the respective government departments and regulatory bodies. Users are strongly advised to <strong>verify the latest updates directly from official government websites</strong> before taking any action.
            </p>
          </div>

          {/* Final Clause */}
          <div className="pt-6 border-t border-slate-100">
            <div className="bg-primary-600 rounded-2xl p-6 text-white shadow-lg shadow-primary-200">
              <p className="font-bold text-lg mb-2">User Acknowledgment</p>
              <p className="text-primary-50 leading-relaxed">
                By using this website, you acknowledge that any reliance on such information is strictly at your own risk.
              </p>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Have questions?</h3>
            <p className="text-slate-500 text-sm">Get clear answers from our compliance experts.</p>
          </div>
          <div className="flex gap-4">
            <Link 
              href="/contact"
              className="bg-primary-600 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-primary-700 transition-all"
            >
              Contact Us
            </Link>
            <Link 
              href="/about"
              className="bg-slate-100 text-slate-700 px-6 py-3 rounded-2xl text-sm font-bold hover:bg-slate-200 transition-all flex items-center gap-2"
            >
              Learn More <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
