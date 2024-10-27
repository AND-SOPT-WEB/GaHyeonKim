import members from "./data.js";

if (!localStorage.getItem("membersData")) {
  localStorage.setItem("membersData", JSON.stringify(members));
}

const membersData = JSON.parse(localStorage.getItem("membersData"));

membersData.forEach((member) => {
  const {
    id,
    name,
    englishName,
    github,
    gender,
    role,
    firstWeekGroup,
    secondWeekGroup,
  } = member;

  const tbody = document.querySelector("tbody");

  const tr = document.createElement("tr");
  tr.setAttribute("id", id);

  const checkboxTd = document.createElement("td");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkboxTd.appendChild(checkbox);

  const nameTd = document.createElement("td");
  nameTd.innerText = name;

  const englishNameTd = document.createElement("td");
  englishNameTd.innerText = englishName;

  const githubTd = document.createElement("td");
  githubTd.innerText = github;

  const genderTd = document.createElement("td");
  genderTd.innerText = gender === "male" ? "남자" : "여자";

  const roleTd = document.createElement("td");
  roleTd.innerText = role;

  const week1GroupTd = document.createElement("td");
  week1GroupTd.innerText = firstWeekGroup;

  const week2GroupTd = document.createElement("td");
  week2GroupTd.innerText = secondWeekGroup;

  tr.append(
    checkboxTd,
    nameTd,
    englishNameTd,
    githubTd,
    genderTd,
    roleTd,
    week1GroupTd,
    week2GroupTd
  );

  tbody.appendChild(tr);
});