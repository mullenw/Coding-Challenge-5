const employees = [
    { name: "James Cook", hourlyRate: 20, hoursWorked: 35 },
    { name: "Ceedee Lamb", hourlyRate: 25, hoursWorked: 45 },
    { name: "Amon-ra St. Brown", hourlyRate: 30, hoursWorked: 50 },
];

function calculateBasePay( rate, hours ) {
    return rate * Math.min(hours, 40);
}
function calculateOvertimePay(rate, hours) {
    const overtimeHours = Math.max(hours - 40,0);
    return overtimeHours * rate * 1.5;
}
function calculateTaxes(grossPay) {
    return grossPay * 0.15;
}
function processPayroll(employee) {
    const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    const grossPay = basePay + overtimePay;
    const taxes = calculateTaxes(grossPay);
    const netPay = grossPay - taxes;

    return {
        name: employee.name,
        basePay: basePay.toFixed(2),
        overtimePay: overtimePay.toFixed(2),
        grossPay: grossPay.toFixed(2),
        netPay: netPay.toFixed(2)
    };
}
for (let emp of employees) {
    console.log(processPayroll(emp));
}