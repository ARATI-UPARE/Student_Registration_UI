import React, { Component } from 'react'

class StudentData extends Component{

    constructor(props){
        super(props);
        this.state = {
                students:[],
                columnDefs: [
                    {headerName: "Id", field: "id"},
                    {headerName: "FirstName", field: "firstname"},
                    {headerName: "LastName", field: "lastname"},
                    {headerName: "EmailId", field: "emailid"},
                    {headerName: "MobileNumber", field: "mobilenumber"}    
                ],
        }
    }

    async componentDidMount(){
        await fetch(`http://localhost:8082/getallstudendata`)
        .then(response => response.json())
        .then(json => {
            this.setState({
                students: json
            })
            console.log(this.state.students)
        })
    }
  
    renderTableData() {
        return this.state.students.map((student, index) => {
           const { id, firstName, lastName, emailId, mobileNumber } = student //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{firstName}</td>
                 <td>{lastName}</td>
                 <td>{emailId}</td>
                 <td>{mobileNumber}</td>
              </tr>
           )
        })
     }

    render(){
        return(
            <div>
                <h2 className="text-center">Student Data Table</h2>
                <table className="table table-stripped">
                    <thead >
                        <tr>{this.state.columnDefs.map(col => <th key={col.headerName}>{col.headerName}</th>)}</tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentData;