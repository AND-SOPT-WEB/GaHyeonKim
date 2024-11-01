export const deleteMember = (membersData) => {
    const checkedBoxes = Array.from(document.querySelectorAll('tbody input[type="checkbox"]:checked'));
    const selectedIds = checkedBoxes.map(checkbox => parseInt(checkbox.dataset.memberId)); // id 가져오기

    if (selectedIds.length === 0) {
        alert("선택된 멤버가 없습니다 🫤");
        return membersData; 
    }

    const selectAllCheckbox = document.querySelector("#select-all-btn");
    selectAllCheckbox.checked = false; 

    return membersData.filter(member => !selectedIds.includes(member.id));
};
