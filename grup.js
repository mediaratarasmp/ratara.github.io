// COPY LINK + NOTIF
function copyLink(event, link) {
  event.stopPropagation();
  event.preventDefault();

  navigator.clipboard.writeText(link);

  const notif = document.getElementById("notif");
  notif.classList.add("show");

  setTimeout(() => {
    notif.classList.remove("show");
  }, 2500);
}
