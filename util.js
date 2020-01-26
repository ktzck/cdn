/**
 * function: toggleClass
 *
 * @param {string} selector
 * @param {string} classname
 */
function toggleClass(selector, classname) {
  var el = document.querySelector(selector)
  if (el) {
    el.addEventListener('click', function() {
      if (el.classList.contains(classname)) {
        el.classList.remove(classname)
      } else {
        el.classList.add(classname)
      }
    })
  }
}
