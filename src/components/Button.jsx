const Button = ({
  className,
  text,
  id,
  href,
  download,
  hideArrow = false,
  hideCircle = false,
  variant = "primary",
}) => {
  const handleClick = (e) => {
    if (!href) {
      e.preventDefault();
      const target = document.getElementById("counter");
      if (target && id) {
        const offset = window.innerHeight * 0.15;
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  const isDownload = variant === "download";

  return (
    <a
      href={href || "#"}
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`}
      download={download}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
    >
      <div
        className={`cta-button group ${
          isDownload ? "bg-white-10 text-white border border-white hover:bg-white hover:text-black transition-all duration-300" : ""
        }`}
      >
        {!hideCircle && !isDownload && <div className="bg-circle" />}
        <p className="text">{text}</p>
        {!hideArrow && (
          <div className="arrow-wrapper">
            <img src="/images/arrow-down.svg" alt="arrow" />
          </div>
        )}
      </div>
    </a>
  );
};

export default Button;