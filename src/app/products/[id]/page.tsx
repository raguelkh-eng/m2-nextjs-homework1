import ProductDetailDisplayComponent from "@/components/products/detail/ProductDetailDisplayComponent";
import RecommandationCategories from "@/components/products/detail/RecommandationCategories";
import { Suspense } from "react";

export const revalidate = 0

const getSingleProduct = (proId: number) =>
  fetch(`${process.env.DUMMY_BASE_URL}/products/${proId}`)
  .then((data) => data.json())
  .then((product) => product)
  .catch((error) => error)

const formatCategory = (category: string) =>
  category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

export default async function ProductDetailPage({
  params,
}:{
   params: Promise<{ id: number }>
}) {
  const {id} = await params;
  console.log(`ProductId = `, id)

  const singleProduct = await getSingleProduct(id);
  console.log(`==> single product: `, singleProduct);

  const category = singleProduct?.category ?? '';

  // Recommendation of product within category

  return (
    <section>

      <Suspense fallback={<h1>Loading...</h1>}>
         <h1>Category: {formatCategory(category)}</h1>
        <ProductDetailDisplayComponent product={singleProduct}/>

        {/* Recommandation of product within category  */}
        <RecommandationCategories category={category} excludeId={id} />

      </Suspense>

    </section>

    // <ProductDetailUseSWRComponent proId={id}/>
  )
}
