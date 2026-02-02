import { useState } from 'react';
import "./index.css";
import logo from './play_store_logo2.png';

/* --- Icons (Hand-tuned to match the sidebar image exactly) --- */

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9-9h7v7h-7V4zm0 9h7v7h-7v-7z" opacity="0.4" />
  </svg>
);

const PolicyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" opacity="0.4" />
  </svg>
);

const OrderIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V10h16v8zm0-10H4V6h16v2z" opacity="0.4" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" opacity="0.4" />
  </svg>
);

const DeveloperIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" opacity="0.4" />
  </svg>
);

const ActivityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z" opacity="0.4" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L3.15 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.04.24.24.41.48.41h3.84c.24 0 .43-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.21.08-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" opacity="0.4" />
  </svg>
);

const HelpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" opacity="0.4" />
  </svg>
);

const AndroidIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.35-.35.35-.92 0-1.27-.35-.35-.92-.35-1.27 0l-1.3 1.3c-1.35-.57-2.84-.89-4.43-.89s-3.08.32-4.43.89l-1.3-1.3c-.35-.35-.92-.35-1.27 0-.35.35-.35.92 0 1.27l1.3 1.3C4.42 3.81 3 5.79 3 8h18c0-2.21-1.42-4.19-3.53-5.84zM7.5 6.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm9 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" opacity="0.4" />
  </svg>
);

const ErrorIcon = () => (
  <svg focusable="false" viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#D93025]"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
);

const PlayConsoleLogo = () => (
  <div className="flex items-center">
    <img src={logo} alt="Google Play Console" className="h-[60px] w-50" />
  </div>
);


const SidebarItem = ({ icon: Icon, label, active, hasTriangle, hasBackground }: any) => (
  <div className={`relative flex items-center h-[48px] mr-2 rounded-r-full group select-none pointer-events-none transition-colors ${active ? 'bg-[#e8f0fe] text-[#1a73e8]' :
    hasBackground ? 'bg-[#f1f3f4] text-[#919599]' :
      'text-[#bdc1c6]'
    }`}>
    {hasTriangle && (
      <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 text-[#bdc1c6]">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    )}

    <div className="flex items-center pl-6 w-full">
      <div className={`mr-4 ${active ? 'text-[#1a73e8]' : 'text-current'}`}>
        <Icon />
      </div>
      <span className={`text-[14px] font-medium tracking-wide flex-grow ${active ? 'text-[#1a73e8]' : 'text-[#bdc1c6]'
        }`}>
        {label}
      </span>
    </div>
  </div>
);

/* --- Appeal Details Modal --- */
const AppealDetailsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />

      {/* Modal - slides from bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white z-50 rounded-t-2xl shadow-2xl animate-slide-up max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5">
          <h2 className="text-[20px] font-medium text-[#202124]">Appeal details</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e8eaed] hover:bg-[#dadce0] text-[#5f6368] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8">

          {/* Ticket number Row */}
          <div className="grid grid-cols-[160px_1fr] py-5 border-t border-[#e8eaed] text-[14px] font-medium">
            <div className="text-[#5f6368] flex items-start">
              Ticket number
              <div
                className="ml-1 cursor-pointer relative"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#9aa0a6]">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                </svg>
                {/* Tooltip */}
                {showTooltip && (
                  <div className="absolute left-0 top-6 bg-[#3c4043] text-white text-[12px] px-3 py-2 rounded shadow-lg w-[220px] z-50 leading-relaxed font-normal">
                    This will be included in the email you receive to help you identify the appeal
                  </div>
                )}
              </div>
            </div>
            <div className="text-[#202124]">3-8659000040042</div>
          </div>

          {/* Submitted Row */}
          <div className="grid grid-cols-[160px_1fr] py-5 border-t border-[#e8eaed] text-[14px] font-medium">
            <div className="text-[#5f6368]">Submitted</div>
            <div className="text-[#202124]">
              Jan 30, 2026, 7:42 PM
              <span className="text-[#5f6368] mx-2">•</span>
              <span className="text-[#5f6368]">by mintaclub@gmail.com</span>
            </div>
          </div>

          {/* Reason Row */}
          <div className="grid grid-cols-[160px_1fr] py-5 border-t border-[#e8eaed] text-[14px] font-medium">
            <div className="text-[#5f6368]">Reason</div>
            <div className="text-[#202124]">I believe this is incorrect</div>
          </div>

          {/* Details Row */}
          <div className="grid grid-cols-[160px_1fr] py-5 border-t border-[#e8eaed] text-[14px] font-medium">
            <div className="text-[#5f6368]">Details</div>
            <div className="text-[#202124] leading-[1.7] max-w-[750px]">
              Dear Google Play Team,

              My Google Play Developer account (ID: 6405420021090939568) was terminated for High Risk Behavior. I respectfully request a manual review of this decision.

              After reviewing Google Play Developer Program Policies, I understand that my app did not fully comply with Google Play’s Terms & Conditions and Privacy Policy requirements. This was an unintentional oversight, and I take full responsibility for this mistake.

              The app is a legitimate e-commerce platform that allows users to order uncooked chicken, fish, and meat from local vendors. It does not involve gambling, betting, restricted content, or any illegal activity.

              The termination occurred due to incomplete and non-compliant implementation of the app’s Terms & Conditions and Privacy Policy, not due to malicious intent, policy circumvention, or reuse of banned content.

              I want to clearly state that this mistake will not be repeated. I am actively taking the following corrective actions:

              Drafting original and fully compliant Terms & Conditions

              Implementing a clear and transparent Privacy Policy explaining data collection, usage, and storage

              Updating the app to ensure user consent and policy visibility

              Conducting a full policy review before any future app submission

              This account represents MINTA CLUB PRIVATE LIMITED, a legitimate business operating a lawful food-ordering platform. We are fully committed to compliance, transparency, and maintaining user trust on Google Play.

              I sincerely request reconsideration of this termination and an opportunity to correct the issue and continue publishing apps in compliance with Google Play policies.

              Thank you for your time and consideration.

              Sincerely,
              MINTA CLUB PRIVATE LIMITED
            </div>
          </div>

          {/* Language Row */}
          <div className="grid grid-cols-[160px_1fr] py-5 border-t border-[#e8eaed] text-[14px] font-medium">
            <div className="text-[#5f6368]">Language</div>
            <div className="text-[#202124]">English</div>
          </div>

        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slideUp 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex h-screen bg-white font-sans antialiased">

      {/* Sidebar - RESTORED & DISABLED */}
      <aside className="w-[280px] flex-shrink-0 border-r border-[#e8eaed] flex flex-col h-full bg-white overflow-y-auto">
        <div className="h-16 flex items-center pl-6">
          <PlayConsoleLogo />
        </div>
        <nav className="flex-grow py-2">
          <SidebarItem icon={HomeIcon} label="Home" />
          <SidebarItem icon={PolicyIcon} label="Policy status" active={true} />
          <SidebarItem icon={UsersIcon} label="Users and permissions" />
          <SidebarItem icon={OrderIcon} label="Order management" />
          <SidebarItem icon={DownloadIcon} label="Download reports" hasTriangle={true} />
          <SidebarItem icon={DeveloperIcon} label="Developer account" />
          <SidebarItem icon={ActivityIcon} label="Activity log" />
          <SidebarItem icon={SettingsIcon} label="Settings" hasBackground={true} />
          <SidebarItem icon={HelpIcon} label="Help" />

          <div className="my-2 border-t border-[#e8eaed] mx-0" />

          <SidebarItem icon={AndroidIcon} label="Android developer verification" />
        </nav>
      </aside>

      {/* Main Content - EXACT MATCH TO SCREENSHOT */}
      <main className="flex-grow overflow-y-auto flex flex-col">
        <div className="pt-10 pl-10 pr-16 pb-12 flex-grow">

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-[24px] font-medium text-[#202124] leading-8 mb-1">
              Policy status
            </h1>
            <p className="text-[14px] text-[#5f6368] font-medium">
              Manage your compliance with Google Play Developer Program policies. <a href="https://play.google.com/console/about/policystatus/" target="_blank" rel="noopener noreferrer" className="text-[#1a73e8] hover:underline font-medium">Learn more</a>
            </p>
          </div>

          {/* Divider */}
          <hr className="border-t border-[#dadce0] mb-6" />

          {/* Summary Section */}
          <div className="mb-6">
            <h2 className="text-[18px] font-semibold text-[#202124] mb-5">Summary</h2>

            <div className="grid grid-cols-[140px_1fr] gap-y-5 text-[14px] font-medium">

              {/* Status Row */}
              <div className="text-[#5f6368]">Status</div>
              <div className="flex items-center">
                <ErrorIcon />
                <span className="ml-2 text-[#d93025]">Account removed</span>
                <span className="text-[#5f6368] mx-2">•</span>
                <span className="text-[#5f6368]">All apps removed from Google Play</span>
              </div>

              {/* Removed Row */}
              <div className="text-[#5f6368]">Removed</div>
              <div className="text-[#202124] font-medium">Jan 30, 2026, 7:14 PM</div>

              {/* Details Row */}
              <div className="text-[#5f6368]">Details</div>
              <div className="text-[#202124] font-medium">
                <p className="leading-6">
                  Your developer account and all of your apps have been removed from Google Play, and you can't publish new apps.
                </p>
                <p className="leading-6 mt-4">
                  We've sent more information to the account owner's email address.
                </p>
                {/* <a href="#" className="text-[#1a73e8] hover:underline block mt-4 font-medium">View email</a> */}
              </div>

            </div>
          </div>

          {/* Divider */}
          <hr className="border-t border-[#dadce0] mb-6" />

          {/* How to fix Section */}
          <div className="mb-6">
            <h2 className="text-[18px] font-semibold text-[#202124] mb-3">How to fix?</h2>
            <p className="text-[#202124] text-[14px] leading-6 font-medium">
              If your app is exempt from the issues raised, for example, you have permission to use a third parties' intellectual property in your app, you can let the review team know by completing the <a href="#" className="font-medium">Advance notice form</a> instead of appealing.
            </p>
          </div>

          {/* Divider */}
          <hr className="border-t border-[#dadce0] mb-6" />

          {/* Appeal submitted Section */}
          <div className="mb-8">
            <h2 className="text-[18px] font-semibold text-[#202124] mb-3">Appeal submitted</h2>
            <p className="text-[#202124] text-[14px] leading-6 mb-6 font-medium">
              We'll send our decision via email to the account owner and any additional email addresses provided when the appeal was submitted. This may take up to 7 days.
            </p>

            {/* Appeal Details Grid */}
            <div className="grid grid-cols-[140px_1fr] gap-y-5 text-[14px] font-medium">

              {/* Status Row */}
              <div className="text-[#5f6368]">Status</div>
              <div className="flex items-center text-[#1a73e8]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="ml-2">Appeal submitted</span>
              </div>

              {/* Ticket number Row */}
              <div className="text-[#5f6368] flex items-center">
                Ticket number
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-1 text-[#5f6368]">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                </svg>
              </div>
              <div className="text-[#202124] font-medium">3-8659000040042</div>

              {/* Submitted Row */}
              <div className="text-[#5f6368]">Submitted</div>
              <div className="text-[#202124]">
                Jan 30, 2026, 7:42 PM
                <span className="text-[#5f6368] mx-2">•</span>
                <span className="text-[#5f6368]">by mintaclub@gmail.com</span>
              </div>

            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="text-[#1a73e8] hover:underline block mt-5 text-[14px] cursor-pointer font-medium"
            >
              View appeal details
            </button>
          </div>

        </div>

        {/* Footer */}
        <footer className="border-t border-[#dadce0] px-8 py-4 flex items-center justify-between text-[12px] text-[#5f6368] font-medium">
          <div className="flex items-center gap-6">
            <a href="https://play.google.com/console/about/whats-new/" target="_blank" rel="noopener noreferrer" className="hover:text-[#202124] font-medium">Product updates</a>
            <a href="https://status.play.google.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#202124] font-medium">Status dashboard</a>
            {/* <a href="#" className="hover:text-[#202124] font-medium">Help</a> */}
          </div>
          <div className="flex items-center gap-6">
            <span className="font-medium">© 2026 Google</span>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-[#202124] font-medium">Privacy</a>
            <a href="https://play.google/developer-distribution-agreement.html" target="_blank" rel="noopener noreferrer" className="hover:text-[#202124] font-medium">Developer Distribution Agreement</a>
            <a href="https://play.google/console/terms-of-service/" target="_blank" rel="noopener noreferrer" className="hover:text-[#202124] font-medium">Terms of Service</a>
          </div>
        </footer>
      </main>

      {/* Appeal Details Modal */}
      <AppealDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default App;