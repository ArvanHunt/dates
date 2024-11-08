function getRemainingDaysInMonth() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
  
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const remainingDays = lastDayOfMonth.getDate() - today.getDate();
  
    return remainingDays;
  }
  
  document.getElementById("remaining-days").textContent = `${getRemainingDaysInMonth()} days left`;
  