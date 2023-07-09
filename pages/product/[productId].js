import {useRouter} from 'next/router'

export default function productDetail() {

  const router = useRouter()
 const productId= router.query.productId
  return (
    <div>productId details {productId }</div>
  )
}
