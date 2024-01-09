import Link from "next/link";

const ProductCard = () => {
    return (
        <Link id="card" legacyBehavior href="/product-name">
            <a className="group block">
                <div className="relative h-[350px] sm:h-[450px] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover hover:scale-125 transition-all duration-500"
                    />
                </div>

                <div className="mt-3 flex justify-between text-sm">
                    <div>
                        <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                            Small Headphones
                        </h3>

                        <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis, quia soluta quisquam
                            voluptatem nemo.
                        </p>
                    </div>

                    <p className="text-gray-900">$299</p>
                </div>
            </a>
        </Link>
    )
}

export default ProductCard;