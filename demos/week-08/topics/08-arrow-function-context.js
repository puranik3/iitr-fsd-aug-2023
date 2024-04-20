const payroll = {
    employees: [
        { name: 'John', dept: 'Finance', salary: 100000 },
        { name: 'Jane', dept: 'IT', salary: 120000 },
        { name: 'Mark', dept: 'Marketing', salary: 150000 },
    ],
    hikes: [
        { dept: 'Finance', hike: 20 },
        { dept: 'IT', hike: 10 },
        { dept: 'Marketing', hike: 15 },
    ],
    // setNewSalary: function() {
    setNewSalary() {
        console.log('setSalary this = ', this); // payroll

        // the array iterator function (f) is an inner function
        this.employees.forEach(
            // function (employee) { // f -> has its own "this"
            employee => { // arrow functions do not have their own "this" -> they carry over the value from the enclosing scope
                console.log('array iterator function this = ', this);

                // since we used arrow function, "this" will be payroll object
                const hikeObj = this.hikes.find(hike => hike.dept === employee.dept)

                employee.salary = employee.salary * (1 + hikeObj.hike / 100);
            }
        );
    }
};

payroll.setNewSalary();
console.log(payroll.employees);