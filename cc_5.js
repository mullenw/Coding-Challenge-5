const employees = [
    { name: "James Cook", hourlyRate: 20, hoursWorked: 35 },
    { name: "Ceedee Lamb", hourlyRate: 25, hoursWorked: 45 },
    { name: "Amon-ra St. Brown", hourlyRate: 30, hoursWorked: 50 },
];

function calculateBasePay( rate, hours ) {
    return rate * Math.min(hours, 40);
}

// Math.max(hours - 40, 0)