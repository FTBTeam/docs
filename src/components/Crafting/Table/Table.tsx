import s from "@site/src/components/Crafting/Crafting.module.scss";

import ctArrow from "@site/src/components/Crafting/assets/img/ct_arrow.png";
import {getItemName, getNamespace, RecipeOutput} from "@site/src/components/Crafting/util";
import SlotComponent from "@site/src/components/Crafting/SlotComponent";

type Props = {
    ingredients: string[]
    output: RecipeOutput
}

export default function Table({ingredients, output}: Props) {
    return (
        <div className={s.craftingTableUi}>
            <div className={s.heading}>Crafting Table</div>
            <div className={s.flexRow}>
                <div className={s.slotGroup}>
                    {[0, 1, 2].map(row => (
                        <div className={s.slotRow} key={row}>
                            {[0, 1, 2].map(col => {
                                const ingredient = ingredients[row * 3 + col];
                                return (
                                    <SlotComponent ingredient={ingredient} key={col} />
                                )
                            })}
                        </div>
                    ))}
                </div>
                <div className={s.arrow}>
                    <img className={s.itemImg} src={ctArrow} alt=""/>
                </div>
                <SlotComponent output={output} />
            </div>
        </div>
    )
}
