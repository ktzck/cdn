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

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  const toggleClassElements = document.querySelectorAll('[data-toggle-class]')
  for (let i = 0; i < toggleClassElements.length; i++) {
    const el = toggleClassElements[i]
    const classname = el.getAttribute('data-toggle-class')
    el.addEventListener('click', function() {
      if (el.classList.contains(classname)) {
        el.classList.remove(classname)
      } else {
        el.classList.add(classname)
      }
    })
  }
})
