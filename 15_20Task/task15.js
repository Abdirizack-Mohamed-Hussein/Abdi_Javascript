function calc_gross(basic_salary, benefits) {
    return basic_salary + benefits;
}

function calc_nhif(gross_salary) {
    let nhif_contribution=0
    if (gross_salary >= 0 && gross_salary <= 5999) {
        nhif_contribution =150;
    } else if (gross_salary >= 6000 && gross_salary <= 7999) {
        nhif_contribution=300;
    } else if (gross_salary >= 8000 && gross_salary <= 11999) {
        nhif_contribution =400;
    } else if (gross_salary >= 12000 && gross_salary <= 14999) {
        nhif_contribution =500;
    } else if (gross_salary >= 15000 && gross_salary <= 19999) {
        nhif_contribution =600;
    } else if (gross_salary >= 20000 && gross_salary <= 24999) {
        nhif_contribution =750;
    } else if (gross_salary >= 25000 && gross_salary <= 29999) {
        nhif_contribution =850;
    } else if (gross_salary >= 30000 && gross_salary <= 34999) {
        nhif_contribution= 900;
    } else if (gross_salary >= 35000 && gross_salary <= 39999) {
        nhif_contribution= 950;
    } else if (gross_salary >= 40000 && gross_salary <= 44999) {
        nhif_contribution= 1000;
    } else if (gross_salary >= 45000 && gross_salary <= 49999) {
        nhif_contribution= 1100;
    } else if (gross_salary >= 50000 && gross_salary <= 59999) {
        nhif_contribution= 1200;
    } else if (gross_salary >= 60000 && gross_salary <= 69999) {
        nhif_contribution= 1300;
    } else if (gross_salary >= 70000 && gross_salary <= 79999) {
        nhif_contribution= 1400;
    } else if (gross_salary >= 80000 && gross_salary <= 89999) {
        nhif_contribution= 1500;
    } else if (gross_salary >= 90000 && gross_salary <= 99999) {
        nhif_contribution= 1600;
    } else {
        nhif_contribution= 1700; // For gross salary 100,000 and above
    }
    return nhif_contribution
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