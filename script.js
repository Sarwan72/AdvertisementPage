document.getElementById("leadForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const mobile = document.getElementById("mobile").value;
  alert("Thanks! We'll contact you at: " + mobile);
});

function submitQuery() {
  const input = document.getElementById("queryInput");
  const value = input.value.trim();

  if (!value) {
    alert("Please enter your query before submitting.");
    return;
  }

  alert("Thank you! Your query has been submitted.");
  input.value = "";
}

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.setAttribute("tabindex", "0");

  question.addEventListener("click", () => {
    const parent = question.parentElement;

    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== parent) {
        item.classList.remove("active");
      }
    });

    parent.classList.toggle("active");

    if (parent.classList.contains("active")) {
      parent.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

  question.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      question.click();
    }
  });
});

document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
