const Button = ({
  className,
  text,
  id,
  href,
  download,
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
        className={`cta-button group flex items-center justify-center ${
          isDownload ? "bg-cyan-100 text-black " : ""
        }`}
        style={
          isDownload
            ? {
                transition: "none",
                lineHeight: "1",
              }
            : {}
        }
      >
        {!isDownload && <div className="bg-circle" />}
        <p
          className={`text ${
            isDownload
              ? "text text-base text-black hover:text-lg  hover:text-shadow-black-200 transition:none"
              : ""
          }`}
        >
          {text}
        </p>
        {(
          <div className="arrow-wrapper">
            <img src="/images/arrow-down.svg" alt="arrow" />
          </div>
        )}
        {isDownload && (
          <div className="arrow-wrapper">
            <img src="/images/download.svg" alt="download" />
          </div>
        )}
      </div>
    </a>
  );
};

export default Button;
