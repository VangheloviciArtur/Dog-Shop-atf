import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import CustomAssertions from '../../utils/CustomAssertions'
import AppPage from '../AppPage'
import { noData, homePageLogo, tableRows } from '../AppPage'

var formData

Given(`User is on Home page`, () => {
    AppPage.visit()
    CustomAssertions.assertElementContainsText(homePageLogo, "Dog Shop")
})

And(`Table of Dogs is empty`, () => {
    AppPage.clearTable()
    CustomAssertions.assertElementContainsText(noData, "No data")
})

And(/^(Add|Edit) dog form is present with folowing fields:$/, (opt, formList) => {
    AppPage.verifyForm(formList);
})

When(/^User fills (Add|Edit) (and Cancel )?form with( the same)? parameters(:)?$/, (form, opt1, opt2, opt3, datatable) => {
    if (opt2 != null) {
        AppPage.completeForm(formData);
    } else {
        AppPage.completeForm(datatable)
        formData = opt1 != null ? formData : datatable;
    }
})

And(/^(.*) button is pressed$/, (button) => {
    AppPage.clickOnButton(button)
})

Then(/^Dog is saved with expected details and table size is (.*)$/, (tableSize) => {
    CustomAssertions.assertListSize(tableRows, tableSize)
    AppPage.collectTableResults(formData, tableSize);
})