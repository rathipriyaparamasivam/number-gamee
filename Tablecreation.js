import './App.css';
const data = [
    { name: "", age: 22, gender: "Female" },
    { name: "", age:23, gender: "Female" },
    { name: "", age: 23, gender: "Female" },
    {name:"",age: 23,gender:"Female"},
    {name:"",age:23,gender:"Female"}
]
function TableCreation() {
    return (
        <div className="App">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}
export default TableCreation;