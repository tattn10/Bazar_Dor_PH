import { CategoryRouteProps } from "@/types/bazardor";



const ProductDetail = async ({params}:  CategoryRouteProps ) => {
    const {id} = await params;
    
    return (
        <>
        product details page {id}
        </>
    )
}

export default ProductDetail;