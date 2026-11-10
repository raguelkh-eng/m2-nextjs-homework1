'use client'

import React, { useEffect, useState } from 'react'
import { ProductCardComponent, ProductResponse } from '../ProductCardComponent'

type CategoryType = {
  category: string
}

type Props = CategoryType & {
  excludeId?: number | string
}

export default function RecommandationCategories({ category, excludeId }: Props) {
  const [products, setProducts] = useState<ProductResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!category) {
      setProducts([])
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)

    async function fetchRecommandCategory() {
      try {
        const response = await fetch('/api/products/category?category=' + category)
        if (!response.ok) {
          throw new Error('Failed to fetch recommendations')
        }
        const data = await response.json()
        const productList = (Array.isArray(data) ? data : (data?.products ?? [])) as ProductResponse[]
        const filtered = productList.filter(
          (p) => p.id != null && String(p.id) !== String(excludeId),
        )
        setProducts(filtered)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchRecommandCategory()
  }, [category, excludeId])

  if (loading) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">Loading recommendations...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-8 text-center text-destructive">
        <p>{error}</p>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No recommended products found.</p>
      </div>
    )
  }

  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-6">Recommended Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((pro) => (
          <ProductCardComponent
            key={String(pro.id ?? pro.title)}
            images={pro.images}
            title={pro.title}
            description={pro.description}
            price={pro.price}
          />
        ))}
      </div>
    </section>
  )
}
