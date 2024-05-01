let form = document.getElementById("salary-form")

form.addEventListener('submit', function (e) {
    e.preventDefault()
    //prevent the page from refreshing

    let basic_salary = document.getElementById("basic_salary").value;
    let benefits = document.getElementById("benefits").value;

  
 // Calculate gross salary
 let grossSalary = Number(basic_salary) + Number(benefits);
   //check form input
    if (basic_salary === 0 || benefits === 0) {
        document.getElementById("gross-salary").innerHTML = grossSalary
    } else { document.getElementById("gross-salary").innerHTML = "Ensure basic salary and benefits are valid!" }
   

    // Display the gross salary
    let grossSalaryDisplay = document.getElementById("gross-salary");
    grossSalaryDisplay.textContent = `Gross Salary: ${grossSalary}`;
}
)