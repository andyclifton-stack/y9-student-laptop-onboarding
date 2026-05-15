const pages = [
  ["index.html", "Start Here", "index"],
  ["requirements.html", "Requirements", "requirements"],
  ["before-hand-in.html", "Before Hand-In", "before"],
  ["hand-in-collection.html", "Hand-In", "handin"],
  ["what-it-will-do.html", "IT Setup", "it"],
  ["using-laptop.html", "Using It", "using"],
  ["safeguarding.html", "Safeguarding", "safeguarding"],
  ["support-repairs.html", "Support", "support"],
  ["leaving-school.html", "Leaving", "leaving"],
  ["faqs.html", "FAQs", "faqs"],
  ["downloads.html", "Downloads", "downloads"],
];

function renderHeader() {
  const current = document.body.dataset.page || "";
  const nav = pages
    .map(([href, label, key]) => {
      const active = current === key ? ' aria-current="page" class="active"' : "";
      return `<a href="${href}"${active}>${label}</a>`;
    })
    .join("");

  document.getElementById("site-header").innerHTML = `
    <header class="site-header">
      <a class="brand" href="index.html" aria-label="Student Laptop Onboarding home">
        <img src="assets/img/claremont-logo.png" alt="Claremont School">
        <span>Student Laptop Onboarding</span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
        <span></span><span></span><span></span>
        <span class="sr-only">Menu</span>
      </button>
      <nav id="site-nav" class="site-nav" aria-label="Primary navigation">${nav}</nav>
    </header>
  `;
}

function renderFooter() {
  document.getElementById("site-footer").innerHTML = `
    <footer class="site-footer">
      <div>
        <img src="assets/img/claremont-logo.png" alt="Claremont School" class="footer-logo">
        <p>Year 9 student laptop onboarding guidance for parents and students.</p>
      </div>
      <div>
        <p><strong>Need help?</strong></p>
        <p>For questions about student laptop onboarding, please email <a href="mailto:office@claremontschool.co.uk">office@claremontschool.co.uk</a>.</p>
      </div>
      <div>
        <p><strong>Important</strong></p>
        <p>All laptops must be handed in by Friday 3rd July 2026 to guarantee setup for September.</p>
      </div>
    </footer>
  `;
}

function wireNavigation() {
  const button = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!button || !nav) return;
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open", !expanded);
  });
}

renderHeader();
renderFooter();
wireNavigation();
