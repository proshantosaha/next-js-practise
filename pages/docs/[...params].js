import {useRouter} from 'next/router'

export default function Doc() {
    const router = useRouter()
  const param = router.query
    console.log(param);
  return (
    <div>
        <h2>docs home page</h2>
        </div>
  )
}
