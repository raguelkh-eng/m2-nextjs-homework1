'use client'

import { ProductResponse } from "../ProductCardComponent"
import { ProductCardDetailComponent } from "./ProductDetailComponent";

export default function ProductDetailDisplayComponent({
  product
}: {
  product: ProductResponse
}) {
  const { images, title, description, price } = product;
  // console.log("Images ", images)
  return (
    <ProductCardDetailComponent
      num={2}
      images={images}
      title={title}
      description={description}
      price={price} />
  )
}
