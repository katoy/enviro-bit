// enviro:bit というボードをつないで, 温度、湿度、気圧、明るさを軽装して、シリアルポートに出力します。
// 
// makecode エディタ中の "コンソールを表示 デバイス" をクリックすると、シリアルポートへの出力をグラフ表示でみることがえきます。
// 
// USB ケーブルをつないでいる Mac や Raspberry PI 側では、つぎのようなコードで知り合うポートを読み取ることができます。
// ----------------------
// import serial   # pip3 install pyserial
// 
// # ls -l /dev/tty.*
// ser = serial.Serial('/dev/tty.usbmodem14202', 115200)
// microbitdata = ''
// while True:
//     line = str(ser.readline(), 'utf-8')
//     print(line, end="")
// ser.close()
// -------------
// (raspberry i の場合は '/dev/ttyACM0' とする
// 
// 参考情報
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
