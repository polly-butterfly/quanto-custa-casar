import React from 'react';

// IMPORTANT: Replace the placeholder below with the full Base64 string of your logo image.
// Example: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."
const LOGO_BASE64 = "data:image/png;base64,PASTE_YOUR_FULL_BASE64_STRING_HERE"; 

const Header: React.FC = () => {
  return (
    <header className="bg-[#EAE6E1] text-[#6A5256] p-6 shadow-md text-center">
      {LOGO_BASE64 !== "data:image/png;base64,PASTE_YOUR_FULL_BASE64_STRING_HERE" && (
        <img src={LOGO_BASE64} alt="Buttterfly Cerimonial e Eventos Logo" className="mx-auto mb-4 h-20 md:h-24 w-auto" />
      )}
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#5D3A3A] flex items-center justify-center">
        <i className="fas fa-ring mr-3 text-2xl sm:text-3xl text-[#8C6B72]"></i>Quanto Custa Casar?
      </h1>
      <p className="mt-2 text-md sm:text-lg text-[#8C6B72]">Planeje seu casamento dos sonhos com nossa calculadora detalhada.</p>
    </header>
  );
};

export default Header;