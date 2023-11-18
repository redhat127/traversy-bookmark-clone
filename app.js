const menuBtn = document.querySelector("#menu-btn");
const menus = document.querySelector("#menus");
const featuresTabs = document.querySelector("#features-tabs");
const headerLogo = document.querySelector("#header-logo");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menus.classList.toggle("flex");
  menus.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
  if (!menuBtn.classList.contains("open")) {
    menuBtn.classList.remove("fixed", "right-8", "top-12");
    headerLogo.classList.remove("!fixed", "left-8", "top-12");
    headerLogo.src = "images/logo-bookmark.svg";
  } else {
    menuBtn.classList.add("fixed", "right-8", "top-12");
    headerLogo.classList.add("!fixed", "left-8", "top-12");
    headerLogo.src = "images/logo-bookmark-footer.svg";
  }
});

featuresTabs.addEventListener("click", (e) => {
  document
    .querySelectorAll(".feature-tab")
    .forEach((f) => f.classList.remove("border-red-500"));

  document.querySelectorAll(".feature-tab-content").forEach((f) => {
    f.classList.remove("flex");
    f.classList.add("hidden");
  });

  if (e.target.classList.contains("feature-tab")) {
    e.target.classList.add("border-red-500");
    const selectedTab = e.target.dataset.tab;
    const selectedTabContent = document.querySelector("#" + selectedTab);
    selectedTabContent.classList.remove("hidden");
    selectedTabContent.classList.add("flex");
  }
});

window.addEventListener("resize", () => {
  if (menuBtn.classList.contains("open")) {
    menuBtn.click();
  }
});
