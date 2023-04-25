import Layout from '@/components/layout'
import ProductItem from '@/components/productItem'
import data from '@/utils/data'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title="Shelby">
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>{data.products.map((product) => (
        <ProductItem product={product} key={product.slug}></ProductItem>
      ))}</div>
    </Layout>
  )
}
