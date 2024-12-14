//tentar usar .map aqui
const queryType = Array.from(document.querySelectorAll(".query-radio"));
const inputRadio = Array.from(document.querySelectorAll(".inputRadio"));

queryType.forEach((element) => {
  element.addEventListener("click", () => {
    queryType.forEach((div) => div.classList.remove("focused"));
    element.classList.add("focused");

    const index = queryType.findIndex((num) => num === element);
    inputRadio.forEach((input) => input.removeAttribute("checked"));
    inputRadio[index].setAttribute("checked", "");
  });
});
