import React, {useState} from 'react'
import Header from "../components/header";
import Navbar from "../components/navbar";
import '../styles/employeeNomePage.css';

const tasksDTO = [
    { policy: "CUST10293847", index: "ZW37482910", date: "15/12/2024" },
    { policy: "CUST28374659", index: "ZW37482910", date: "15/12/2024" },
    { policy: "CUST56789012", index: "ZW12345678", date: "01/01/2025" },
    { policy: "CUST98765432", index: "ZW87654321", date: "05/11/2024" },
    { policy: "CUST11121314", index: "ZW11223344", date: "20/10/2024" },
    { policy: "CUST31415926", index: "ZW55667788", date: "12/09/2024" },
    { policy: "CUST27182818", index: "ZW33445566", date: "30/08/2024" },
    { policy: "CUST16180339", index: "ZW77889900", date: "25/07/2024" },
];

const EmployeeHomePage = () => {
    const [selected, setSelected] = useState(null);

    const handleRowClick = (tasksDTO) => {
        setSelected(tasksDTO.policy === selected?.policy ? null : tasksDTO);
        console.log("selected: ", selected);
    };

    return (
        <div className="pageClass-home-employee">
            <div className="header-container">
                <p className="homepage-header-p">My Dashboard</p>
                <div className="homepage-header-empty-space"></div>
            </div>
            <div className="main-container">
                <Navbar className="nav"/>
                <div className="content-container-employee">
                    <div className="personal-info-container">
                        <table className="employee-task-table">
                            <thead>
                            <tr>
                                <th>Customer No.</th>
                                <th>Task description</th>
                                <th>Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {tasksDTO.map((task, index) => (
                                <tr
                                    key={index}
                                    onClick={() => handleRowClick(task)}
                                    className={task.policy === selected?.policy ? "selected-row" : ""}

                                >
                                    <td>{task.policy}</td>
                                    <td>{task.index}</td>
                                    <td>{task.date}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeHomePage;