"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, Search, Share2, Printer, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import { useState, useEffect, use } from "react"
import { motion } from "framer-motion"
import products from "@/app/data/ProductData"

// Skeleton Components
const Skeleton = ({ className }) => (
    <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
)

const SkeletonImage = ({ className }) => (
    <div className={`relative animate-pulse bg-gray-200 ${className}`}>
        <div className="absolute inset-0 bg-gray-300" />
    </div>
)

export default function ProductPage({ params }) {
    const { slug } = use(params)
    const [product, setProduct] = useState(null)
    const [selectedImage, setSelectedImage] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        console.log("Slug from URL:", slug)
        console.log("All slugs in products:", products.map(p => p.slug))

        const foundProduct = products.find((p) => p.slug === slug)
        console.log("Found product:", foundProduct)

        setProduct(foundProduct)
        setIsLoading(false)
    }, [slug])

    if (!product && !isLoading) {
        return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Product not found</div>
    }

    return (
        <>
            <Header />
            <div className="min-h-screen mt-[120px] bg-gradient-to-b from-gray-50 to-white">
                {/* Breadcrumb */}
                <div className="container mx-auto px-4 py-4 text-sm">
                    <nav className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                        <Link href="/" className="hover:text-blue-600 transition-colors">
                            Home
                        </Link>
                        <span>/</span>
                        <Link href="/fashion" className="hover:text-blue-600 transition-colors">
                            Fashion
                        </Link>
                        <span>/</span>
                        <span className="truncate font-medium text-gray-800">
                            {isLoading ? <Skeleton className="w-40 h-4" /> : product.name}
                        </span>
                    </nav>
                </div>

                {/* Main Product Section */}
                <main className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_700px] gap-12">
                        {/* Image Gallery */}
                        <div className="space-y-6">
                            <motion.div 
                                className="relative aspect-square rounded-xl overflow-hidden shadow-xl group"
                            >
                                {isLoading ? (
                                    <SkeletonImage className="aspect-square" />
                                ) : (
                                    <>
                                        <Image
                                            src={product.images[selectedImage] || "/placeholder.svg"}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                        <button className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110">
                                            <ZoomIn className="w-5 h-5 text-gray-800" />
                                        </button>
                                    </>
                                )}
                            </motion.div>
                            <div className="grid grid-cols-4 gap-4">
                                {isLoading
                                    ? Array.from({ length: 4 }).map((_, i) => (
                                          <SkeletonImage key={i} className="aspect-square rounded-lg" />
                                      ))
                                    : product.images.map((image, i) => (
                                          <motion.div 
                                              key={i} 
                                              className={`relative aspect-square rounded-lg overflow-hidden border-2 cursor-pointer
                                                  ${selectedImage === i ? 'border-blue-600 shadow-lg' : 'border-gray-200 hover:border-blue-400'}`}
                                              whileHover={{ scale: 1.05 }}
                                              whileTap={{ scale: 0.95 }}
                                              onClick={() => setSelectedImage(i)}
                                          >
                                              <Image
                                                  src={image || "/placeholder.svg"}
                                                  alt={`${product.name} view ${i + 1}`}
                                                  fill
                                                  className="object-cover transition-transform duration-300"
                                              />
                                          </motion.div>
                                      ))}
                            </div>
                            <div className="flex justify-center gap-6">
                                {isLoading ? (
                                    <Skeleton className="w-10 h-10 rounded-full" />
                                ) : (
                                    <motion.button 
                                        className="p-3 hover:text-blue-600 transition-all duration-300 rounded-full hover:bg-blue-50"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Share2 className="w-5 h-5" />
                                    </motion.button>
                                )}
                                {isLoading ? (
                                    <Skeleton className="w-10 h-10 rounded-full" />
                                ) : (
                                    <motion.button 
                                        className="p-3 hover:text-blue-600 transition-all duration-300 rounded-full hover:bg-blue-50"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Printer className="w-5 h-5" />
                                    </motion.button>
                                )}
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="space-y-8">
                            <div className="flex justify-between items-start">
                                {isLoading ? (
                                    <Skeleton className="w-64 h-8" />
                                ) : (
                                    <motion.h1 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-4xl font-bold text-gray-900"
                                    >
                                        {product.name}
                                    </motion.h1>
                                )}
                                {isLoading ? (
                                    <Skeleton className="w-10 h-10 rounded-full" />
                                ) : (
                                    <motion.button 
                                        className="p-3 hover:text-red-500 transition-all duration-300 rounded-full hover:bg-red-50"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Heart className="w-6 h-6" />
                                    </motion.button>
                                )}
                            </div>

                            {isLoading ? (
                                <Skeleton className="w-full h-20" />
                            ) : (
                                <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
                            )}

                            <div className="space-y-2 bg-gray-50 p-6 rounded-xl">
                                {isLoading ? (
                                    <Skeleton className="w-24 h-4" />
                                ) : (
                                    <p className="text-sm text-gray-500">Estimate Price</p>
                                )}
                                {isLoading ? (
                                    <Skeleton className="w-48 h-8" />
                                ) : (
                                    <p className="text-3xl font-bold text-gray-900">
                                        ${product.price.min.toLocaleString()} - ${product.price.max.toLocaleString()}
                                    </p>
                                )}
                            </div>

                            {isLoading ? (
                                <Skeleton className="w-full h-16 rounded-xl" />
                            ) : (
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 text-lg py-6 rounded-xl shadow-lg hover:shadow-xl">
                                        Make an Offer
                                    </Button>
                                </motion.div>
                            )}

                            <div className="space-y-6 bg-gray-50 p-6 rounded-xl">
                                <div>
                                    {isLoading ? (
                                        <Skeleton className="w-32 h-6" />
                                    ) : (
                                        <h3 className="font-semibold text-xl text-gray-800 mb-2">Shipping Details</h3>
                                    )}
                                    {isLoading ? (
                                        <Skeleton className="w-48 h-4" />
                                    ) : (
                                        <p className="text-gray-600">Item located in : {product.location}</p>
                                    )}
                                </div>

                                <div>
                                    {isLoading ? (
                                        <Skeleton className="w-24 h-6" />
                                    ) : (
                                        <h3 className="font-semibold text-xl text-gray-800 mb-2">Payment</h3>
                                    )}
                                    {isLoading ? (
                                        <Skeleton className="w-32 h-4" />
                                    ) : (
                                        <Link href="#" className="text-blue-600 hover:text-blue-700 hover:underline transition-colors">
                                            View Policy for Payment
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    {product && (
                        <section className="mt-16">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {products
                                    .filter((p) => p.slug !== product.slug)
                                    .slice(0, 4)
                                    .map((relatedProduct) => (
                                        <div key={relatedProduct.slug} className="group relative">
                                            <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                                                <Image
                                                    src={relatedProduct.images[0] || "/placeholder.svg"}
                                                    alt={relatedProduct.name}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors">
                                                    <Heart className="w-4 h-4 text-gray-800" />
                                                </button>
                                            </div>
                                            <div className="mt-4 space-y-2">
                                                <h3 className="font-medium text-gray-900 line-clamp-2">{relatedProduct.name}</h3>
                                                <p className="text-sm text-gray-600">
                                                    Est. ${relatedProduct.price.min.toLocaleString()} - ${relatedProduct.price.max.toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </section>
                    )}
                </main>
            </div>
            <Footer />
        </>
    )
}