basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    led.toggle(2, 2)
    serial.writeValue("T", envirobit.getTemperatureDecimal())
    serial.writeValue("H", envirobit.getHumidityDecimal())
    serial.writeValue("P", envirobit.getPressureDecimal())
    serial.writeValue("L", envirobit.getLight())
    basic.pause(1000)
    led.toggle(2, 2)
    basic.pause(4000)
})
basic.forever(function () {
    led.plot(0, 0)
    basic.pause(100)
    led.unplot(0, 0)
    basic.pause(900)
})
