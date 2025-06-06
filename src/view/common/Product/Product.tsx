
import {useState} from 'react';
import {ModifyCart} from "../ModidyCart/ModifyCart";
type productData={
    id: number,
    name: string,
    price: string,
    currency: string,
    image: string
}
type ProductProps = {
    data: productData
}

const images:Record<string,string> = import.meta.glob("../../../assets/product/*",{
    eager: true,import:"default"
});


export function Product({data}: ProductProps) {
    const [isActive,setIsActive]=useState<boolean>(false);
    const addtocart = () =>{
        setIsActive(true);
    }
    console.log(images);
    // console.log('../../assets/product'${data.image});``
    const img = images[`../../../assets/product/${data.image}`];
    return (
        <>
            <div className="rounded-2xl bg-amber-100 w-auto h-[15rem] object-cover p-3">
                <div className="flex justify-center">
                    <img className="" src={img} alt=""/>
                </div>
                <div className="flex w-full justify-center gap-3 p-2">
                    <div>
                        <h3 className="text-black text-center text-2xl font-serif mt-2">
                            {data.name}</h3>
                    </div>
                    <div className="bg-yellow-300 ml-1 p-[0.3px]   rounded-lg pr-2">
                        <h3 className="text-[22px] pl-1 justify-end">{data.price} <small className="text-[15px]">{data.currency}</small></h3>
                    </div>
                </div>
                <div className="flex justify-center">
                    {
                        isActive ? (
                            <ModifyCart data={{
                                product: data
                            }}/>


                        ):(
                            <button className="w-full mt-8 p-[2.4px] bg-blue-300 font-sans text-[20px] rounded-2xl border-gray-500 border-[0.5px]"
                            onClick={addtocart}>Add to Cart</button>
                        )
                    }

                </div>
            </div>
        </>
    );
}