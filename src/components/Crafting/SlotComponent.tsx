import s from "@site/src/components/Crafting/Crafting.module.scss";
import {getItemName, getNamespace, RecipeOutput} from "@site/src/components/Crafting/util";

type Props = {
    ingredient?: string
    output?: RecipeOutput
}

export default function SlotComponent({ingredient, output}: Props) {
    return (
        <>
            {!output &&
                <span className={s.invSlot}>
                    {ingredient &&
                        <img className={s.itemImg} src={`/img/mc/${getNamespace(ingredient)}/${getItemName(ingredient)}.png`} alt=""/>
                    }
                </span>
            }
            {output &&
                <span className={`${s.outputSlot}`}>
                    <img className={`${s.itemImg} ${s.bigSlot}`} src={`/img/mc/${getNamespace(output.item)}/${getItemName(output.item)}.png`} alt=""/>
                    {output.count >= 2 && (
                        <span className={s.itemCount}>
                            <span>{output.count}</span>
                        </span>
                    )}
                </span>
            }
        </>
    )
}
