import React, {useEffect, useState} from 'react';
import axios from "axios";
import {NumericFormat} from "react-number-format";
import Employee from "../entity/employee.entity";
import {Link} from "react-router-dom";

function EmployeesList() {

    const baseUrl = "http://localhost:8080/api/employees";

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = async () => {
        const result = await axios.get(baseUrl);
        const employees = result.data;
        setEmployees(employees);
    };

    const removeEmployee = async (id: number) => {
        await axios.delete(`${baseUrl}/${id}`);
        loadEmployees();
    }

    return (
        <div className="container">
            <div className="container text-center" style={{margin: "30px"}}>
                <h3>Sistema de Recursos Humanos</h3>
            </div>

            {employees.length === 0 && <div className="alert alert-danger text-center">No employees</div>}

            {employees.length > 0 &&

            <table className="table table-striped table-hover align-middledd">
                <thead className="table-dark">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Employee</th>
                    <th scope="col">Department</th>
                    <th scope="col">Salary</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    employees.map((employee: Employee, index) => (
                        <tr key={index}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.department}</td>
                            <td>
                                <NumericFormat thousandSeparator={','} prefix={'$'} value={employee.salary}
                                               displayType={"text"}
                                               decimalScale={2} fixedDecimalScale readOnly={true}/>

                            </td>
                            <td className="text-center">
                                <Link to={`/edit/${employee.id}`} className="btn btn-primary me-2">Edit</Link>
                                <button className="btn btn-danger me-2"
                                        onClick={() => removeEmployee(employee.id)}>Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            }
        </div>
    )
        ;
}

export default EmployeesList;