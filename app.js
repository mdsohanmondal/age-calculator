const input = document.querySelector(".inputDate");
    const submitBtn = document.querySelector(".submitBtn");
    const showAge = document.querySelector(".showAge");

    submitBtn.addEventListener("click", () => {
      const birthDate = input.valueAsDate;
      const today = new Date();

      let year = today.getFullYear() - birthDate.getFullYear();
      let month = today.getMonth() - birthDate.getMonth();
      let day = today.getDate() - birthDate.getDate();

      if (day < 0) {
        month--;
        day += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }

      if (month < 0) {
        year--;
        month += 12;
      }

      const totalMonths = year * 12 + month;
      const diffInDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));

      showAge.innerHTML = `
        <h1>Your age is ${year} years ${month} month ${day} days</h1>
        <h1>Or ${totalMonths} Month</h1>
        <h1>Or ${diffInDays} Days</h1>
      `;
    });