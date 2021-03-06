///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { DiamondCuttingBlade } from "./diamond-cutting-blade";
import { RoughEmerald } from "./rough-emerald";
import { WaterFlask } from "./water-flask";

export class RefreshingFocusGem extends Item {
    constructor() {
        super(
            "refreshing focus gem",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughEmerald()),
				new CraftingMaterial(1, new DiamondCuttingBlade()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            "cut gemstone: focusing"
        );
    }
}
