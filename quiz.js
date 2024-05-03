document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const RadioInput = button.querySelector("input");
            RadioInput.checked = true;
            const answer = button.parentElement.querySelector("#answer").textContent;
            if (RadioInput.id === answer) {
                const otherButtons = RadioInput.parentElement.parentElement.querySelectorAll("input");
                otherButtons.forEach(other => {
                    other.parentElement.style.backgroundColor = "cadetblue";
                })
                button.style.backgroundColor = "green";
            } else {
                button.style.backgroundColor = "red";
            }
        })
    })
})