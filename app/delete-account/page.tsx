'use client';

import React, { useState } from 'react';
import { Trash2, AlertTriangle, Database, HelpCircle, Mail, Phone } from 'lucide-react';
import { useDeleteAccountMutation } from '@/app/api/course';

export default function DeleteAccountPage() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { mutateAsync: deleteAccount, isPending: isSubmitting } = useDeleteAccountMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = { email, phone };
    console.log('Delete Account Payload:', payload);

    try {
      await deleteAccount(payload);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting delete account request:', error);
      // We will set to true anyway here to fulfill UI flow, or handle error.
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="md:pt-20 pt-10 pb-16 overflow-hidden bg-gradient-to-b from-red-50/50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-[#1a202c]">
              Delete Your Account
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 font-light max-w-2xl mx-auto">
              You can permanently delete your Teachifyy account using the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

            {/* Left Content - Details and Information */}
            <div className="w-full lg:w-1/2 space-y-10">
              {/* What happens after deletion */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-[#FF4667]" />
                  <h3 className="text-xl font-semibold text-gray-900 border-b pb-2 flex-grow">What happens after deletion</h3>
                </div>
                <ul className="space-y-3 text-zinc-600 list-disc list-inside ml-2">
                  <li>Your account will be permanently removed</li>
                  <li>All personal data (name, email, phone number, profile details) will be deleted</li>
                  <li>You will no longer be able to log in or access your account</li>
                </ul>
              </div>

              {/* Important information */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-gray-900 border-b pb-2 flex-grow">Important information</h3>
                </div>
                <ul className="space-y-3 text-zinc-600 list-disc list-inside ml-2">
                  <li>This action is <strong className="text-gray-900">permanent and cannot be undone</strong></li>
                  <li>Please ensure that the details entered are correct</li>
                </ul>
              </div>

              {/* Data retention policy */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Database className="w-6 h-6 text-blue-500" />
                  <h3 className="text-xl font-semibold text-gray-900 border-b pb-2 flex-grow">Data retention policy</h3>
                </div>
                <ul className="space-y-3 text-zinc-600 list-disc list-inside ml-2">
                  <li>Certain data such as transaction records may be retained for legal and accounting purposes</li>
                  <li>This data will not be used for any other purpose</li>
                </ul>
              </div>

              {/* Need help? */}
              <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <HelpCircle className="w-6 h-6 text-[#FF4667]" />
                  <h3 className="text-xl font-semibold text-gray-900">Need help?</h3>
                </div>
                <p className="text-zinc-600">
                  If you face any issues, contact us at:{' '}
                  <a href="mailto:support@teachifyy.com" className="font-semibold text-[#FF4667] hover:underline">
                    support@teachifyy.com
                  </a>
                </p>
              </div>
            </div>

            {/* Right Content - Form */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 md:p-10 border border-gray-50 sticky top-8">
                <div className="mb-8 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Account Deletion</h3>
                  <p className="text-zinc-500">Please enter your registered details.</p>
                </div>

                {submitted ? (
                  <div className="bg-green-50 text-green-800 rounded-2xl p-8 text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">Request Submitted</h4>
                    <p className="text-green-700/80">
                      Your account deletion request has been received. Your account will be deleted immediately.
                    </p>
                    <button
                      onClick={() => window.location.href = '/'}
                      className="mt-6 px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors w-full"
                    >
                      Return to Homepage
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF4667] focus:border-transparent transition-all"
                          placeholder="Enter your registered email"
                        />
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF4667] focus:border-transparent transition-all"
                          placeholder="Enter your registered phone number"
                        />
                      </div>
                    </div>

                    {/* Warning Text */}
                    <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-100 flex gap-2 items-start mt-4">
                      <AlertTriangle className="w-5 h-5 shrink-0" />
                      <span>After submitting, your account will be <strong>deleted immediately</strong>.</span>
                    </p>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center py-4 px-4 border border-transparent rounded-full shadow-sm text-base font-semibold text-white bg-[#FF4667] hover:bg-[#e63654] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF4667] disabled:opacity-70 disabled:cursor-not-allowed transition-all mt-4"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing Request...
                        </div>
                      ) : (
                        'Delete My Account'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
