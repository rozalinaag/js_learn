5 lesson in JS: DOM API

/* get content of tag P */

export function getPText(root) {
  const children = Array.from(root.parentNode.body.children);

  return children
    .filter((element) => element.tagName === 'P')
    .map((element) => element.innerHTML.trim());
}

const data = getPText(document.documentElement);

console.log(data);
