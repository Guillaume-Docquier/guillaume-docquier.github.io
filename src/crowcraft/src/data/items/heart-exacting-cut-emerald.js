///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { CutExactingGem } from "./cut-exacting-gem";
import { ChaosEmberCuttingBlade } from "./chaos-ember-cutting-blade";
import { RoughEmerald } from "./rough-emerald";
import { WaterFlask } from "./water-flask";

export class HeartExactingCutEmerald extends CutExactingGem {
    constructor() {
        super(
            "heart exacting cut emerald",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughEmerald()),
				new CraftingMaterial(1, new ChaosEmberCuttingBlade()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            "exacting cut gemstone: heart"
        );
    }
}
