const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// modal
const modal = document.getElementById("ipModal");
const modalContent = modal.querySelector("div"); // Get the modal content div
const closeBtn = document.getElementById("closeModal");
const ipInfo = document.getElementById("ipInfo");
const locationInfo = document.getElementById("locationInfo");
const coolfooter = document.getElementById("coolfooter");

// heheheh
async function getIPAndLocation() {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    if (data.ip) {
      // Update modal content
      ipInfo.textContent = `Did you know your IP is: ${data.ip}?`;
    } else {
      throw new Error("Unable to fetch data");
    }
  } catch (error) {
    ipInfo.textContent = "Did you know your IP is: ERROR";
    console.error("Error fetching IP:", error);
  }
}

function openModal() {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  modalContent.classList.remove("modal-close");
  modalContent.classList.add("modal-open");
}

function closeModal() {
  modalContent.classList.remove("modal-open");
  modalContent.classList.add("modal-close");

  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    modalContent.classList.remove("modal-close");
  }, 200); // Match animation duration
}

coolfooter.onclick = openModal;
closeBtn.onclick = closeModal;

window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};

getIPAndLocation();
