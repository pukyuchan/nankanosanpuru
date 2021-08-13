// 自動生成されたコードです。変更しないでください。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "レベル1":
            case "レベル1":return tiles.createTilemap(hex`200008000101010101010101010710050101010101010101010101010101010101010101010101010101010101070605010101010101010101010101010101010101010101010101010101010102030401010101010101010101010101010101010101010a0c0c0c0c0c0e010101010101010101010101010101010101010101010101010b0d0d0d0d090f010101010101010101010101010101010101010101010101010101010101080f01010101010101010101010101010101010101010101010101010101010108090c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0e01010101010101010101010101010b0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d11010101010101010101`, img`
2 2 2 2 2 2 . . . 2 2 2 . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 . 2 . 2 2 2 . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 . 2 . 2 2 2 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.skillmap.islandTile6,sprites.skillmap.islandTile7,sprites.skillmap.islandTile8,sprites.skillmap.islandTile5,sprites.skillmap.islandTile4,sprites.skillmap.islandTile3,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.dungeon.chestClosed,sprites.castle.tilePath9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// 自動生成されたコードです。変更しないでください。
