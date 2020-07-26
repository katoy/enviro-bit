basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    basic.showIcon(IconNames.Yes)
    serial.writeValue("T", envirobit.getTemperatureDecimal())
    serial.writeValue("H", envirobit.getHumidityDecimal())
    serial.writeValue("P", envirobit.getPressureDecimal())
    serial.writeValue("L", envirobit.getLight())
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
})
basic.forever(function () {
    basic.pause(1000)
    led.toggle(0, 0)
})
