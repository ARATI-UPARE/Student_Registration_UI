
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

}
export default StuentDataLayer;