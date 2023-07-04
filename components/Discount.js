export default function Discount(){
    return(
        <div id="discount" className="grid grid-cols-2 gap-2 my-32">
            <div className="">
                <img src="" alt/>
            </div>
            <div className="flex flex-col">
                <h1 className="text-[42px]">Shop what you love!</h1>
                <p>We are giving away a discount From 50$ to 200$ for purchases in the store smiley</p>
                <p>Promo code: <span className="font-bold">SEPTH</span></p>
                <p>Your discount grows with the amount of your order.</p>
                <ul className="mt-3">
                    <li>Discount 50$ in order over 400$</li>
                    <li>Discount 50$ in order over 400$</li>
                    <li>Discount 50$ in order over 400$</li>
                </ul>
            </div>
        </div>
    )
}