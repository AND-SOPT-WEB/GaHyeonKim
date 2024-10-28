export const addMember = (membersData) => {
    let name = document.getElementById("modal-name").value;
    let englishName = document.getElementById("modal-engName").value;
    let github = document.getElementById("modal-github").value;
    let gender = document.getElementById("modal-gender").value;
    let role = document.getElementById("modal-role").value;
    let firstWeekGroup = document.getElementById("modal-week1").value;
    let secondWeekGroup = document.getElementById("modal-week2").value;
  
    if (
      !name.trim() ||
      !englishName.trim() ||
      !github.trim() ||
      !gender ||
      !role ||
      !firstWeekGroup.trim() ||
      !secondWeekGroup.trim()
    ) {
      alert("빈 곳 없이 입력해주세요.");
      return;
    }
  
    const newMemberInfo = {
      id: membersData.length + 1,
      name,
      englishName,
      github,
      gender,
      role,
      firstWeekGroup,
      secondWeekGroup,
    };
  
    return newMemberInfo;
  };
