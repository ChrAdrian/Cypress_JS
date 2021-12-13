/// <reference types="cypress" />

describe("POST API and GET users", ()=>{

    let accessToken = '5d049412c7ea78180c042d17c062f281fa6d7a160fd779e98dd71fca39521209'
    
    it("Create User", ()=>{
        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v1/users/',
            headers : {
                'authorization' : "Bearer " + accessToken
            },
            body: {
                    "email": "tes1234@gmail.com",
                    "name": "Adrian1234",
                    "gender": "male",
                    "status": "active"
                }
            }).then((res)=>{
                expect(res.status).to.eq(201)
                expect(res.body.data).has.property('email', "tes1234@gmail.com")
                expect(res.body.data).has.property('name', "Adrian1234")
                expect(res.body.data).has.property('gender', "male")
                expect(res.body.data).has.property('status', "active")
            }).then((res)=>{
                const userID = res.body.data.id
                cy.log("User ID is: " + userID)

                cy.request({
                    method : 'GET',
                    url : 'https://gorest.co.in/public/v1/users/' + userID,
                    headers : {
                        'authorization' : "Bearer " + accessToken
                    }
                    }).then((res)=>{
                        expect(res.status).to.eq(200)
                        expect(res.body.data).has.property('id', userID)
                        expect(res.body.data).has.property('name', "Adrian1234")
                    })
            })
    })
})