let employees = [
    {"firstName": "Sam", "department": "Tech", "designation": "Manager", "salary": 40000, "raiseEligible": "true"},
    {"firstName": "Mary", "department": "Finance", "designation": "Trainee", "salary": 18500, "raiseEligible": "true"},
    {"firstName": "Bill", "department": "HR", "designation": "Executive", "salary": 21000, "raiseEligible": "false"}
]

let companyInfo = { "company":
{"companuName": "Tech Stars", "website": "www.techstars.site","employees":employees}
}

console.log("Problem 1: ")
console.log(employees)
console.log("Problem 2: ")
console.log(companyInfo.company)

employees.push({"firstName" : "Anna", "department": "Tech", "designation": "Executive", "salary": 25600, "raiseEligible": "false" })
console.log("Problem 3: ")
console.log(employees)

function total(){
    let totalsalary = 0;
    for (employee of employees) {
        totalsalary +=employee.salary;
    }
    return totalsalary;
}
console.log("Problem 4: ")
console.log(total ());

for(let i = 0; i < 4; i++){
    if (employee[i].raiseEligible === "true"){
        employee[i].salary = employee[i].salary * 1.1;
    }
}
console.log("Problem 5: ")
console.log(employees)

for(let i = 0; i < 4; i++){
    if (employees[i].firstName === "Anna" || employees[i].firstName ==="Sam") {
        employees[i].wfh = true
    } else {
        employee[i].wfh = false
    }
    
}