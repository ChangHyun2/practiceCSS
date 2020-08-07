const collapseElement = function (element) {
  element.style.height = element.scrollHeight + "px";
  const elementTransition = element.style.transition;
  element.style.transition = "";

  element.style.height = element.scrollHeight + "px";
  requestAnimationFrame(() => {
    element.style.transition = elementTransition;
    element.style.height = 0 + "px";
  });

  const transitionEndHandler = () => {
    element.dataset.collapsed = "true";
    element.classList.remove("show");
    element.removeEventListener("transitionend", transitionEndHandler);
  };
  element.addEventListener("transitionend", transitionEndHandler);
};

const expandElement = (element) => {
  element.classList.add("show");

  element.style.height = 0;
  element.style.height = element.scrollHeight + "px";

  element.dataset.collapsed = "false";
};

const expandOrCollapseElement = (element) =>
  element.dataset.collapsed == "false"
    ? collapseElement(element)
    : expandElement(element);

const accordianNav = document.querySelector(".accordian-nav");
const accordian = document.querySelector(".accordian");

const navClickHandler = (e) => {
  if (!e.target.dataset || !e.target.dataset.target) return;

  const targetId = e.target.dataset.target;
  const targetCandidates = Array.from(
    accordian.querySelectorAll(".accordian__bellow-content")
  );
  const target = targetCandidates.find(
    (bellow) => bellow.dataset.toggler === targetId
  );

  expandOrCollapseElement(target);
};
accordianNav.addEventListener("click", (e) => navClickHandler(e));

const togglerClickHandler = (e) => {
  const collapsibleElement = e.target.nextElementSibling;
  expandOrCollapseElement(collapsibleElement);
};
accordian.addEventListener(
  "click",
  (e) =>
    e.target.className.indexOf("accordian-btn") !== -1 && togglerClickHandler(e)
);

const accordianRow = document.querySelector(".accordian-row");
const rowTogglerClickHandler = (e) => {
  const collapsibleElement = e.target.nextElementSibling;
  const collapsibles = accordianRow.querySelectorAll(".collapse-row");
  collapsibles.forEach((btn) => btn.classList.remove("show"));
  collapsibleElement.classList.add("show");
};
accordianRow.addEventListener(
  "click",
  (e) => e.target.dataset.toggler === "true" && rowTogglerClickHandler(e)
);
