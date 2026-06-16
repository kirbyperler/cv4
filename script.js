console.log("Collective site loaded.");

const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");

if (menuButton && mobileNav) {
  menuButton.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });

  document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  });
}

const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Request received. Connect this form to Formspree, Firebase, or your backend later.");
    form.reset();
  });
}

const modal = document.getElementById("fileModal");
const modalLabel = document.getElementById("modalLabel");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.querySelector(".close-modal");

const files = {
  development: {
    label: "FILES.001",
    title: "Development Files",
    text: "Session photos. Skill clips. Testing. Progress reports."
  },
  translation: {
    label: "FILES.002",
    title: "Translation Files",
    text: "In-game clips. Shift clips. Situational footage."
  },
  camp: {
    label: "FILES.003",
    title: "Camp Files",
    text: "Advisory Camp. Testing. Classroom. Whiteboards. On ice."
  },
  roller: {
    label: "FILES.004",
    title: "Roller Files",
    text: "Roller team. Jersey reveals. Highlights. Lifestyle."
  },
  organization: {
    label: "FILES.005",
    title: "Organization Files",
    text: "Team consulting. Program design. Development models."
  }
};

document.querySelectorAll(".file-card").forEach(card => {
  card.addEventListener("click", () => {
    const file = files[card.dataset.file];

    modalLabel.textContent = file.label;
    modalTitle.textContent = file.title;
    modalText.textContent = file.text;

    modal.classList.add("active");
  });
});

if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
  });
}

if (modal) {
  modal.addEventListener("click", event => {
    if (event.target === modal) {
      modal.classList.remove("active");
    }
  });
}