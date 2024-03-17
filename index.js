const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  console.log('Original employee:', employee);
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Oak St');
console.log('Updated employee (non-destructive):', updatedEmployee);

console.log('Original employee after non-destructive update:', employee);

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe');
console.log('Updated employee (destructive):', employee);

const deletedEmployee = deleteFromEmployeeByKey(employee, 'name');
console.log('Employee after non-destructive delete:', deletedEmployee);

console.log('Original employee after non-destructive delete:', employee);

destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
console.log('Employee after destructive delete:', employee);
