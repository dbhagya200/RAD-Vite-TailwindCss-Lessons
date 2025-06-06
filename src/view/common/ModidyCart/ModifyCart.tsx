import "../../../index.css";
import {useEffect, useState} from "react";
import type {CartItem} from "../../../Model/CartItem.ts";

interface ModifyCartProps {
    data: any
}

export const itemsList:CartItem[] = [];
export function ModifyCart({ data }: ModifyCartProps) {
    const [itemCount, setItemCount]
        = useState(1);

    useEffect(() => {

        const existingItem = itemsList
            .find(item =>
                item.product.id === data.product.id);
        if (existingItem) {
            existingItem.itemCount = itemCount;
        } else {
            itemsList.push({
                product: data.product,
                itemCount: itemCount
            });
        }
        console.log(itemsList);
    }, [itemCount, data])
    const decreaseItemCount = () => {
        setItemCount(prevValue =>
            prevValue > 1
                ? prevValue - 1
                : (alert("Item count can't " +
                        "be less than 1"),
                        prevValue
                )
        )
    }
    const increaseItemCount = () => {
        setItemCount(prvCount =>
            prvCount + 1)
    }

    return (
        <div className="w-full mt-1 p-[2.4px] text-[2rem] text-center ">

            <button className="bg-blue-300 mr-2 w-[2.5rem] items-center rounded-2xl"
                    onClick={increaseItemCount}>+</button>
            <small className="text-[1.6rem]" >{itemCount}</small>
            <button className="bg-blue-300 ml-2 w-[2.5rem] rounded-2xl"
                    onClick={decreaseItemCount}>-</button>
        </div>
    );
}

