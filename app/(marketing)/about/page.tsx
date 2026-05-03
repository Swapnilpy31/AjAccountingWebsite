import React from 'react';
import { ShieldCheck, Scale, Info, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'About Us | Aj Legal Consultant (I) Private Limited',
  description: 'Learn about Aj Legal Consultant (I) Private Limited, an independent consultancy service provider committed to transparency and ethical business practices.',
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase mb-6 border border-primary-100">
            <ShieldCheck className="w-4 h-4" />
            Transparency & Ethics
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 font-serif tracking-tight leading-tight">
            About <span className="text-primary-600">Aj Legal Consultant</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            At Aj Legal Consultant (I) Private Limited, we believe in complete transparency and ethical business practices in every consultation we provide.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 p-8 md:p-12 space-y-8">
          {/* Main Disclosure Section */}
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-relaxed text-slate-700">
              The content available on this website is provided strictly for <strong>general informational and knowledge purposes only</strong>. While we aim to present accurate and updated information, we do not guarantee the completeness, reliability, or accuracy of any content.
            </p>

            <div className="bg-slate-50 border-l-4 border-primary-500 p-6 rounded-r-2xl my-8">
              <p className="text-slate-700 font-medium italic m-0">
                &quot;We do not intend to influence, induce, or mislead any individual or entity into making business, legal, or financial decisions. We do not promise or guarantee any profit, approval, or specific outcome, and any action taken based on this website is solely at the user&rsquo;s discretion and risk.&quot;
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3 mt-10">
              <Scale className="w-6 h-6 text-primary-600" />
              Our Role & Independence
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Aj Legal Consultant operates as an <strong>independent consultancy service provider</strong> offering professional assistance and documentation support. We are not affiliated with, authorized by, or connected to any government authority or licensing body.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3 mt-10">
              <Info className="w-6 h-6 text-primary-600" />
              Information Sources
            </h2>
            <p className="text-slate-600 leading-relaxed">
              All information presented is derived from publicly available sources, official notifications, and government guidelines. Users are strongly advised to <strong>verify the latest updates directly from official government portals</strong> before proceeding with any application or decision.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Quick Stats/Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Company Overview</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="text-slate-500">Industry</span>
                  <span className="text-slate-900 font-semibold">Legal Consultancy</span>
                </li>
                <li className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="text-slate-500">Service Type</span>
                  <span className="text-slate-900 font-semibold">Professional Support</span>
                </li>
                <li className="flex justify-between border-b border-slate-50 pb-2">
                  <span className="text-slate-500">Focus</span>
                  <span className="text-slate-900 font-semibold">Transparency & Ethics</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
              <h3 className="text-primary-900 font-bold mb-2 flex items-center gap-2">
                Need Verification?
              </h3>
              <p className="text-primary-700 text-sm mb-4">
                We always encourage our clients to cross-reference our guidance with official government documentation.
              </p>
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-200"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Our Headquarters</h3>
            <p className="text-slate-500 text-sm max-w-sm">
              Office No G 16 Ground Floor Dharmpali Palace Bhoja Market Sector 27 Noida, Uttar Pradesh 201301
            </p>
          </div>
          <a
            href="https://www.bing.com/maps/search?q=Office+No+G+16+Ground+Floor+Dharmpali+Palace+Bhoja+Market+Near+Vinayak+Hospital+Sector+27+Noida%2C+Bhoja+Market%2C+Noida%2C+Uttar+Pradesh+201301%2C+IN&cp=28.525282%7E77.397499&lvl=11.1&style=r"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-bold hover:bg-slate-800 transition-all shrink-0"
          >
            <ExternalLink className="w-4 h-4" />
            Open in Google Maps
          </a>
        </div>

      </div>
    </div>
  );
}
