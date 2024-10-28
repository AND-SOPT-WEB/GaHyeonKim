import members from "./data.js";
import { renderDatas } from "./render.js";
import { filterDatas, resetDatas } from "./filter.js";
import { deleteMember } from "./delete.js";

const searchBtn = document.querySelector(".search-btn");
const resetBtn = document.querySelector(".reset-btn");
const deleteBtn = document.querySelector(".delete-btn");
const addBtn = document.querySelector(".add-btn");

// 멤버 데이터 렌더링
if (!localStorage.getItem("membersData")) {
  localStorage.setItem("membersData", JSON.stringify(members));
}
let membersData = JSON.parse(localStorage.getItem("membersData"));

renderDatas(membersData);

// 검색
searchBtn.addEventListener("click", () => {
    const filters = {
        name: document.querySelector("#name").value,
        englishName: document.querySelector("#englishName").value,
        github: document.querySelector("#github").value,
        gender: document.querySelector("#gender").value,
        role: document.querySelector("#role").value,
        firstWeekGroup: document.querySelector("#firstWeekGroup").value,
        secondWeekGroup: document.querySelector("#secondWeekGroup").value,
      };
      

  const filteredMembers = filterDatas(membersData, filters);
  renderDatas(filteredMembers);

});

// 초기화
resetBtn.addEventListener("click", resetDatas);

// 멤버 삭제
deleteBtn.addEventListener("click", () => {
    const storedMembers = JSON.parse(localStorage.getItem("membersData")) || [];
    const updatedMembersData = deleteMember(storedMembers);
    localStorage.setItem("membersData", JSON.stringify(updatedMembersData));
    renderDatas(updatedMembersData);
});

// 모달
// 모달 열고 닫기
const modalCloseBtn = document.getElementById("modal-close-btn");

addBtn.addEventListener("click", () => {
    modal.showModal();
  });

modalCloseBtn.addEventListener("click", () => {
    modal.close();
  });