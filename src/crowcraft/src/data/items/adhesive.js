///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Vendors } from "models";
import { Item } from "models";
import { Gold } from "./gold";

export class Adhesive extends Item {
    constructor() {
        super(
            "adhesive",
            [Vendors.WeaponCrafting],
            [Rarities.Common],
            [
                new CraftingMaterial(250, new Gold()),
            ],
            1,
            ""
        );
    }
}
