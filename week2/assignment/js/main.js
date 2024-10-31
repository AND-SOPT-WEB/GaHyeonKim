import members from "./data.js";
import { renderDatas } from "./render.js";
import { filterDatas, resetDatas } from "./filter.js";
import { deleteMember } from "./delete.js";
import { addMember } from "./add.js";
import { SelectAll } from "./selectAll.js";

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
    membersData = updatedMembersData; 
    localStorage.setItem("membersData", JSON.stringify(updatedMembersData));
    renderDatas(updatedMembersData);
});

// 모달
// 모달 열고 닫기
const modalCloseBtn = document.getElementById("modal-close-btn");
const submitAddMember = document.querySelector(".modal-form");


addBtn.addEventListener("click", () => {
    // 모달 필드 초기화
    document.getElementById("modal-name").value = '';
    document.getElementById("modal-engName").value = '';
    document.getElementById("modal-github").value = '';
    document.getElementById("modal-gender").value = '';
    document.getElementById("modal-role").value = '';
    document.getElementById("modal-week1").value = '';
    document.getElementById("modal-week2").value = '';

    modal.showModal();
  });

modalCloseBtn.addEventListener("click", () => {
    modal.close();
  });

modal.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) modal.close();
  });

submitAddMember.addEventListener("submit", (e) => {
    e.preventDefault();
    const newMember = addMember(membersData);

    if (newMember) {
      membersData.push(newMember);
      localStorage.setItem("membersData", JSON.stringify(membersData));
      renderDatas(membersData);
      modal.close();

      submitAddMember.reset(); // 폼 리셋
    }
  });

// 전체선택
document.addEventListener("DOMContentLoaded", () => {
    SelectAll();
    });