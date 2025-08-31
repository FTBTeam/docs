import s from "@site/src/components/Crafting/Crafting.module.scss";
import {SlotItem} from "@site/src/components/Crafting/util";
import {useEffect, useState} from "react";

type Props = {
    ingredient?: SlotItem
    output?: SlotItem
}

// testing data
const logs = [
    'cherry_log',
    'log_acacia',
    'log_big_oak',
    'log_birch',
    'log_jungle',
    'log_oak',
    'log_spruce',
    'mangrove_log',
    'pale_oak_log',
]

const getImagePath = (namespace: string, itemName: string): string => {
    if (!namespace || !itemName) return '';
    return `/img/mc/${namespace}/${itemName}.png`;
}

export default function SlotComponent({ingredient, output}: Props) {
    const [currentIngredientImg, setCurrentIngredientImg] = useState('');
    const [currentOutputImg, setCurrentOutputImg] = useState('');

    const tagImageCycler = (tagName: string, setImage: (imgPath: string) => void)=> {
        let index = 0;
        setImage(getImagePath('minecraft', logs[index]));
        const interval = setInterval(() => {
            index = (index + 1) % logs.length;
            setImage(getImagePath('minecraft', logs[index]));
        }, 1000);
        return () => clearInterval(interval);
    }

    useEffect(() => {
        if (ingredient) {
            if (ingredient.itemName?.startsWith('#')) {
                const tagName = ingredient.itemName.slice(1);
                tagImageCycler(tagName, setCurrentIngredientImg);
            } else {
                setCurrentIngredientImg(getImagePath(ingredient.namespace || '', ingredient.itemName || ''));
            }
        }
    }, [ingredient]);

    useEffect(() => {
        if (output) {
            if (output.itemName?.startsWith('#')) {
                const tagName = output.itemName.slice(1);
                tagImageCycler(tagName, setCurrentOutputImg);
            }else {
                setCurrentOutputImg(getImagePath(output.namespace || '', output.itemName || ''));
            }
        }
    }, [output]);

    return (
        <>
            {!output &&
                <span className={s.invSlot}>
                    {currentIngredientImg != '' &&
                        <img className={s.itemImg} src={currentIngredientImg} alt=""/>
                    }
                </span>
            }
            {output &&
                <span className={`${s.outputSlot}`}>
                    { currentOutputImg != '' &&
                        <img className={`${s.itemImg} ${s.bigSlot}`} src={currentOutputImg} alt=""/>
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
