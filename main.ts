input.onButtonPressed(Button.A, function () {
    if (x != 0) {
        led.unplot(x, y)
        x += -1
        led.plot(x, y)
    }
})
input.onButtonPressed(Button.B, function () {
    if (x != 4) {
        led.unplot(x, y)
        x += 1
        led.plot(x, y)
    }
})
let y = 0
let x = 0
let bump: number[] = []
music.playMelody("D E - G A - B C5 ", 200)
x = 2
y = 3
bump = [randint(0, 5), 0]
led.plot(x, y)
loops.everyInterval(750, function () {
    if (bump[1] == 3 && bump[0] == x) {
        bump = [randint(0, 4), 0]
        led.plot(bump[0], bump[1])
    } else if (bump[1] == 3 && bump[0] != x) {
        music.playMelody("C5 B - A G - E D ", 170)
        basic.showString("Game Over")
        basic.clearScreen()
    } else {
        led.unplot(bump[0], bump[1])
        bump[1] += 1
led.plot(bump[0], bump[1])
    }
})
