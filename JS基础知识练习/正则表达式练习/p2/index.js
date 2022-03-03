var reg = /\s.+/g;

text = content.innerHTML;

let newText = text.replace(reg, function (s) {
  return `<p>${s}</p>`;
});
console.log(newText);
content.innerHTML = newText;
