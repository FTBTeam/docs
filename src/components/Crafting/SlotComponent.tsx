import s from "@site/src/components/Crafting/Crafting.module.scss";
import {SlotItem, Tags} from "@site/src/components/Crafting/util";
import {useEffect, useState} from "react";

type Props = {
    ingredient?: SlotItem
    output?: SlotItem
    tags: Tags
}

const getImagePath = (namespace: string, itemName: string): string => {
    if (!namespace || !itemName) return '';
    return `/img/mc/${namespace}/${itemName}.png`;
}

export default function SlotComponent({ingredient, output, tags}: Props) {
    const [currentIngredientImg, setCurrentIngredientImg] = useState('');
    const [currentOutputImg, setCurrentOutputImg] = useState('');

    const tagImageCycler = (namespace: string, tagName: string, setImage: (imgPath: string) => void) => {
        let index = 0;
        console.log(namespace, tagName, index);
        setImage(getImagePath(namespace, tags[namespace][tagName][index]));
        const interval = setInterval(() => {
            index = (index + 1) % tags[namespace][tagName].length;
            setImage(getImagePath(namespace, tags[namespace][tagName][index]));
        }, 1000);
        return () => clearInterval(interval);
    }

    useEffect(() => {
        if (ingredient) {
            if (ingredient.itemName?.startsWith('#')) {
                const tagName = ingredient.itemName.slice(1);
                tagImageCycler(ingredient.namespace, tagName, setCurrentIngredientImg);
            } else {
                setCurrentIngredientImg(getImagePath(ingredient.namespace || '', ingredient.itemName || ''));
            }
        }
    }, [ingredient]);

    useEffect(() => {
        if (output) {
            if (output.itemName?.startsWith('#')) {
                const tagName = output.itemName.slice(1);
                tagImageCycler(output.namespace, tagName, setCurrentOutputImg);
            } else {
                setCurrentOutputImg(getImagePath(output.namespace || '', output.itemName || ''));
            }
        }
    }, [output]);

    return (
        <>
            {!output &&
                <span className={s.invSlot}>
                    {currentIngredientImg !== '' &&
                        <img className={s.itemImg} src={currentIngredientImg} alt="Crafting Item"/>
                    }
                </span>
            }
            {output &&
                <span className={`${s.outputSlot}`}>
                    { currentOutputImg !== '' &&
                        <img className={`${s.itemImg} ${s.bigSlot}`} src={currentOutputImg} alt="Crafting Item"/>
                    }
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
