namespace SpriteKind {
    export const Points = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.left.isPressed()) {
        arrow = sprites.createProjectileFromSprite(assets.image`arrow_left`, player_1, -100, 0)
        music.play(music.createSoundEffect(WaveShape.Square, 306, 843, 131, 120, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (controller.right.isPressed()) {
        arrow = sprites.createProjectileFromSprite(assets.image`arrow_right`, player_1, 100, 0)
        music.play(music.createSoundEffect(WaveShape.Square, 306, 843, 131, 120, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (controller.up.isPressed()) {
        arrow = sprites.createProjectileFromSprite(assets.image`arrow_up`, player_1, 0, -100)
        music.play(music.createSoundEffect(WaveShape.Square, 306, 843, 131, 120, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (controller.down.isPressed()) {
        arrow = sprites.createProjectileFromSprite(assets.image`arrow_down`, player_1, 0, 100)
        music.play(music.createSoundEffect(WaveShape.Square, 306, 843, 131, 120, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Points, function (sprite, otherSprite) {
    sprites.destroy(golden_nugget, effects.halo, 500)
    music.play(music.createSong(assets.song`golden_nugget_collected`), music.PlaybackMode.UntilDone)
})
let arrow: Sprite = null
let golden_nugget: Sprite = null
let player_1: Sprite = null
tiles.setCurrentTilemap(tilemap`trial1`)
player_1 = sprites.create(assets.image`player_sprite_1`, SpriteKind.Player)
golden_nugget = sprites.create(assets.image`golden_nugget`, SpriteKind.Points)
controller.moveSprite(player_1, 70, 70)
player_1.setBounceOnWall(true)
scene.cameraFollowSprite(player_1)
player_1.setPosition(120, 120)
game.onUpdateInterval(randint(1000, 3000), function () {
    golden_nugget.setPosition(randint(0, 240), randint(0, 240))
})
