const students = [
    { name: "Alice", chemistry: 75, biology: 85, dob: "15-06-2000" },
    { name: "Bob", chemistry: 85, biology: 85, dob: "10-07-2000" },
    { name: "Charlie", chemistry: 85, biology: 80, dob: "15-06-1999" },
    // Add more student objects here as needed for testing
  ];
  
  // Helper function to parse the date in DD-MM-YYYY format
  function parseDate(dob) {
    const [day, month, year] = dob.split("-").map(Number);
    return new Date(year, month - 1, day); // month is 0-indexed in Date
  }
  
  students.sort((a, b) => {
    // Calculate total marks for both students
    const totalMarksA = a.chemistry + a.biology;
    const totalMarksB = b.chemistry + b.biology;
  
    // First, compare by total marks
    if (totalMarksA !== totalMarksB) {
      return totalMarksB - totalMarksA;
    }
  
    // If total marks are the same, compare by biology marks
    if (a.biology !== b.biology) {
      return b.biology - a.biology;
    }
  
    // If biology marks are the same, compare by chemistry marks
    if (a.chemistry !== b.chemistry) {
      return b.chemistry - a.chemistry;
    }
  
    // If chemistry marks are also the same, compare by date of birth
    const dobA = parseDate(a.dob);
    const dobB = parseDate(b.dob);
    return dobA - dobB;
  });
  
  console.log(students);
  