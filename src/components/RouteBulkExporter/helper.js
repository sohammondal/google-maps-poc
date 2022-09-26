export const download = (filename, textStr) => {
  const pom = document.createElement("a");
  pom.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(textStr)
  );
  pom.setAttribute("download", filename);

  if (document.createEvent) {
    var event = document.createEvent("MouseEvents");
    event.initEvent("click", true, true);
    pom.dispatchEvent(event);
  } else {
    pom.click();
  }
};
