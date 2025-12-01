export const formatDate = (dateStr) => {
  if (!dateStr) return "";

  let day, month, year;

  // Caso dd/mm/yyyy
  if (dateStr.includes("/")) {
    [day, month, year] = dateStr.split("/");
  }
  // Caso yyyy-mm-dd
  else if (dateStr.includes("-")) {
    [year, month, day] = dateStr.split("-");
  } 
  else {
    return "";
  }

  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};
