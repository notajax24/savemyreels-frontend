import React from "react";

const Terms = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-900 text-white">
      <div className="max-w-screen-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-400 mb-4">
          By accessing and using this website, you agree to the following terms
          and conditions. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">1. Use of Service</h2>
        <p className="text-gray-400 mb-4">
          Our service is designed to allow users to download publicly available
          Instagram content for personal use only. You agree not to use the
          service for any illegal or unauthorized purpose.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">2. Privacy</h2>
        <p className="text-gray-400 mb-4">
          We respect your privacy and do not collect any personal data without
          your consent. We do not require login information to use our service.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">3. Liability</h2>
        <p className="text-gray-400 mb-4">
          We are not responsible for any misuse of our service. You agree to use
          our service responsibly and acknowledge that we are not liable for any
          damages or losses arising from its use.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">
          4. Modifications to Terms
        </h2>
        <p className="text-gray-400 mb-4">
          We reserve the right to modify these terms at any time. It is your
          responsibility to review these terms periodically. Your continued use
          of the service constitutes acceptance of any changes.
        </p>

        <p className="text-gray-400 mt-8">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Terms;
