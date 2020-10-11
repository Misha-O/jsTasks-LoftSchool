const path = "/users/download/index.html";

let isHtml = (path) => {
  let isHtmlCopy = ".html";

  let htmlEnd = path.slice(-5);
  return isHtmlCopy == htmlEnd;
};

console.log(isHtml(path));
