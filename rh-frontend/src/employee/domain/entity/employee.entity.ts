class Employee {

    id: number;
    name: string;
    department: string;
    salary: number;

    constructor(id: number, name: string, department: string, salary: number) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
}

export default Employee;