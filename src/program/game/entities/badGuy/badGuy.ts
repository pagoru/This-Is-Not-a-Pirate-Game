import {EntityAbstract} from "../entity/entity.abstract";
import {ComponentEnum} from "../../components/component/component.enum";
import {EntityEnum} from "../entity/entity.enum";
import * as PIXI from "pixi.js";
import {TexturesEnum} from "../../../canvas/textures/textures.enum";

export class BadGuy extends EntityAbstract {

    constructor(
        position: PIXI.IPointData
    ) {
        super(EntityEnum.BAD_GUY);
        this.addComponent(ComponentEnum.SPRITE, { [ComponentEnum.SPRITE]: { visible: true, texture: TexturesEnum.ERROR } })
        this.addComponent(ComponentEnum.POSITION, { [ComponentEnum.POSITION]: position } );
    }

}
