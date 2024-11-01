export const SelectAll = () => {
    const tbody = document.querySelector("tbody");
    const selectAll = document.querySelector("#select-all-btn");

    const checkSelectAll = () => {
        const checkboxes = tbody.querySelectorAll("input[type='checkbox']");
        const checked = tbody.querySelectorAll("input[type='checkbox']:checked");
        selectAll.checked = checkboxes.length === checked.length;
    };

    tbody.addEventListener("change", (event) => {
        if (event.target.type === "checkbox") {
            checkSelectAll();
        }
    });

    selectAll.addEventListener("change", () => {
        const checkboxes = tbody.querySelectorAll("input[type='checkbox']");
        checkboxes.forEach(checkbox => {
            checkbox.checked = selectAll.checked;
        });
        checkSelectAll();
    });
};