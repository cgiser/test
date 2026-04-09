/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Star, CheckCircle2, ArrowRight, CarFront, Lock, AlertCircle } from 'lucide-react';

const AFFILIATE_LINK = "https://www.autoquoteguide.com/quote/vehicle-make?clickid=d0ea1b5b8bde47209ffa3b97c476e88e&affid=512&aid=1&oid=8&sid=159&s1=05136263C5C751775034662143134&utm_campaign=512&utm_term=159&_ef_transaction_id=d0ea1b5b8bde47209ffa3b97c476e88e&fn=&ln=&stadd=&zip=&phone=&email=&s2=&s3=&s4=&s5=&ot=2";

export default function App() {
  const [step, setStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleAnswer = () => {
    if (step < 3) {
      setStep(step + 1);
    } else if (step === 3) {
      setIsAnalyzing(true);
      setStep(4);
    }
  };

  useEffect(() => {
    if (isAnalyzing) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsAnalyzing(false);
            setStep(5);
            return 100;
          }
          return prev + 15;
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isAnalyzing]);

  const renderProgressBar = () => {
    const currentProgress = step <= 3 ? (step / 3) * 100 : 100;
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${currentProgress}%` }}
        ></div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 flex flex-col">
      {/* FB Compliance: Advertorial Disclosure */}
      <div className="bg-gray-200 text-center py-1 text-xs text-gray-500 uppercase tracking-wider">
        Advertorial
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 text-blue-700 font-bold text-xl tracking-tight">
            <CarFront size={28} className="text-blue-600" />
            <span>AutoSavings<span className="text-gray-800">Journal</span></span>
          </div>
          <div className="flex items-center gap-1 text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full border border-green-100">
            <Lock size={12} />
            Secure
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center p-4 sm:p-6">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mt-2 sm:mt-6">
          
          {/* Hero Section (Only show on first few steps to save space on mobile) */}
          {step <= 3 && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 border-b border-blue-100 text-center">
              <div className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                <AlertCircle size={14} />
                New Policy Update
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
                Drivers Are Shocked By This New Auto Insurance Rule
              </h1>
              <p className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto">
                If you are currently paying more than $50/month for car insurance, you could be overpaying. Take this 60-second quiz to see if you qualify for massive discounts.
              </p>
            </div>
          )}

          {/* Quiz Container */}
          <div className="p-6 sm:p-8">
            {step <= 3 && renderProgressBar()}

            {/* Step 1 */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">Are you currently insured?</h2>
                <div className="space-y-3">
                  <button onClick={handleAnswer} className="w-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-gray-800 font-semibold py-4 px-6 rounded-xl text-lg transition-all flex justify-between items-center group shadow-sm">
                    Yes, I have insurance
                    <ArrowRight className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </button>
                  <button onClick={handleAnswer} className="w-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-gray-800 font-semibold py-4 px-6 rounded-xl text-lg transition-all flex justify-between items-center group shadow-sm">
                    No, I am not insured
                    <ArrowRight className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">What is your age range?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['18 - 24', '25 - 34', '35 - 44', '45 - 54', '55 - 64', '65+'].map((age) => (
                    <button key={age} onClick={handleAnswer} className="w-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-gray-800 font-semibold py-3 px-4 rounded-xl text-lg transition-all shadow-sm">
                      {age}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">Do you own a home?</h2>
                <p className="text-center text-sm text-gray-500 mb-6 -mt-4">Homeowners often qualify for additional bundled discounts.</p>
                <div className="space-y-3">
                  <button onClick={handleAnswer} className="w-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-gray-800 font-semibold py-4 px-6 rounded-xl text-lg transition-all flex justify-between items-center group shadow-sm">
                    Yes, I own a home
                    <ArrowRight className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </button>
                  <button onClick={handleAnswer} className="w-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-gray-800 font-semibold py-4 px-6 rounded-xl text-lg transition-all flex justify-between items-center group shadow-sm">
                    No, I rent
                    <ArrowRight className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Analyzing */}
            {step === 4 && (
              <div className="py-12 text-center animate-in fade-in duration-500">
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <svg className="animate-spin w-full h-full text-blue-100" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" strokeWidth="8" stroke="currentColor" />
                  </svg>
                  <svg className="animate-spin w-full h-full text-blue-600 absolute top-0 left-0" viewBox="0 0 100 100" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}>
                    <circle cx="50" cy="50" r="45" fill="none" strokeWidth="8" stroke="currentColor" strokeDasharray="70 200" strokeLinecap="round" />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600 font-bold text-xl">
                    {progress}%
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Checking Eligibility...</h2>
                <p className="text-gray-500">Searching database for available discounts in your area.</p>
                
                <div className="mt-8 space-y-3 text-left max-w-xs mx-auto">
                  <div className={`flex items-center gap-3 transition-opacity duration-300 ${progress > 20 ? 'opacity-100' : 'opacity-0'}`}>
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span className="text-gray-700 text-sm">Verifying driving history...</span>
                  </div>
                  <div className={`flex items-center gap-3 transition-opacity duration-300 ${progress > 50 ? 'opacity-100' : 'opacity-0'}`}>
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span className="text-gray-700 text-sm">Applying safe driver discounts...</span>
                  </div>
                  <div className={`flex items-center gap-3 transition-opacity duration-300 ${progress > 80 ? 'opacity-100' : 'opacity-0'}`}>
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span className="text-gray-700 text-sm">Finalizing quote options...</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Result / CTA */}
            {step === 5 && (
              <div className="py-6 text-center animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-green-600 w-12 h-12" />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Congratulations!</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                  Based on your answers, you pre-qualify for significant auto insurance discounts. Click below to view your official quotes.
                </p>
                
                <a 
                  href={AFFILIATE_LINK}
                  className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-5 px-8 rounded-2xl shadow-[0_8px_0_rgb(21,128,61)] hover:shadow-[0_4px_0_rgb(21,128,61)] hover:translate-y-1 transition-all"
                >
                  See My Quotes Now
                </a>
                
                <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1"><ShieldCheck size={16} /> 100% Free</div>
                  <div className="flex items-center gap-1"><Lock size={16} /> Secure</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="w-full max-w-2xl mt-8 grid grid-cols-3 gap-4 text-center px-4">
          <div className="flex flex-col items-center">
            <div className="flex text-yellow-400 mb-1">
              <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
            </div>
            <span className="text-xs text-gray-500 font-medium">Over 50,000+<br/>Happy Drivers</span>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck size={24} className="text-blue-500 mb-1" />
            <span className="text-xs text-gray-500 font-medium">Bank-Level<br/>Security</span>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle2 size={24} className="text-green-500 mb-1" />
            <span className="text-xs text-gray-500 font-medium">Fast & Free<br/>Service</span>
          </div>
        </div>
      </main>

      {/* Footer / Compliance */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-400 mb-4 leading-relaxed">
            This website is an advertorial and not a news publication. The story depicted here and the person depicted in the story are not actual news. Rather, this story is based on the results that some people who have used these services have achieved. The results portrayed in the story and in the comments are illustrative, and may not be the results that you achieve with these services.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-800 underline">Privacy Policy</a>
            <a href="#" className="hover:text-gray-800 underline">Terms of Service</a>
            <a href="#" className="hover:text-gray-800 underline">Contact Us</a>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            &copy; {new Date().getFullYear()} Auto Savings Journal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
