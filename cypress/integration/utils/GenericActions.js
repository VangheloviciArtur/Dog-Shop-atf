/// <reference types="cypress" />

const headers = ['Breed', 'Nick', 'Price']
const columnsSize = headers.length;

function checkIfPresent(element) {
    cy.get(element).should('be.visible')
}

function getArrayFromDataTable(datatable) {
    var arrayToMatch = [];
    datatable.hashes().forEach(element => {
        if (headers.includes(element.field)) {
            let fieldValue = element.value
            arrayToMatch.push(fieldValue)
        }
    })
    return arrayToMatch;
}

class GenericActions {

    typeIntoField(field, text) {
        checkIfPresent(field)
        cy.get(field).clear().type(text).should('have.value', text)
    }

    clickOn(element) {
        checkIfPresent(element)
        cy.get(element).click()
    }

    clickOnEach(list) {
        checkIfPresent(list)
        cy.get(list).each((element) => {
            cy.get(element).click()
        })
    }

    visit(url) {
        cy.visit(url)
    }

    getFormLabels(element, formList) {
        cy.get(element).then(el => {
            var arr = Array.from(formList.raw());
            cy.get(el).each(x => {
                let elIndex = el.index(x)
                let label = x.text();
                expect(arr[elIndex]).to.contain(label)
            })
        })
    }

    getTableResults(datatable, tableElement, size) {
        var arrayToMatch = []
        for (var i = 0; i < size; i++) { arrayToMatch.push(getArrayFromDataTable(datatable)); }

        cy.get(tableElement).each((row, rowIndex) => {
            cy.wrap(row).find('td').each((cell, cellIndex) => {
                if (cellIndex < columnsSize) {
                    let expected = arrayToMatch[rowIndex][cellIndex];
                    cy.wrap(cell).as('Table cell').should('contain', expected);
                }
            });
        });
    }
}

export default GenericActions