import { useLanguage } from "../hooks/UseLanguage";


const Footer = () => {
  const { language } = useLanguage();

  const content = {
    en: '© 2023  All rights reserved.',
    zh: '。保留所有权利。',
  };

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-sm">© 2023 PT Kevin Shipping {content[language]}</p>
      </div>
    </footer>
  );
};

export default Footer;
