import GenericActions from "../utils/GenericActions"

const url = "http://localhost:3000"
const breedField = 'input[name=breed]'
const nickField = 'input[name=nick]'
const priceField = 'input[name=price]'
const imageField = 'input[name=url]'
const addButton = 'form > button'
const editButtons = 'button:nth-child(1)'
const updateButton = 'button:nth-child(9)'
const cancelButton = 'button:nth-child(10)'
const deleteButtons = 'button:nth-child(2)'
const table = 'tbody tr'
const form = 'form >label,form >button'

var genericActions = new GenericActions();

class AppPage {
    static visit() {
        genericActions.visit(url)
    }

    static completeForm(datatable) {
        datatable.hashes().forEach(element => {
            let fieldValue = element.value
            switch (element.field) {
                case "Breed":
                    genericActions.typeIntoField(breedField, fieldValue)
                    break;
                case "Nick":
                    genericActions.typeIntoField(nickField, fieldValue)
                    break;
                case "Price":
                    genericActions.typeIntoField(priceField, fieldValue)
                    break;
                case "Image":
                    genericActions.typeIntoField(imageField, fieldValue)
                    break;
                default:
                    throw Error("There is no such field: " + element.field)
            }
        })
    }

    static clickOnButton(field) {
        switch (field) {
            case "Add":
                genericActions.clickOn(addButton)
                break;
            case "Edit":
                genericActions.clickOn(editButtons)
                break;
            case "Delete":
                this.clearTable()
                break;
            case "Update":
                genericActions.clickOn(updateButton)
                break;
            case "Cancel":
                genericActions.clickOn(cancelButton)
                break;
            default:
                throw new Error("There is no such button: " + field)
        }
    }

    static clearTable() {
        return genericActions.clickOnEach(deleteButtons);
    }

    static verifyForm(formData) {
        genericActions.getFormLabels(form, formData)
    }

    static collectTableResults(data, size) {
        return genericActions.getTableResults(data, table, size)
    }
}

export default AppPage
export const noData = 'table > tbody > tr > td'
export const homePageLogo = '#root > div > h1'
export const tableRows = 'table > tbody > tr:nth-child(n)'