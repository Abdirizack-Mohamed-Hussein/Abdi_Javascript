  

  function calculateSalary() {
    
    let basic_salary = parseFloat(document.getElementById('basic_salary').value);
    let benefits = parseFloat(document.getElementById('benefits').value);

    let gross_salary = calc_gross(basic_salary, benefits);
    let NHIF = calc_nhif(gross_salary);
    let NSSF = calc_nssf(gross_salary);
    let NHDF = calc_nhdf(gross_salary);
    let taxable_income = calc_taxable_income(gross_salary, NSSF, NHDF);
    let payee = calc_payee(taxable_income);
    let net_salary = calc_net_salary(gross_salary, NHIF, NHDF, NSSF, payee);

    document.getElementById('gross_salary').innerText = "Gross Salary: " + gross_salary;
    document.getElementById('NHIF').innerText = "NHIF: " + NHIF;
    document.getElementById('NSSF').innerText = "NSSF: " + NSSF;
    document.getElementById('NHDF').innerText = "NHDF: " + NHDF;
    document.getElementById('taxable_income').innerText = "Taxable Income: " + taxable_income;
    document.getElementById('payee').innerText = "PAYEE: " + payee;
    document.getElementById('net_salary').innerText = "Net Salary: " + net_salary;

    document.getElementById('results').style.display = 'block';
  }

  function calc_gross(basic_salary, benefits) {
    return basic_salary + benefits;
}

function calc_nhif(gross_salary) {
    if (gross_salary >= 0 && gross_salary <= 5999) {
        return 150;
    } else if (gross_salary >= 6000 && gross_salary <= 7999) {
        return 300;
    } else if (gross_salary >= 8000 && gross_salary <= 11999) {
        return 400;
    } else if (gross_salary >= 12000 && gross_salary <= 14999) {
        return 500;
    } else if (gross_salary >= 15000 && gross_salary <= 19999) {
        return 600;
    } else if (gross_salary >= 20000 && gross_salary <= 24999) {
        return 750;
    } else if (gross_salary >= 25000 && gross_salary <= 29999) {
        return 850;
    } else if (gross_salary >= 30000 && gross_salary <= 34999) {
        return 900;
    } else if (gross_salary >= 35000 && gross_salary <= 39999) {
        return 950;
    } else if (gross_salary >= 40000 && gross_salary <= 44999) {
        return 1000;
    } else if (gross_salary >= 45000 && gross_salary <= 49999) {
        return 1100;
    } else if (gross_salary >= 50000 && gross_salary <= 59999) {
        return 1200;
    } else if (gross_salary >= 60000 && gross_salary <= 69999) {
        return 1300;
    } else if (gross_salary >= 70000 && gross_salary <= 79999) {
        return 1400;
    } else if (gross_salary >= 80000 && gross_salary <= 89999) {
        return 1500;
    } else if (gross_salary >= 90000 && gross_salary <= 99999) {
        return 1600;
    } else {
        return 1700; // For gross salary 100,000 and above
    }
}

let basic_salary = Number(prompt("Enter basic salary:"));
let benefits = Number(prompt("Enter benefits:"));

let gross_salary = calc_gross(basic_salary, benefits);
console.log("Gross Salary:", gross_salary);

let NHIF = calc_nhif(gross_salary);
console.log("NHIF:", NHIF);

function calc_nssf(gross_salary) {
    let nssf_contribution = 0;
    if (gross_salary <= 18000) {
        nssf_contribution = gross_salary * 0.06;
    } else {
        nssf_contribution = 18000 * 0.06;
    }
    return nssf_contribution;
}

let NSSF = calc_nssf(gross_salary);
console.log("NSSF:", NSSF);

function calc_nhdf(gross_salary) {
    return gross_salary * 0.015;
}

let NHDF = calc_nhdf(gross_salary);
console.log("NHDF:", NHDF);

function calc_taxable_income(gross_salary, nssf_contribution, nhdf_contribution) {
    return gross_salary - (nssf_contribution + nhdf_contribution);
}

let taxable_income = calc_taxable_income(gross_salary, NSSF, NHDF);
console.log("Taxable Income:", taxable_income);

function calc_payee(taxable_income) {
    let payee = 0;
    let relief = 2400; // Personal relief
    if (taxable_income <= 24000) {
        payee = taxable_income * 0.1 - relief;
    } else if (taxable_income <= 32333) {
        payee = (24000 * 0.1) + (taxable_income - 24000) * 0.25 - relief;
    } else if (taxable_income <= 500000) {
        payee = (24000 * 0.1) + (8333 * 0.25) + (taxable_income - 32333) * 0.3 - relief;
    } else if (taxable_income <= 800000) {
        payee = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + (taxable_income - 500000) * 0.325 - relief;
    } else {
        payee = (24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + (300000 * 0.325) + (taxable_income - 800000) * 0.35 - relief;
    }
    return payee;
}

let payee = calc_payee(taxable_income);
console.log("PAYEE:", payee);

function calc_net_salary(gross_salary, nhif_contribution, nhdf_contribution, nssf_contribution, payee) {
    return gross_salary - (nhif_contribution + nhdf_contribution + nssf_contribution + payee);
}

let net_salary = calc_net_salary(gross_salary, NHIF, NHDF, NSSF, payee);
console.log("Net Salary:", net_salary);
  