
class StuentDataLayer {
    
    // To Add Student data in Database
    async signUpData(firstName, lastName, emailId, mobileNumber) {
        await fetch("http://localhost:8082/registerstudent",{
            method: 'POST',
            headers: {
                "content-type": "Application/json"
            },
            body: JSON.stringify({
                "firstName": firstName,
                "lastName": lastName,
                "emailId": emailId,
                "mobileNumber":mobileNumber

            })
        })
            .then(res => res.text())
            .then(res => console.log(res))
            console.log("Registered Successfully!")
    }

    // To Get All Student Information
    async fetchAllBook() {
        await fetch(`http://localhost:8082/getallstudendata`)
            .then(res => {
                console.log(res)
            })         
            
    }


}
export default StuentDataLayer;