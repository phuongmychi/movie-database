const Footer = () => {
  return (
    <>
      <footer className="text-center yellow">
        Designed and Developed by:&nbsp;&nbsp;
        <a
          href="https://www.linkedin.com/in/mohamad-jayyusi/"
          target="_blank"
          rel="noreferrer"
        >
          Mohamad Jayyusi
        </a>
        &nbsp;&nbsp;&#169;&nbsp;&nbsp;
        <span>{new Date().toLocaleDateString()} </span>
      </footer>
    </>
  );
};

export default Footer;
