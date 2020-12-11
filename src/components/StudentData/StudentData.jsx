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
              <tr style={{border:"1px solid black"}} key={id}>
                 <td style={{border:"1px solid black"}} >{id}</td>
                 <td style={{border:"1px solid black"}}>{firstName}</td>
                 <td style={{border:"1px solid black"}}>{lastName}</td>
                 <td style={{border:"1px solid black"}}>{emailId}</td>
                 <td style={{border:"1px solid black"}}>{mobileNumber}</td>
              </tr>
           )
        })
     }

    render(){
        return(
            <div style={{ marginLeft:"30%",fontSize:"30px",border:"1px solid black",marginRight:"22.7%"}}>
                <h2 id='title' style={{ marginLeft:"35%"}}>Student Data Table</h2>
                <table id='students'style={{border:"1px solid black"}} >
                    <thead style={{border:"1px solid black"}}>
                        <tr style={{border:"1px solid black"}}>{this.state.columnDefs.map(col => <th key={col.headerName}>{col.headerName}</th>)}</tr>
                    </thead>
                    <tbody style={{border:"1px solid black"}}>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentData;