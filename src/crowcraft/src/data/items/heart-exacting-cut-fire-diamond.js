///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { CutExactingGem } from "./cut-exacting-gem";
import { ChaosEmberCuttingBlade } from "./chaos-ember-cutting-blade";
import { RoughFireDiamond } from "./rough-fire-diamond";
import { WaterFlask } from "./water-flask";

export class HeartExactingCutFireDiamond extends CutExactingGem {
    constructor() {
        super(
            "heart exacting cut fire diamond",
            [Professions.Jewelcrafter],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new RoughFireDiamond()),
				new CraftingMaterial(1, new ChaosEmberCuttingBlade()),
				new CraftingMaterial(1, new WaterFlask()),
            ],
            1,
            "exacting cut gemstone: heart"
        );
    }
}
