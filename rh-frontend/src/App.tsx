import EmployeesList from "./employee/domain/component/employees.list.component";
import {Navbar} from "./app/domain/component/navbar.component";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AddEmployee} from "./employee/domain/component/add.employee.component";
import {EditEmployee} from "./employee/domain/component/edit.employee.component";

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<EmployeesList/>}/>
                    <Route path="/add" element={<AddEmployee/>}/>
                    <Route path="/edit/:id" element={<EditEmployee/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
