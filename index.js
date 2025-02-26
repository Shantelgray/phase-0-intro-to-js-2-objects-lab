const employee = {
 name: "Shantel",
 streetAddress: "4186 Shoreside Circle",
}; 
function updateEmployeeWithKeyAndValue() {
    return { name: `Sam`, streetAddress: `11 Broadway` }
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};
function deleteFromEmployeeByKey() {
    let newEmployee = {...employee };
    delete newEmployee.name;
    return newEmployee;
};
function destructivelyDeleteFromEmployeeByKey() {
    let newEmployee = employee;
    delete newEmployee.name;
    return newEmployee;
};