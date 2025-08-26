namespace SpriteKind {
    export const Points = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.left.isPressed()) {
        arrow = sprites.createProjectileFromSprite(assets.image`arrow_left`, player_1, -100, 0)
        music.play(music.createSoundEffect(WaveShape.Square, 306, 843, 169, 177, 400, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (controller.right.isPressed()) {
        arrow = sprites.createProjectileFromSprite(assets.image`arrow_right`, player_1, 100, 0)
        music.play(music.createSoundEffect(WaveShape.Square, 306, 843, 169, 177, 400, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (controller.up.isPressed()) {
        arrow = sprites.createProjectileFromSprite(assets.image`arrow_up`, player_1, 0, -100)
        music.play(music.createSoundEffect(WaveShape.Square, 306, 843, 169, 177, 400, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
    if (controller.down.isPressed()) {
        arrow = sprites.createProjectileFromSprite(assets.image`arrow_down`, player_1, 0, 100)
        music.play(music.createSoundEffect(WaveShape.Square, 306, 843, 169, 177, 400, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Points, function (sprite, otherSprite) {
    if (golden_nugget) {
        sprites.destroy(golden_nugget, effects.halo, 500)
        music.play(music.createSong(assets.song`golden_nugget_collected`), music.PlaybackMode.InBackground)
        info.changeScoreBy(1)
        if (true) {
            golden_nugget = sprites.create(assets.image`golden_nugget`, SpriteKind.Points)
        }
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
info.onScore(3, function () {
    if (true) {
        wolf_0 = sprites.create(assets.image`wolf`, SpriteKind.Enemy)
        wolf_0.follow(player_1, 35)
        wolf_0.setPosition(160, 0)
    }
    if (true) {
        wolf_1 = sprites.create(assets.image`wolf`, SpriteKind.Enemy)
        wolf_1.follow(player_1, 35)
        wolf_1.setPosition(0, 160)
    }
    if (true) {
        wolf_2 = sprites.create(assets.image`wolf`, SpriteKind.Enemy)
        wolf_2.follow(player_1, 35)
        wolf_2.setPosition(320, 160)
    }
    tiles.setCurrentTilemap(tilemap`trial_2`)
})
info.onLifeZero(function () {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (wolf_0) {
        sprites.destroy(wolf_0, effects.disintegrate, 1000)
    }
    if (wolf_1) {
        sprites.destroy(wolf_1, effects.disintegrate, 1000)
    }
    if (wolf_2) {
        sprites.destroy(wolf_2, effects.disintegrate, 1000)
    }
})
let wolf_2: Sprite = null
let wolf_1: Sprite = null
let arrow: Sprite = null
let wolf_0: Sprite = null
let golden_nugget: Sprite = null
let player_1: Sprite = null
tiles.setCurrentTilemap(tilemap`trial_1`)
player_1 = sprites.create(assets.image`player_sprite_1`, SpriteKind.Player)
golden_nugget = sprites.create(assets.image`golden_nugget`, SpriteKind.Points)
wolf_0 = sprites.create(assets.image`wolf`, SpriteKind.Enemy)
controller.moveSprite(player_1, 80, 80)
player_1.setBounceOnWall(true)
player_1.setPosition(96, 96)
scene.cameraFollowSprite(player_1)
wolf_0.follow(player_1, 30)
wolf_0.setPosition(96, 0)
info.setScore(0)
info.setLife(1)
// image=12 pixel
game.onUpdateInterval(randint(3000, 5000), function () {
    if (info.score() <= 3) {
        golden_nugget.setPosition(randint(0, 192), randint(0, 192))
    }
    if (info.score() >= 3 && info.score() <= 10) {
        golden_nugget.setPosition(randint(0, 320), randint(0, 320))
    }
})
