import copyIcon from "../assets/copy.svg";

export function CopyLink(props) {
  function copyLink() {
    navigator.clipboard.writeText(props.link)
      .then(() => {
        showToast("Copied!");
      })
      .catch((err) => {
        console.error("Failed to copy link:", err);
        let alertMsg = "Failed to copy link.";
        if (window.location.hostname === "0.0.0.0") {
          alertMsg += " Try switching to localhost.";
        } else if (window.location.protocol === "http:") {
          alertMsg += " Try switching to https.";
        }


        alert(alertMsg);
        showToast("Copy failed. See console for link.");
        console.log(`You can highlight and copy this -> ${props.link}`);
      });
  }

  return (
    <img className="copy" src={copyIcon} onClick={copyLink} alt="copy"/>
  );
}

/* Reusing this from a recent personal project: Shows a toast in bottom right corner */
function showToast(message, duration=2000) {
  if (typeof duration !== 'number' || duration <= 0)
    throw new Error("duration must be a positive number");

  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = `
        position:fixed;bottom:1rem;right:1rem;
        background:var(--teal);color:var(--off-white-light);
        padding:.75rem 1rem;border-radius:1rem;z-index:9999;
        transition: 0.75s;
      `;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 750);
  }, duration);
}
