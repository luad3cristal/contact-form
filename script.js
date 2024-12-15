const botao = document.querySelector("#submit");

const queryType = Array.from(document.querySelectorAll(".query-radio"));
const inputRadio = Array.from(document.querySelectorAll(".inputRadio"));

const displayErrorMessage = Array.from(
  document.querySelectorAll(".displayError")
);

const errorMessage = Array.from(document.querySelectorAll(".error-message"));
const errorMessageQuery = document.querySelector(".error-message-query");

const checkbox = document.querySelector("#agreement");
const errorMessageCheckbox = document.querySelector(".error-message-agreement");

queryType.forEach((element, index) => {
  element.addEventListener("click", () => {
    queryType.forEach((div) => div.classList.remove("focused"));
    element.classList.add("focused");

    inputRadio.forEach((input) => input.removeAttribute("checked"));
    inputRadio[index].setAttribute("checked", "");
  });
});

const displayError = () => {
  displayErrorMessage.forEach((element, index) => {
    element.classList.remove("error");
    errorMessage[index].style.opacity = 0;
    errorMessage[index].style.pointerEvents = "none";

    if (element.type === "email") {
      if (!validateEmail(element.value)) {
        element.classList.add("error");
        errorMessage[index].style.opacity = 1;
        errorMessage[index].style.pointerEvents = "auto";
      } else {
        element.classList.remove("error");
        errorMessage[index].style.opacity = 0;
        errorMessage[index].style.pointerEvents = "none";
      }
    } else {
      if (element.value === null || element.value === "") {
        element.classList.add("error");
        errorMessage[index].style.opacity = 1;
        errorMessage[index].style.pointerEvents = "auto";
      }
    }

    element.addEventListener("input", () => {
      if (element.type === "email") {
        if (!validateEmail(element.value)) {
          element.classList.add("error");
          errorMessage[index].style.opacity = 1;
          errorMessage[index].style.pointerEvents = "auto";
        } else {
          element.classList.remove("error");
          errorMessage[index].style.opacity = 0;
          errorMessage[index].style.pointerEvents = "none";
        }
      } else {
        if (element.value !== null || element.value !== "") {
          element.classList.remove("error");
          errorMessage[index].style.opacity = 0;
          errorMessage[index].style.pointerEvents = "none";
        }
      }
    });
  });

  let count = 0;
  queryType.forEach((query) => {
    if (!query.classList.contains("focused")) count++;
  });
  if (count === queryType.length) {
    queryType.forEach((element) => {
      element.classList.remove("error");
      errorMessageQuery.style.opacity = 0;
      errorMessageQuery.style.pointerEvents = "none";

      if (!element.classList.contains("focused")) {
        element.classList.add("error");
        errorMessageQuery.style.opacity = 1;
        errorMessageQuery.style.pointerEvents = "auto";
      }

      element.addEventListener("click", () => {
        queryType.forEach((element) => element.classList.remove("error"));
        errorMessageQuery.style.opacity = 0;
        errorMessageQuery.style.pointerEvents = "none";
      });
    });
  }

  if (!checkbox.checked) {
    errorMessageCheckbox.style.opacity = 1;
    errorMessageCheckbox.style.pointerEvents = "auto";
  }
};

botao.addEventListener("click", displayError);
checkbox.addEventListener("click", () => {
  if (!checkbox.checked) {
    errorMessageCheckbox.style.opacity = 1;
    errorMessageCheckbox.style.pointerEvents = "auto";
  } else {
    errorMessageCheckbox.style.opacity = 0;
    errorMessageCheckbox.style.pointerEvents = "none";
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
