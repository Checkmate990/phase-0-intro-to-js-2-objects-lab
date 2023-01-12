const employee = {
    name: 'John',
    streetAddress: 9227,
}

function updateEmployeeWithKeyAndValue(){
    const employeeb= {...employee};
    employeeb.name = 'Sam',
    employeeb.streetAddress = '11 Broadway'
    return employeeb;
}

function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.name = 'Sam',
    employee.streetAddress = '12 Broadway'
    return employee;
}

function deleteFromEmployeeByKey(){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    const newEmployee = {...employee};
    return employee
    return newEmployee
}

