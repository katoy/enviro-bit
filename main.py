basic.show_leds("""
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    """)

def on_forever():
    basic.pause(5000)
basic.forever(on_forever)
