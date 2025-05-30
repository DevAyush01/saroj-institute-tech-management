import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PopupForm: React.FC = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  useEffect(() => {
    // Track if we've shown the popup in this session
    const hasShownPopup = sessionStorage.getItem("hasShownPopup");

    if (!scriptLoaded) {
      const script1 = document.createElement("script");
      script1.src = "https://in8cdn.npfs.co/js/widget/npfwpopup.js";
      script1.async = true;

      script1.onload = () => {
        setScriptLoaded(true);

        // Initialize the popup widget
        const initScript = document.createElement("script");
        initScript.innerHTML = `
          window.npfWidgetInstance = new NpfWidgetsInit({
            widgetId: "c4686ca3db50effadb9f24fc7ca22401",
            baseurl: "widgets.in8.nopaperforms.com",
            formTitle: "Enquiry Form",
            titleColor: "#FF0033",
            backgroundColor: "#ddd",
            iframeHeight: "500px",
            buttonbgColor: "#4c79dc",
            buttonTextColor: "#FFF",
          });
        `;
        document.body.appendChild(initScript);

        if (!hasShownPopup) {
          const popupTimer = setTimeout(() => {
            showPopup();
            sessionStorage.setItem("hasShownPopup", "true");
          }, 3000);

          // Clean up timer on unmount
          return () => clearTimeout(popupTimer);
        }
      };

      document.body.appendChild(script1);

      // Cleanup script on unmount
      return () => {
        if (script1.parentNode) {
          document.body.removeChild(script1);
        }
      };
    }

    // Show popup when navigating to homepage after 3 seconds
    if (isHomepage && scriptLoaded) {
      const homepagePopupTimer = setTimeout(() => {
        showPopup();
      }, 3000);

      return () => clearTimeout(homepagePopupTimer);
    }
  }, [scriptLoaded, isHomepage]);

  // Define showPopup with proper types
  const showPopup = () => {
    const btn = document.querySelector(
      ".npfWidgetButton.npfWidget-c4686ca3db50effadb9f24fc7ca22401"
    ) as HTMLButtonElement | null;

    if (btn) {
      btn.click();
    }
  };

  return (
    <button
      type="button"
      className="npfWidgetButton npfWidget-c4686ca3db50effadb9f24fc7ca22401"
      onClick={showPopup}
      style={{
        position: "fixed",
        right: "-60px",
        top: "50%",
        transform: "translateY(-50%) rotate(-90deg)",
        cursor: "pointer",
        backgroundColor: "#dc2626",
        color: "#fff",
        padding: "0.6rem 2rem",
        borderRadius: "0.375rem 0.375rem 0 0.375rem",
        boxShadow:
          "0 10px 15px -3px rgba(220, 38, 38, 0.5), 0 4px 6px -2px rgba(220, 38, 38, 0.25)",
        transition: "background-color 0.3s ease",
        zIndex: 50,
      }}
    >
      Enquire Now!
    </button>
  );
};

export default PopupForm;
