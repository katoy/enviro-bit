basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    basic.pause(5000)
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
})
