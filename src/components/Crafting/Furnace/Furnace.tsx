import s from "@site/src/components/Crafting/Crafting.module.scss";

import ctFire from "@site/src/components/Crafting/assets/img/ct_fire.png";
import ctArrow from "@site/src/components/Crafting/assets/img/ct_arrow.png";
import {SlotItem} from "@site/src/components/Crafting/util";
import SlotComponent from "@site/src/components/Crafting/SlotComponent";

type Props = {
    ingredients: SlotItem[]
    output: SlotItem
}

export default function Furnace({ingredients, output}: Props) {
    return (
        <div className={s.smeltingUi}>
            <div className={s.heading}>Furnace</div>
            <div className={s.flexRow}>
                <div className={s.slotGroup}>
                    <div className={s.slotRow}>
                        <SlotComponent ingredient={ingredients[0]} />
                    </div>
                    <div className={s.slotRow}>
                        <span className={`${s.invSlot} ${s.fire} ${s.noBg} ${s.noBorder}`}>
                            <img className={s.itemImg} src={ctFire} alt=""/>
                        </span>
                    </div>
                    <div className={s.slotRow}>
                        <SlotComponent ingredient={ingredients[1]} />
                    </div>
                </div>
                <div className={s.arrow}>
                    <img className={s.itemImg} src={ctArrow} alt=""/>
                </div>
                <SlotComponent output={output} />
            </div>
        </div>
    )
}
