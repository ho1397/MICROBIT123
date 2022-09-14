let 만보기 = 0
input.onButtonPressed(Button.A, function () {
    만보기 = 0
    basic.showString("RESET")
    music.playTone(262, music.beat(BeatFraction.Double))
})
input.onGesture(Gesture.Shake, function () {
    만보기 += 1
    basic.showNumber(만보기)
    if (만보기 == 10) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            . . . . .
            `)
    }
    if (만보기 == 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            . # . . .
            `)
    }
    if (만보기 == 30) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            . # # . .
            `)
    }
    if (만보기 == 40) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            . # # # .
            `)
    }
    if (만보기 == 50) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (만보기 == 60) {
        basic.showLeds(`
            . # . . .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (만보기 == 70) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (만보기 == 80) {
        basic.showLeds(`
            . # . # .
            . # . . .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (만보기 == 90) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (만보기 == 100) {
        music.playTone(262, music.beat(BeatFraction.Breve))
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(만보기 * 0.7)
    basic.showString("M")
})
