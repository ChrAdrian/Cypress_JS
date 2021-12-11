/// <reference types="cypress" />

describe("Get API users", ()=>{

    let accessToken = '5d049412c7ea78180c042d17c062f281fa6d7a160fd779e98dd71fca39521209'
    
    it("Get Users", ()=>{
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v1/users/',
            headers : {
                'authorization' : "Bearer " + accessToken
            }

        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(20)
        })
    })

    it("Get User by ID", ()=>{
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v1/users/41',
            headers : {
                'authorization' : "Bearer " + accessToken
            }

        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq("Gitanjali Nambeesan")
        })
    })
})