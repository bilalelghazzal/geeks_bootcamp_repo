import React from "react";

function BaseButton({
  text,
  color,
  action,
  type = "button",
  disabled = false,
  loading = false,
  className = "",
  style = {},
  children,
}) {
  const isDisabled = disabled || loading;

  const buttonStyle = {
    backgroundColor: color,
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: isDisabled ? "not-allowed" : "pointer",
    opacity: isDisabled ? 0.6 : 1,
    ...style,
  };

  const handleClick = (event) => {
    if (isDisabled) return;

    // Show a user-visible alert confirming the click
    const buttonLabel =
      text || (children && typeof children === "string" ? children : "Button");
    window.alert(`${buttonLabel} was clicked — action happening...`);

    if (typeof action === "function") {
      action(event);
    }
  };

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={className}
      style={buttonStyle}
      onClick={handleClick}
    >
      {loading ? "Loading..." : children || text}
    </button>
  );
}

export default BaseButton;
