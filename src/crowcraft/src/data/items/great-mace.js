///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { WeaponHeadGreatMace } from "./weapon-head-great-mace";
import { WeaponHiltGreat } from "./weapon-hilt-great";
import { WeaponShaftMedium } from "./weapon-shaft-medium";

export class GreatMace extends Item {
    constructor() {
        super(
            "great mace",
            [Professions.Weaponsmith, Professions.Armorsmith],
            [Rarities.Common, Rarities.Uncommon, Rarities.Rare, Rarities.Epic, Rarities.Legendary],
            [
                new CraftingMaterial(1, new WeaponHiltGreat()),
				new CraftingMaterial(1, new WeaponHeadGreatMace()),
				new CraftingMaterial(1, new WeaponShaftMedium()),
				new CraftingMaterial(20, new EtherealDust()),
            ],
            1,
            ""
        );
    }
}
