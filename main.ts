namespace SpriteKind {
    export const Points = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.left.isPressed()) {
        arrow = sprites.createProjectileFromSprite(assets.image`arrow_left`, player_0, -100, 0)
        music.play(music.createSoundEffect(WaveShape.Square, 306, 843, 169, 177, 400, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (controller.right.isPressed()) {
        arrow = sprites.createProjectileFromSprite(assets.image`arrow_right`, player_0, 100, 0)
        music.play(music.createSoundEffect(WaveShape.Square, 306, 843, 169, 177, 400, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (controller.up.isPressed()) {
        arrow = sprites.createProjectileFromSprite(assets.image`arrow_up`, player_0, 0, -100)
        music.play(music.createSoundEffect(WaveShape.Square, 306, 843, 169, 177, 400, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (controller.down.isPressed()) {
        arrow = sprites.createProjectileFromSprite(assets.image`arrow_down`, player_0, 0, 100)
        music.play(music.createSoundEffect(WaveShape.Square, 306, 843, 169, 177, 400, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
info.onScore(3, function () {
    tiles.setCurrentTilemap(tilemap`trial_2`)
})
info.onLifeZero(function () {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.slash)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (wolf_0) {
        sprites.destroy(wolf_0, effects.disintegrate, 1000)
        info.changeScoreBy(1)
    }
})
let wolf_0: Sprite = null
let arrow: Sprite = null
let player_0: Sprite = null
tiles.setCurrentTilemap(tilemap`trial_1`)
player_0 = sprites.create(assets.image`player_sprite_1`, SpriteKind.Player)
controller.moveSprite(player_0, 80, 80)
player_0.setBounceOnWall(true)
player_0.setPosition(96, 96)
scene.cameraFollowSprite(player_0)
info.setScore(0)
info.setLife(1)
game.onUpdateInterval(randint(7500, 10000), function () {
    wolf_0 = sprites.create(assets.image`wolf`, SpriteKind.Enemy)
    wolf_0.setPosition(randint(0, scene.screenWidth()), 0)
    wolf_0.follow(player_0, 40)
})
