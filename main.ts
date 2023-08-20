input.onButtonPressed(Button.A, function () {
    もくひょう += -5
    if (もくひょう <= 5) {
        もくひょう = 5
    }
    basic.showNumber(もくひょう)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.pause(500)
    if (たてになった == 0) {
        music.play(music.tonePlayable(698, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
    }
    たてになった = 1
})
input.onGesture(Gesture.ScreenDown, function () {
    if (たてになった == 1) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.UntilDone)
        ポイント += 1
        たてになった = 0
    }
    basic.pause(500)
    if (ポイント == もくひょう) {
        ポイント = 0
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
    }
})
input.onButtonPressed(Button.B, function () {
    もくひょう += 5
    if (もくひょう >= 15) {
        もくひょう = 20
    }
    basic.showNumber(もくひょう)
})
let もくひょう = 0
let たてになった = 0
let ポイント = 0
ポイント = 0
たてになった = 0
もくひょう = 5
basic.showNumber(もくひょう)
