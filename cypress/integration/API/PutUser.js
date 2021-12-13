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
                    "email": "tes123456789@gmail.com",
                    "name": "Adrian123456789",
                    "gender": "male",
                    "status": "active"
                }
            }).then((res)=>{
                expect(res.status).to.eq(201)
                expect(res.body.data).has.property('email', "tes123456789@gmail.com")
                expect(res.body.data).has.property('name', "Adrian123456789")
                expect(res.body.data).has.property('gender', "male")
                expect(res.body.data).has.property('status', "active")
            }).then((res)=>{
                const userId = res.body.data.id
                cy.log("User id: " + userId)
                cy.request({
                    method: "PUT",
                    url: "https://gorest.co.in/public/v1/users/"+userId,
                    headers : {
                        'authorization' : "Bearer " + accessToken
                    },
                    body: {
                            "email": "tes12345678910@gmail.com",
                            "name": "Adrian12345678910",
                            "gender": "male",
                            "status": "active"
                        }
                }).then((res)=>{
                    expect(res.status).to.eq(200)
                    expect(res.body.data).has.property('email', "tes12345678910@gmail.com")
                    expect(res.body.data).has.property('name', "Adrian12345678910")
                    expect(res.body.data).has.property('gender', "male")
                    expect(res.body.data).has.property('status', "active")
                })
            })
    })
})