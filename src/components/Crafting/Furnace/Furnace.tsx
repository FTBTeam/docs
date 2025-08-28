import s from "@site/src/components/Crafting/Crafting.module.scss";

import ctFire from "@site/src/components/Crafting/assets/img/ct_fire.png";
import ctArrow from "@site/src/components/Crafting/assets/img/ct_arrow.png";
import {getItemName, getNamespace, RecipeOutput} from "@site/src/components/Crafting/util";

type Props = {
    ingredients: string[]
    output: RecipeOutput
}

export default function Furnace({ingredients, output}: Props) {
    return (
        <div className={s.smeltingUi}>
            <div className={s.heading}>Furnace</div>
            <div className={s.flexRow}>
                <div className={s.inputGroup}>
                    <div className={s.inputRow}>
                        <span className={s.inputSlot}>
                            <img className={s.itemImg} src={`/img/mc/${getNamespace(ingredients[0])}/${getItemName(ingredients[0])}.png`} alt=""/>
                        </span>
                    </div>
                    <div className={s.inputRow}>
                        <span className={`${s.inputSlot} ${s.fire} ${s.noBg} ${s.noBorder}`}>
                            <img className={s.itemImg} src={ctFire} alt=""/>
                        </span>
                    </div>
                    <div className={s.inputRow}>
                        <span className={s.inputSlot}>
                            <img className={s.itemImg} src={`/img/mc/${getNamespace(ingredients[1])}/${getItemName(ingredients[1])}.png`} alt=""/>
                        </span>
                    </div>
                </div>
                <div className={s.arrow}>
                    <img className={s.itemImg} src={ctArrow} alt=""/>
                </div>
                <span className={`${s.outputSlot}`}>
                    <img className={`${s.itemImg} ${s.bigSlot}`} src={`/img/mc/${getNamespace(output.item)}/${getItemName(output.item)}.png`} alt=""/>
                    {output.count >= 2 && (
                        <span className={s.itemCount}>
                            <span>{output.count}</span>
                        </span>
                    )}
                </span>
            </div>
        </div>
    )
}
