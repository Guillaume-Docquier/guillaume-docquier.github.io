///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { HeadMoldGreatMace } from "./head-mold-great-mace";
import { MetalBar } from "./metal-bar";

export class WeaponHeadGreatMace extends Item {
    constructor() {
        super(
            "weapon head: great mace",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new MetalBar()),
				new CraftingMaterial(1, new HeadMoldGreatMace()),
				new CraftingMaterial(8, new EtherealDust()),
            ],
            1,
            ""
        );
    }
}
