class Garage {

get addCarButton() {
    return  cy.contains('button', 'Add car');
}

get addCarButtonConfirm() {
    return  cy.get('app-add-car-modal .btn-primary');
}


get addCarBrand() {
    return  cy.get('#addCarBrand');
}
get addCarModel() {
    return  cy.get('#addCarModel');
}

addCarButtonClick() {
    this.addCarButton.click(); 
}

selectCarBrand(carBrand){
    this.addCarBrand.select(carBrand);
}

selectCarModel(carModel){
    this.addCarModel.select(carModel);
}

get addCarMileage() {
    return  cy.get('#addCarMileage');
}
selectAddCarMileage(index){
    this.addCarMileage.type(index);
}

addCarButtonConfirmClick() {
    //this.addCarButtonConfirm.focus();
    this.addCarButtonConfirm.click(); 
}


}

export default new Garage();