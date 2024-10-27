export const renderDatas = (membersData) => {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
  
    membersData.forEach((item) => {
      const {
        id,
        name,
        englishName,
        github,
        gender,
        role,
        firstWeekGroup,
        secondWeekGroup,
      } = item;
  
      const tr = document.createElement("tr");
      tr.setAttribute("id", id);
  
      tr.innerHTML = `
        <td><input type="checkbox" class="check-item" /></td>
        <td id="name">${name}</td>
        <td id="englishName">${englishName}</td>
        <td id="github">${github}</td>
        <td id="gender">${gender === "male" ? "남자" : "여자"}</td>
        <td id="role">${role}</td>
        <td id="firstWeekGroup">${firstWeekGroup}</td>
        <td id="secondWeekGroup">${secondWeekGroup}</td>
      `;
  
      tbody.appendChild(tr);
    });
  };