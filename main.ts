namespace SpriteKind {
    export const plant = SpriteKind.create()
    export const zombie = SpriteKind.create()
    export const check = SpriteKind.create()
    export const template = SpriteKind.create()
    export const remover = SpriteKind.create()
    export const mower = SpriteKind.create()
}
function spawn_zombie () {
    if (Math.percentChance(Math.min(5, Math.floor(player_score / 100)))) {
        spawn_sheild_zombie()
    } else if (Math.percentChance(Math.min(20, Math.floor(player_score / 25)))) {
        spawn_speed_zombie()
    } else {
        spawn_basic_zombie()
    }
}
function make_walnut () {
    if (tiles.tileAtLocationEquals(cursor.tilemapLocation(), sprites.castle.tilePath5) && info.score() >= 50 && !(overlapping_plant)) {
        info.changeScoreBy(-50)
        walnut = sprites.create(assets.image`walnut`, SpriteKind.plant)
        sprites.setDataNumber(walnut, "health", 1000)
        sprites.setDataString(walnut, "type", "walnut")
        tiles.placeOnTile(walnut, cursor.tilemapLocation())
    } else {
        console.log("cannot plant")
        overlapping_plant = false
    }
}
function spawn_sheild_zombie () {
    basic_zombie = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e 7 7 f 1 4 d 4 e e f . 
        . f d d f 7 7 7 7 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e 7 7 4 2 2 2 f . . . . 
        . . f b e 7 7 e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `, SpriteKind.zombie)
    animation.runImageAnimation(
    basic_zombie,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e 7 7 f 1 4 d 4 e e f . 
        . f d d f 7 7 7 7 4 e e e f . . 
        . f b b f e e e 4 e e f . . . . 
        . f b b e 7 7 4 2 2 2 f . . . . 
        . . f b e 7 7 e 4 4 4 f f . . . 
        . . . f f e e f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . . f e 7 7 f 1 4 d 4 e e f . 
        . . . . f 7 7 7 e e e e e f . . 
        . . . . f e 4 e 7 7 4 f . . . . 
        . . . . f 2 2 e 7 7 e f . . . . 
        . . . f f 5 5 f e e f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e 7 7 f 1 4 d 4 e e f . 
        . f d d f 7 7 7 7 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e 7 7 4 2 2 2 f . . . . 
        . . f b e 7 7 e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e 7 7 f 1 4 d 4 e e f . . 
        . . . f 7 7 7 e e e e e f . . . 
        . . . f e 4 e 7 7 4 f . . . . . 
        . . . f 2 2 e 7 7 e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    1000,
    true
    )
    zombie_row = randint(0, 6)
    tiles.placeOnTile(basic_zombie, tiles.getTileLocation(16, zombie_row))
    basic_zombie.setVelocity(-8, 0)
    sprites.setDataNumber(basic_zombie, "health", 400)
    sprites.setDataNumber(basic_zombie, "speed", 8)
    sprites.setDataNumber(basic_zombie, "strength", 10)
    sprites.changeDataNumberBy(basic_zombie, "slot_value", 6)
    zombie_count += 6
    my_count = zombie_array[zombie_row]
    zombie_array[zombie_row] = my_count + 1
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    check_overlapping_plant()
    console.logValue("overlapping_plant", overlapping_plant)
    if (current_plant == 0) {
        make_peashooter()
    } else if (current_plant == 1) {
        make_sunflower()
    } else if (current_plant == 2) {
        make_walnut()
    } else {
        destroy_plant()
    }
})
function destroy_plant () {
    remover = sprites.create(img`
        2 . . . . . . . . . . . . . . . 
        . 2 2 . . . . . . . . . . . . . 
        . . . 2 . . . . . . . . . . 2 2 
        . . . 2 . . . . . . . . 2 2 . . 
        . . . . 2 2 . . . . 2 2 . . . . 
        . . . . . 2 2 . . 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 . 2 . . . . . . . 
        . . . . . 2 . . . 2 . . . . . . 
        . . . . 2 . . . . . 2 2 . . . . 
        . . . 2 . . . . . . . 2 . . . . 
        . . 2 . . . . . . . . . 2 2 . . 
        . 2 . . . . . . . . . . . 2 . . 
        . . . . . . . . . . . . . . 2 . 
        . . . . . . . . . . . . . . 2 2 
        . . . . . . . . . . . . . . . 2 
        `, SpriteKind.remover)
    tiles.placeOnTile(remover, cursor.tilemapLocation())
    pause(100)
    remover.destroy()
}
sprites.onOverlap(SpriteKind.mower, SpriteKind.zombie, function (sprite, otherSprite) {
    if (sprite.vx == 0) {
        sprite.setVelocity(100, 0)
        music.buzzer.play()
    }
    otherSprite.destroy(effects.disintegrate, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    current_plant += 1
    current_plant = current_plant % 4
    console.logValue("current_plant", current_plant)
    if (current_plant == 0) {
        cursor.setImage(assets.image`peashooter`)
    } else if (current_plant == 1) {
        cursor.setImage(assets.image`sunflower`)
    } else if (current_plant == 2) {
        cursor.setImage(assets.image`walnut`)
    } else {
        cursor.setImage(assets.image`shovel`)
    }
})
function deploy_sun () {
    sun = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . f 5 5 4 4 4 5 5 f . . . . 
        . . . f 5 5 4 4 4 5 5 f . . . . 
        . . . f 5 5 4 4 4 5 5 f . . . . 
        . . . . f 5 5 5 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(sun, current_plant_sprite.tilemapLocation())
}
function spawn_speed_zombie () {
    basic_zombie = sprites.create(img`
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f e 4 4 c c c f f f f . 
        . f f e 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e e f . . . 
        . . . f 3 3 3 e d d 4 . . . 
        . . . f 3 3 3 e d d e . . . 
        . . . f 6 6 6 f e e f . . . 
        . . . . f f f f f f . . . . 
        . . . . . . f f f . . . . . 
        `, SpriteKind.zombie)
    animation.runImageAnimation(
    basic_zombie,
    [img`
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f e 4 4 c c c f f f f . 
        . f f e 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e e f . . . 
        . . . f 3 3 3 e d d 4 . . . 
        . . . f 3 3 3 e d d e . . . 
        . . . f 6 6 6 f e e f . . . 
        . . . . f f f f f f . . . . 
        . . . . . . f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f c 4 4 c c c f f f f . 
        . f f f 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d e e f f f . . 
        . . . f e 4 e d d 4 f . . . 
        . . . f 3 3 e d d e f . . . 
        . . f f 6 6 f e e f f f . . 
        . . f f f f f f f f f f . . 
        . . . f f f . . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f c 4 4 c c c f f f f . 
        . f f f 4 4 f b f 4 4 f f . 
        . . f c d d f 1 4 d 4 f f . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e d d 4 . . 
        . . . f 3 3 3 3 e d d e . . 
        . . f f 6 6 6 6 f e e f . . 
        . . f f f f f f f f f f . . 
        . . . f f f . . . f f . . . 
        `],
    500,
    true
    )
    zombie_row = randint(0, 6)
    tiles.placeOnTile(basic_zombie, tiles.getTileLocation(16, zombie_row))
    basic_zombie.setVelocity(-20, 0)
    sprites.setDataNumber(basic_zombie, "health", 200)
    sprites.setDataNumber(basic_zombie, "speed", 20)
    sprites.setDataNumber(basic_zombie, "strength", 10)
    sprites.changeDataNumberBy(basic_zombie, "slot_value", 2)
    zombie_count += 2
    my_count = zombie_array[zombie_row]
    zombie_array[zombie_row] = my_count + 1
}
sprites.onOverlap(SpriteKind.Food, SpriteKind.Food, function (sprite, otherSprite) {
    sprite.destroy()
})
function shoot_pea () {
    pea_shot = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(pea_shot, current_plant_sprite.tilemapLocation())
    music.thump.play()
    pea_shot.setFlag(SpriteFlag.DestroyOnWall, true)
    pea_shot.setVelocity(50, 0)
}
function make_sunflower () {
    if (tiles.tileAtLocationEquals(cursor.tilemapLocation(), sprites.castle.tilePath5) && info.score() >= 50 && !(overlapping_plant)) {
        info.changeScoreBy(-50)
        sunflower = sprites.create(assets.image`sunflower`, SpriteKind.plant)
        sprites.setDataNumber(sunflower, "health", 50)
        sprites.setDataString(sunflower, "type", "sunflower")
        sprites.setDataNumber(sunflower, "counter", 10)
        tiles.placeOnTile(sunflower, cursor.tilemapLocation())
    } else {
        console.log("cannot plant")
        overlapping_plant = false
    }
}
function make_peashooter () {
    if (tiles.tileAtLocationEquals(cursor.tilemapLocation(), sprites.castle.tilePath5) && info.score() >= 100 && !(overlapping_plant)) {
        info.changeScoreBy(-100)
        peashooter = sprites.create(assets.image`peashooter`, SpriteKind.plant)
        sprites.setDataNumber(peashooter, "health", 100)
        sprites.setDataString(peashooter, "type", "peashooter")
        sprites.setDataNumber(peashooter, "counter", 4)
        tiles.placeOnTile(peashooter, cursor.tilemapLocation())
    } else {
        console.log("cannot plant")
        overlapping_plant = false
    }
}
sprites.onOverlap(SpriteKind.remover, SpriteKind.plant, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.check, SpriteKind.plant, function (sprite, otherSprite) {
    console.log("check found plant")
    overlapping_plant = true
    sprite.destroy()
})
function spawn_basic_zombie () {
    basic_zombie = sprites.create(img`
        . . . f f f f f . . . . 
        . . f e e e e e f f . . 
        . f e e e e e e e f f . 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        f f e 4 4 f f 4 e 4 f f 
        . f f d d d d 4 d 4 f . 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e e f . . 
        . . f 1 1 1 e d d 4 . . 
        . . f 1 1 1 e d d e . . 
        . . f 6 6 6 f e e f . . 
        . . . f f f f f f . . . 
        . . . . . f f f . . . . 
        `, SpriteKind.zombie)
    animation.runImageAnimation(
    basic_zombie,
    [img`
        . . . f f f f f . . . . 
        . . f e e e e e f f . . 
        . f e e e e e e e f f . 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        f f e 4 4 f f 4 e 4 f f 
        . f f d d d d 4 d 4 f . 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e e f . . 
        . . f 1 1 1 e d d 4 . . 
        . . f 1 1 1 e d d e . . 
        . . f 6 6 6 f e e f . . 
        . . . f f f f f f . . . 
        . . . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f . 
        . . f b b d e e f f f . 
        . . f e 4 e d d 4 f . . 
        . . f 1 1 e d d e f . . 
        . f f 6 6 f e e f f f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `,img`
        . . . . . . . . . . . . 
        . . . f f f f f f . . . 
        . . f e e e e e f f f . 
        . f e e e e e e e f f f 
        f e e e e e e e f f f f 
        f e e 4 e e e f f f f f 
        f e e 4 4 e e e f f f f 
        f f e 4 4 4 4 4 f f f f 
        . f e 4 4 f f 4 e 4 f f 
        . . f d d d d 4 d 4 f f 
        . . f b b d d 4 f f f . 
        . . f e 4 4 4 e d d 4 . 
        . . f 1 1 1 1 e d d e . 
        . f f 6 6 6 6 f e e f . 
        . f f f f f f f f f f . 
        . . f f f . . . f f . . 
        `],
    750,
    true
    )
    zombie_row = randint(0, 6)
    tiles.placeOnTile(basic_zombie, tiles.getTileLocation(16, zombie_row))
    basic_zombie.setVelocity(-10, 0)
    sprites.setDataNumber(basic_zombie, "health", 100)
    sprites.setDataNumber(basic_zombie, "speed", 10)
    sprites.setDataNumber(basic_zombie, "strength", 10)
    sprites.changeDataNumberBy(basic_zombie, "slot_value", 1)
    zombie_count += 1
    my_count = zombie_array[zombie_row]
    zombie_array[zombie_row] = my_count + 1
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(25)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.zombie, SpriteKind.plant, function (sprite, otherSprite) {
    sprite.setVelocity(0, 0)
    while (sprites.readDataNumber(sprite, "health") > 0 && (sprites.readDataNumber(otherSprite, "health") > 0 && sprite.overlapsWith(otherSprite))) {
        sprites.changeDataNumberBy(otherSprite, "health", -1 * sprites.readDataNumber(sprite, "strength"))
        pause(500)
    }
    if (sprites.readDataNumber(otherSprite, "health") <= 0) {
        otherSprite.destroy()
    }
    sprite.setVelocity(-1 * sprites.readDataNumber(sprite, "speed"), 0)
})
function make_lawn_mower (num: number) {
    my_mower = sprites.create(assets.image`Lawn Mower`, SpriteKind.mower)
    tiles.placeOnTile(my_mower, tiles.getTileLocation(1, num))
    my_mower.setFlag(SpriteFlag.DestroyOnWall, true)
}
scene.onOverlapTile(SpriteKind.zombie, sprites.dungeon.floorLight2, function (sprite, location) {
    info.setScore(player_score)
    game.over(false, effects.melt)
})
function check_overlapping_plant () {
    collider = sprites.create(assets.image`checker`, SpriteKind.check)
    tiles.placeOnTile(collider, cursor.tilemapLocation())
    pause(100)
    collider.destroy()
}
sprites.onDestroyed(SpriteKind.zombie, function (sprite) {
    zombie_count += -1 * sprites.readDataNumber(sprite, "slot_value")
    player_score += 10 * sprites.readDataNumber(sprite, "slot_value")
    if (wave_active) {
        wave_active = false
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.zombie, function (sprite, otherSprite) {
    music.knock.playUntilDone()
    sprites.changeDataNumberBy(otherSprite, "health", -50)
    if (sprites.readDataNumber(otherSprite, "health") <= 0) {
        otherSprite.destroy(effects.spray, 500)
        music.smallCrash.play()
        my_count = zombie_array[sprite.tilemapLocation().row]
        zombie_array[sprite.tilemapLocation().row] = my_count - 1
    }
    sprite.destroy(effects.coolRadial, 100)
})
/**
 * Plants are 0-peashooter, 1-sunflower, 2-walnut, 3-shovel
 */
let zombie_cap = 0
let collider: Sprite = null
let my_mower: Sprite = null
let peashooter: Sprite = null
let sunflower: Sprite = null
let pea_shot: Sprite = null
let current_plant_sprite: Sprite = null
let sun: Sprite = null
let remover: Sprite = null
let my_count = 0
let zombie_row = 0
let basic_zombie: Sprite = null
let walnut: Sprite = null
let zombie_array: number[] = []
let wave_active = false
let player_score = 0
let overlapping_plant = false
let cursor: Sprite = null
let current_plant = 0
current_plant = 0
tiles.setCurrentTilemap(tilemap`level4`)
cursor = sprites.create(assets.image`peashooter`, SpriteKind.Player)
controller.moveSprite(cursor)
scene.cameraFollowSprite(cursor)
overlapping_plant = false
info.setScore(100)
let zombie_count = 0
player_score = 0
wave_active = false
zombie_array = []
let wave_counter = 360
for (let index = 0; index < 7; index++) {
    zombie_array.push(0)
}
for (let index = 0; index <= 6; index++) {
    make_lawn_mower(index)
}
game.onUpdateInterval(500, function () {
    for (let value of sprites.allOfKind(SpriteKind.plant)) {
        current_plant_sprite = value
        if (sprites.readDataString(current_plant_sprite, "type") == "sunflower") {
            if (sprites.readDataNumber(current_plant_sprite, "counter") == 0) {
                deploy_sun()
                sprites.setDataNumber(current_plant_sprite, "counter", 40)
            } else {
                sprites.changeDataNumberBy(current_plant_sprite, "counter", -1)
            }
            if (sprites.readDataNumber(current_plant_sprite, "health") < 25) {
                current_plant_sprite.setImage(assets.image`sunflower_hurt`)
            }
        }
        if (sprites.readDataString(current_plant_sprite, "type") == "peashooter") {
            if (sprites.readDataNumber(current_plant_sprite, "counter") == 0) {
                if (zombie_array[current_plant_sprite.tilemapLocation().row] > 0) {
                    shoot_pea()
                    sprites.setDataNumber(current_plant_sprite, "counter", 10)
                }
            } else {
                sprites.changeDataNumberBy(current_plant_sprite, "counter", -1)
            }
            if (sprites.readDataNumber(current_plant_sprite, "health") < 50) {
                current_plant_sprite.setImage(assets.image`peashooter_hurt`)
            }
        }
        if (sprites.readDataString(current_plant_sprite, "type") == "walnut") {
            if (sprites.readDataNumber(current_plant_sprite, "health") < 300) {
                current_plant_sprite.setImage(assets.image`walnut_very_hurt`)
            } else if (sprites.readDataNumber(current_plant_sprite, "health") < 600) {
                current_plant_sprite.setImage(assets.image`walnut_slightly_hurt`)
            }
        }
    }
    if (Math.percentChance(30 + zombie_cap) && zombie_count < zombie_cap) {
        spawn_zombie()
    }
    if (wave_counter == 0) {
        cursor.sayText("A massive wave of zoombies is approaching", 5000, false)
        for (let index = 0; index < zombie_cap; index++) {
            spawn_zombie()
        }
        wave_counter = 360
    } else {
        wave_counter += -1
        console.logValue("wave_counter", wave_counter)
    }
    if (Math.percentChance(10 - sprites.allOfKind(SpriteKind.Food).length)) {
        sun = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . f 5 5 4 4 4 5 5 f . . . . 
            . . . f 5 5 4 4 4 5 5 f . . . . 
            . . . f 5 5 4 4 4 5 5 f . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(sun, sprites.castle.tilePath5)
    }
    zombie_cap = Math.min(1 + Math.idiv(player_score, 50), 50)
    console.logValue("zombie_cap", zombie_cap)
    console.logValue("zombie_count", zombie_count)
    console.logValue("player_score", player_score)
    console.logValue("zombie_array", zombie_array)
})
