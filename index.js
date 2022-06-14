let salary = 500;
let employeeCont = salary * (5 / 100);
let taxedSalary = salary - employeeCont;

let taxUnder80 = (80 - 0) * (0/ 100);
let taxUnder250 = (250-80) * (4 / 100);
let taxUnder450 = (450-250) * (8 / 100);
let taxOver450 = (taxedSalary - 450) * (10 / 100);




let totalTax = taxUnder80 + taxUnder250 + taxUnder450 + taxOver450;
console.log(totalTax);
let takeHomePay = taxedSalary - totalTax;
console.log("And the take home pay is: " + takeHomePay);