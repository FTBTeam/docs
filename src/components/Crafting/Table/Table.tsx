import s from "@site/src/components/Crafting/Crafting.module.scss";
// @ts-ignore
import ctArrow from "@site/src/components/Crafting/assets/img/ct_arrow.png";
import {getItemName, getNamespace} from "@site/src/components/Crafting/util";

type Props = {
    ingredients: string[]
    output: string | null
}

export default function Table({ingredients, output}: Props) {
    const resultNamespace = output?.includes(':') ? output.split(':')[0] : 'vanilla';
    const resultItem = output?.includes(':') ? output.split(':')[1] : output;
    return (
        <div className={s.craftingTableUi}>
            <div className={s.heading}>Crafting Table</div>
            <div className={s.flexRow}>
                <div className={s.inputGroup}>
                    {[0, 1, 2].map(row => (
                        <div className={s.inputRow} key={row}>
                            {[0, 1, 2].map(col => {
                                const rawItem = ingredients[row * 3 + col];
                                const item = getItemName(rawItem);
                                const namespace = getNamespace(rawItem)
                                return (
                                    <span className={s.inputSlot} key={col}>
                                        {item &&
                                            <img className={s.itemImg} src={`/img/mc/${namespace}/${item}.png`} alt=""/>
                                        }
                                    </span>
                                )
                            })}
                        </div>
                    ))}
                </div>
                <div className={s.arrow}>
                    <img className={s.itemImg} src={ctArrow} alt=""/>
                </div>
                <span className={`${s.outputSlot} ${s.bigSlot}`}>
                    <img className={s.itemImg} src={`/img/mc/${resultNamespace}/${resultItem}.png`} alt=""/>
                </span>
            </div>
        </div>
    )
}
