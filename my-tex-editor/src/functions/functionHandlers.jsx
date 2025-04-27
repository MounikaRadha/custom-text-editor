const insertHtml = (tag) => {
  document.execCommand(
    "insertHTML",
    false,
    `<${tag}>${document.getSelection().toString()}</${tag}>`,
  );
};
const formatText = (command, value = null) => {
  document.execCommand(command, false, value);
};
const makeBold = () => {
  formatText("bold");
};
const makeItalic = () => {
  formatText("italic");
};
const makeUnderline = () => {
  formatText("underline");
};
const makeHeadingH1 = () => {
  formatText("formatBlock", "<h1>");
};
const makeQuotes = () => {
  insertHtml("q");
};
const makeCodeBlock = () => {
  insertHtml("pre");
};
const makeUnorderedList = () => {
  formatText("insertUnorderedList");
};
const makeOrderedList = () => {
  formatText("insertUnorderedList");
};
const functionhandlers = {
  formatText,
  makeBold,
  makeItalic,
  makeUnderline,
  makeHeadingH1,
  makeQuotes,
  insertHtml,
  makeCodeBlock,
  makeUnorderedList,
  makeOrderedList,
};
export default functionhandlers;
