import s from "@site/src/components/Crafting/Crafting.module.scss";

// @ts-ignore
import ctFire from "@site/src/components/Crafting/assets/img/ct_fire.png";
// @ts-ignore
import ctArrow from "@site/src/components/Crafting/assets/img/ct_arrow.png";
import {getItemName, getNamespace} from "@site/src/components/Crafting/util";

type Props = {
    ingredients: string[]
    output: string | null
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
                <span className={`${s.outputSlot} ${s.bigSlot}`}>
                    <img className={s.itemImg} src={`/img/mc/${getNamespace(output)}/${getItemName(output)}.png`} alt=""/>
                </span>
            </div>
        </div>
    )
}
