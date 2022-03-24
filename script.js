"use strict";


const result = document.querySelector(`.result`);
const preview = document.querySelector(`.preview`);

const buttonDeleteAll = document.querySelector(`.delete-all`);
const buttonBackSpace = document.querySelector(`.backspace`);

const buttonEqual = document.querySelector(`.equal`);
const buttonDevide = document.querySelector(`.devide`);
const buttonPlus = document.querySelector(`.plus`);
const buttonMinus = document.querySelector(`.minus`);
const buttonTimes = document.querySelector(`.times`);
const buttonDot = document.querySelector(`.dot`);

const buttonZero = document.querySelector(`.zero`);
const buttonOne = document.querySelector(`.one`);
const buttonTwo = document.querySelector(`.two`);
const buttonThree = document.querySelector(`.three`);
const buttonFour = document.querySelector(`.four`);
const buttonFive = document.querySelector(`.five`);
const buttonSix = document.querySelector(`.six`);
const buttonSeven = document.querySelector(`.seven`);
const buttonEight = document.querySelector(`.eight`);
const buttonNine = document.querySelector(`.nine`);

class Calculator{
    constructor(result, preview){
        this.result = result;
        this.preview = preview;
        this.clear();
    }

    clear(){
        this.currentResult = ``;
        this.currentPreview = ``;
        this.operation = undefined;
    }

    delete(){
        this.currentResult = this.currentResult.toString().slice(0, -1);
    }

    updateAll(){
        this.result.textContent = this.currentResult;
        this.preview.textContent = this.currentPreview;
        
        if(this.operation != null){
            this.preview.textContent = `${this.currentPreview} ${this.operation}`;
        }
    }
    
    previewNumber(number){
        if(number === `.` && this.currentResult.includes(`.`)) return
        this.currentResult = this.currentResult.toString() + number.toString();
    }

    typeOfOperation(operation){
        if(this.currentResult === ``) return
        if(this.currentPreview !== ``){
            this.calculate();
        }
        this.operation = operation;
        this.currentPreview = this.currentResult;
        this.currentResult = ``;

    }

    calculate(){
        let computation;
        const previewNumber = parseFloat(this.currentPreview);
        const resultNumber = parseFloat(this.currentResult);

        if(isNaN(previewNumber) || isNaN(resultNumber)) return
        switch(this.operation){
            case `+`: computation = previewNumber + resultNumber; break;
            case `-`: computation = previewNumber - resultNumber; break;
            case `×`: computation = previewNumber * resultNumber; break;
            case `÷`: computation = previewNumber / resultNumber; break;

            default: return;
        }

        this.currentResult = computation;
        this.currentPreview = ``;
        this.operation = undefined;

    }
}


const calculator = new Calculator(result, preview)


buttonZero.addEventListener(`click`, () =>{
    calculator.previewNumber(0);
    calculator.updateAll();
});

buttonOne.addEventListener(`click`, () =>{
    calculator.previewNumber(1);
    calculator.updateAll();
});

buttonTwo.addEventListener(`click`, () =>{
    calculator.previewNumber(2);
    calculator.updateAll();
});

buttonThree.addEventListener(`click`, () =>{
    calculator.previewNumber(3);
    calculator.updateAll();
});

buttonFour.addEventListener(`click`, () =>{
    calculator.previewNumber(4);
    calculator.updateAll();
});

buttonFive.addEventListener(`click`, () =>{
    calculator.previewNumber(5);
    calculator.updateAll();
});

buttonSix.addEventListener(`click`, () =>{
    calculator.previewNumber(6);
    calculator.updateAll();
});

buttonSeven.addEventListener(`click`, () =>{
    calculator.previewNumber(7);
    calculator.updateAll();
});

buttonEight.addEventListener(`click`, () =>{
    calculator.previewNumber(8);
    calculator.updateAll();
});

buttonNine.addEventListener(`click`, () =>{
    calculator.previewNumber(9);
    calculator.updateAll();
});

buttonDot.addEventListener(`click`, () =>{
    calculator.previewNumber(`.`);
    calculator.updateAll();
});


buttonPlus.addEventListener(`click`, () =>{
    calculator.typeOfOperation(`+`);
    calculator.updateAll();
});

buttonMinus.addEventListener(`click`, () =>{
    calculator.typeOfOperation(`-`);
    calculator.updateAll();
});

buttonTimes.addEventListener(`click`, () =>{
    calculator.typeOfOperation(`×`);
    calculator.updateAll();
});

buttonDevide.addEventListener(`click`, () =>{
    calculator.typeOfOperation(`÷`);
    calculator.updateAll();
});


buttonEqual.addEventListener(`click`, () =>{
    calculator.calculate();
    calculator.updateAll();
})

buttonDeleteAll.addEventListener(`click`, () =>{
    calculator.clear();
    calculator.updateAll();
});

buttonBackSpace.addEventListener(`click`, () =>{
    calculator.delete();
    calculator.updateAll();
});