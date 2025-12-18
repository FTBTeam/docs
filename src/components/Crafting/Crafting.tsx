import s from './Crafting.module.scss'
import Table from "@site/src/components/Crafting/Table/Table";
import Furnace from "@site/src/components/Crafting/Furnace/Furnace";
import {Recipe, TagsYaml} from "@site/src/components/Crafting/util";

type Props = {
    recipeString: string
}

export function Crafting({recipeString}: Props) {
    try {
        if (!recipeString) throw new Error('No recipe string provided');
        const recipe = JSON.parse(recipeString) as Recipe;

        return (
            <div className={s.craftingUiWrapper}>
                {recipe.type === 'table' && (
                    <Table ingredients={recipe.ingredients} output={recipe.output} tags={recipe.tags} customTableName={recipe.customTableName} />
                )}
                {recipe.type === 'smelting' && (
                    <Furnace ingredients={recipe.ingredients} output={recipe.output} tags={recipe.tags} />
                )}
            </div>
        )
    } catch (e) {
        return <div style={{color: 'red'}}>Error loading recipe: {(e as Error).message}</div>
    }
}
