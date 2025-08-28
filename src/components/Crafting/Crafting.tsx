import s from './Crafting.module.scss'
// @ts-ignore
import ctArrow from './assets/img/ct_arrow.png'
// @ts-ignore
import ctFire from './assets/img/ct_fire.png'
import Table from "@site/src/components/Crafting/Table/Table";
import Furnace from "@site/src/components/Crafting/Furnace/Furnace";
import {Recipe} from "@site/src/components/Crafting/util";

type Props = {
    recipes: string
}

export function Crafting({recipes}: Props) {
    const recipe = JSON.parse(recipes) as Recipe;

    return (
        <div className={s.craftingUiWrapper}>
            {recipe.type === 'table' && (
                <Table ingredients={recipe.ingredients} output={recipe.output} />
            )}
            {recipe.type === 'smelting' && (
                <Furnace ingredients={recipe.ingredients} output={recipe.output}/>
            )}
        </div>
    )
}
