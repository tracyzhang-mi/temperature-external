let reading = 0
let mV = 0
let roomTemp = 0
input.onButtonPressed(Button.A, function () {
    reading = pins.analogReadPin(AnalogPin.P0)
    mV = Math.idiv(reading * 3100, 1024)
    roomTemp = Math.idiv(mV - 500, 10)
    basic.showNumber(roomTemp)
})
