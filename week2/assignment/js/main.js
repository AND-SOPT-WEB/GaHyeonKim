import members from "./data.js";
import { renderDatas } from "./render.js";
import { filterDatas, resetDatas } from "./filter.js";


const searchBtn = document.querySelector(".search-btn");
const resetBtn = document.querySelector(".reset-btn");

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
        englishName: document.querySelector("#englishName").value, // 수정된 부분
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
