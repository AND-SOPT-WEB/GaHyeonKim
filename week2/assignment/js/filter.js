import { renderDatas } from "./render.js";

const filterDatas = (membersData, filters) => {
    return membersData.filter((member) => {
        const {
            name,
            englishName,
            github,
            gender,
            role,
            firstWeekGroup,
            secondWeekGroup,
        } = filters;

        if (name && !member.name.includes(name)) return false;
        if (englishName && !member.englishName.includes(englishName)) return false;
        if (github && !member.github.includes(github)) return false;
        if (gender && member.gender !== gender) return false;
        if (role && member.role !== role) return false;
        if (firstWeekGroup && member.firstWeekGroup != firstWeekGroup) return false;
        if (secondWeekGroup && member.secondWeekGroup != secondWeekGroup) return false;

        return true;
    });
};

const resetDatas = () => {
    document.querySelector("#name").value = "";
    document.querySelector("#englishName").value = "";
    document.querySelector("#github").value = "";
    document.querySelector("#gender").value = "";
    document.querySelector("#role").value = "";
    document.querySelector("#firstWeekGroup").value = "";
    document.querySelector("#secondWeekGroup").value = "";

    const selectAllCheckbox = document.querySelector("#select-all-btn");

    selectAllCheckbox.checked = false; 

    const membersData = JSON.parse(localStorage.getItem("membersData")) || [];
    renderDatas(membersData);
};

export { filterDatas, resetDatas };
