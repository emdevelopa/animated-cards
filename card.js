let parent;
document
  .querySelectorAll(".box")
  .forEach((ele) => ele.addEventListener("click", toggleFlex));

function toggleFlex(event) {
  let currentParent = event.target.closest(".box");

  if (parent == currentParent) return parent.classList.toggle("current");
  parent?.classList.remove("current");

  parent = currentParent;
  parent.classList.add("current");
}

document.body.addEventListener("click", function (event) {
  if (!event.target.closest(".box")) {
    if (parent) {
      parent.classList.remove("current");
      parent = null; 
    }
  }
});
