import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
export function AddEmployee() {
    let navigate = useNavigate();

    const [employe, setEmploye] = useState(
        {
            name: '',
            department: '',
            salary: 0
        }
    );

    const {name, department, salary} = employe;

    const onInputChange = (event: any) => {
        const {name, value} = event.target;
        setEmploye({...employe, [name]: value});
    }

    const onSubmit = async (event: any) => {
        event.preventDefault();
        const baseUrl = "http://localhost:8080/api/employees";
        await axios.post(baseUrl, employe);
        navigate('/');
    }

    return (
        <div className="container">
            <div className="container text-center" style={{margin: "30px"}}>
                <h3>Add employee</h3>
            </div>
            <div className="container">
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" required={true} value={name}
                               onChange={(e) => onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="department" className="form-label">Department</label>
                        <input type="text" className="form-control" id="department" name="department" required={true}
                               value={department}
                               onChange={(e) => onInputChange(e)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="salary" className="form-label">Salary</label>
                        <input type="number" className="form-control" id="salary" name="salary" required={true}
                               value={salary}
                               onChange={(e) => onInputChange(e)}/>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary me-3">Submit</button>
                        <button type="reset" className="btn btn-secondary me-3">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
}