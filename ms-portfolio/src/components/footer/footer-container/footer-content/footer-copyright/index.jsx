import './FooterCopyright.scss';

const FooterCopyright = () => {
  return (
    <div className="footer-copyright">
      <p>&copy; {new Date().getFullYear()} Manning Stinson</p>
    </div>
  );
};

export default FooterCopyright;