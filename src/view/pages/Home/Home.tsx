import '../../../index.css';
import {useEffect,useState} from "react";
import {Product} from "../../common/Product/Product"

type productData={
    id: number,
    name: string,
    price: string,
    currency: string,
    image: string
}

export function Home() {
    const [products,setProducts]=useState <productData[]>([])
    useEffect(() => {
        const fetchData = async () =>{
            try{
                const response=await fetch('./product-data.json')
                const jsonData = await response.json();
                setProducts(jsonData);
                console.log(jsonData);
            }catch(error){
                console.error("Error fetching data: ", error);
            }
        }
        fetchData();
    }, []);
    return (
        // <div className=" flex flex-wrap w-full justify-center gap-3">
        //  <div className="rounded-2xl bg-amber-700 w-1/4 h-[30rem] object-cover p-3">
        //      <img src={image}/>
        //      <h3 className="text-black text-center text-4xl font-serif mt-2 ">
        //          BMW Sports
        //      </h3>
        //      <div className="flex">
        //          <h4 className="text-blue-950 font-serif">Price :</h4>
        //          <small className="text-blue-950 text-center text-xl font-serif mt-2 ">159,000,000 </small>
        //
        //      </div>
        //      <input className="w-[3rem] border-2" />
        //  </div>
        //  <div className="bg-amber-700 w-1/5 h-[20rem]"></div>
        //  <div className="bg-amber-700 w-1/5 h-[20rem]"></div>
        // </div>




        <div>
            <div className="flex flex-wrap w-full justify-center gap-3">

                {
                    products.map((product)=>(
                        <Product key={product.id} data={product}></Product>
                    ))
                }


                {/*<div className="rounded-2xl bg-amber-100 w-auto h-[15rem] object-cover p-3">*/}
                {/*    <div className="flex justify-center">*/}
                {/*        <img className="" src={image} alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="flex w-full justify-center gap-3 p-2">*/}
                {/*        <div>*/}
                {/*            <h3 className="text-black text-center text-2xl font-serif mt-2">*/}
                {/*                BMW Sports</h3>*/}
                {/*        </div>*/}
                {/*        <div className="bg-yellow-300 ml-1 p-[0.3px]   rounded-lg pr-2">*/}
                {/*            <h3 className="text-[22px] pl-1 justify-end">250,000,000 <small className="text-[15px]">LKR</small></h3>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="flex justify-center">*/}
                {/*        <button className="w-full mt-8 p-[2.4px] bg-blue-300 font-sans text-[20px] rounded-2xl border-gray-500 border-[0.5px]">Add to Cart</button>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="rounded-2xl bg-amber-100 w-auto h-[15rem] object-cover p-3">*/}
                {/*    <div className="flex justify-center">*/}
                {/*        <img className="" src={image} alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="flex w-full justify-center gap-3 p-2">*/}
                {/*        <div>*/}
                {/*            <h3 className="text-black text-center text-2xl font-serif mt-2">*/}
                {/*                BMW Sports</h3>*/}
                {/*        </div>*/}
                {/*        <div className="bg-yellow-300 ml-1 p-[0.3px]   rounded-lg pr-2">*/}
                {/*            <h3 className="text-[22px] pl-1 justify-end">250,000,000 <small className="text-[15px]">LKR</small></h3>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="flex justify-center">*/}
                {/*        <button className="w-full mt-8 p-[2.4px] bg-blue-300 font-sans text-[20px] rounded-2xl border-gray-500 border-[0.5px]">Add to Cart</button>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="rounded-2xl bg-amber-100 w-auto h-[15rem] object-cover p-3">*/}
                {/*    <div className="flex justify-center">*/}
                {/*        <img className="" src={image} alt=""/>*/}
                {/*    </div>*/}
                {/*    <div className="flex w-full justify-center gap-3 p-2">*/}
                {/*        <div>*/}
                {/*            <h3 className="text-black text-center text-2xl font-serif mt-2">*/}
                {/*                BMW Sports</h3>*/}
                {/*        </div>*/}
                {/*        <div className="bg-yellow-300 ml-1 p-[0.3px]   rounded-lg pr-2">*/}
                {/*            <h3 className="text-[22px] pl-1 justify-end">250,000,000 <small className="text-[15px]">LKR</small></h3>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="flex justify-center">*/}
                {/*        <button className="w-full mt-8 p-[2.4px] bg-blue-300 font-sans text-[20px] rounded-2xl border-gray-500 border-[0.5px]">Add to Cart</button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}