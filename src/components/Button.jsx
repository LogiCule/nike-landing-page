const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border hover:ring ring-red-400 font-montserrat text-lg leading-none ${
        backgroundColor || "bg-coral-red"
      } rounded-full ${textColor || "text-white"} ${borderColor} ${
        fullWidth && "w-full"
      }`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="button-icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
