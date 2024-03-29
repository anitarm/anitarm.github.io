function add_value() {
    let input = document.getElementById("input");
    let inputValue = input.value;

    if (inputValue !== "") {
        let span = document.createElement("SPAN");
        span.className = "span_content";
        span.innerHTML = inputValue;

        let spanClose = document.createElement("SPAN");
        spanClose.className = "span_content_close";
        spanClose.innerHTML = "X"
        
        span.appendChild(spanClose);

        spanClose.addEventListener("click", function () {
            span.classList.add("content_none");

        });

        let content = document.getElementById("content");
        content.appendChild(span);
    }

    input.value = "";
}


input.addEventListener("keyup", function (keyboardEvent) {
    if (keyboardEvent.keyCode === 13 && input.value !== "") {
      document.getElementById("input_button").click();
    }
  });
