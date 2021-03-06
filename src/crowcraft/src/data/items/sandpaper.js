///////////////////////////////////////////////////
//                                               //
//   This file was auto-generated, do not edit   //
//                                               //
///////////////////////////////////////////////////

import { CraftingMaterial, Rarities, Professions } from "models";
import { Item } from "models";
import { EtherealDust } from "./ethereal-dust";
import { Stone } from "./stone";
import { Wood } from "./wood";

export class Sandpaper extends Item {
    constructor() {
        super(
            "sandpaper",
            [Professions.Woodworker],
            [Rarities.Common],
            [
                new CraftingMaterial(2, new Wood()),
				new CraftingMaterial(1, new Stone()),
				new CraftingMaterial(3, new EtherealDust()),
            ],
            5,
            ""
        );
    }
}
