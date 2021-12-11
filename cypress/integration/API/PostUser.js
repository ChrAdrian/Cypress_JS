/// <reference types="cypress" />

describe("Post API users", ()=>{

    let accessToken = '5d049412c7ea78180c042d17c062f281fa6d7a160fd779e98dd71fca39521209'
    
    it("Create User", ()=>{
        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v1/users/',
            headers : {
                'authorization' : "Bearer " + accessToken
            },
            body: {
                    "email": "tes123@gmail.com",
                    "name": "Adrian123",
                    "gender": "male",
                    "status": "active"
                }
            }).then((res)=>{
                expect(res.status).to.eq(201)
                expect(res.body.data).has.property('email', "tes123@gmail.com")
                expect(res.body.data).has.property('name', "Adrian123")
                expect(res.body.data).has.property('gender', "male")
                expect(res.body.data).has.property('status', "active")
            })
    })
})