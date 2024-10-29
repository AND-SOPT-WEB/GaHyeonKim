export const SelectAll = () => {
    const checkboxes = document.querySelectorAll("tbody input[type='checkbox']");
    const selectAll = document.querySelector("#select-all-btn");

    const checkSelectAll = () => {
        const checked = document.querySelectorAll("tbody input[type='checkbox']:checked");
        selectAll.checked = checkboxes.length === checked.length;
    };

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", checkSelectAll);
    });

    selectAll.addEventListener("change", () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = selectAll.checked;
        });
        checkSelectAll();
    });
};
