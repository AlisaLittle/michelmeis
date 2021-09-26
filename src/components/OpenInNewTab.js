import ReactGA from "react-ga";

export const openInNewTab = (url, title) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
  ReactGA.event({
    category: "External Links",
    action: url,
    label: title,
  });
};
