/// <reference types="cypress" />

describe("Linked GET calls", ()=>{
    it('Get weather informations for cities', ()=>{

        cy.request({
            method: 'GET',
            url: 'https://www.metaweather.com/api/location/search/?query=Buc'
        
        }).then((res)=>{
           const city = res.body[0].title
           return city
        
        }).then((city)=>{
            
            cy.request({
                method: 'GET',
                url: 'https://www.metaweather.com/api/location/search/?query='+city
            
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body[0]).to.have.property('title', city)
            })
        })
    })

    it.only('Get weather informations for cities', ()=>{

        cy.request({
            method: 'GET',
            url: 'https://www.metaweather.com/api/location/search/?query=Am'

        }).then((resp)=>{
            const len = resp.body.lenght
            for(let i=0; i<13; i++){
                cy.request({
                    method: 'GET',
                    url: 'https://www.metaweather.com/api/location/search/?query='+resp.body[i].title

                }).then((res)=>{
                    expect(res.status).to.eq(200)
                    expect(res.body[0]).to.have.property('title', resp.body[i].title)
            })
        }
        })
    })
})