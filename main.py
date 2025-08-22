@namespace
class SpriteKind:
    Points = SpriteKind.create()

def on_a_pressed():
    global projectile
    if controller.left.is_pressed():
        projectile = sprites.create_projectile_from_sprite(assets.image("""
            arrow
            """), player_1, -100, 0)
    if controller.right.is_pressed():
        projectile = sprites.create_projectile_from_sprite(assets.image("""
            arrow
            """), player_1, 100, 0)
    if controller.up.is_pressed():
        projectile = sprites.create_projectile_from_sprite(assets.image("""
            arrow
            """), player_1, 0, -100)
    if controller.down.is_pressed():
        projectile = sprites.create_projectile_from_sprite(assets.image("""
            arrow
            """), player_1, 0, 100)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite, otherSprite):
    sprites.destroy(golden_nugget, effects.halo, 500)
    music.play(music.create_song(assets.song("""
            golden_nugget_collected
            """)),
        music.PlaybackMode.UNTIL_DONE)
sprites.on_overlap(SpriteKind.player, SpriteKind.Points, on_on_overlap)

projectile: Sprite = None
golden_nugget: Sprite = None
player_1: Sprite = None
tiles.set_current_tilemap(tilemap("""
    trial1
    """))
player_1 = sprites.create(assets.image("""
        player_sprite_1
        """),
    SpriteKind.player)
golden_nugget = sprites.create(assets.image("""
        golden_nugget
        """),
    SpriteKind.Points)
controller.move_sprite(player_1, 70, 70)
player_1.set_bounce_on_wall(True)
scene.camera_follow_sprite(player_1)
player_1.set_position(120, 120)

def on_update_interval():
    golden_nugget.set_position(randint(0, 240), randint(0, 240))
game.on_update_interval(randint(1000, 3000), on_update_interval)
