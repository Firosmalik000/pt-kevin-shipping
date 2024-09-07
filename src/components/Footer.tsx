import { useLanguage } from '../hooks/UseLanguage';

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    en: '© 2024  All rights reserved.',
    zh: '。保留所有权利。',
  };

  return (
    <footer className=" border-t-2 py-6 mx-[100px]">
      <div className="max-w-screen-xl mx-auto text-center">
        <p className="text-sm">© 2024 PT Kevin Shipping {content[language]}</p>
      </div>
    </footer>
  );
};

export default Footer;
