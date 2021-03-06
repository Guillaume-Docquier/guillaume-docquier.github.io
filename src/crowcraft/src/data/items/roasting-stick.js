///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Vendors } from "models";
import { Item } from "models";
import { Gold } from "./gold";

export class RoastingStick extends Item {
    constructor() {
        super(
            "roasting stick",
            [Vendors.Food],
            [Rarities.Common],
            [
                new CraftingMaterial(6, new Gold()),
            ],
            1,
            ""
        );
    }
}
