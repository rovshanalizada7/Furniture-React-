import React from 'react'
import axios from 'axios'



const Detail = () => {

  const {id} = useParams();
  const [product,setProduct] = useSate();
  const navigate = useNavigate();

  const getApi = async () => {
    await axios.get('https://fakestoreapi.com/products')
    .then ( async (res) => {
      await setProduct(res.data.find((item) => item.id === id))
    })
  }

  useEffect(() => {
   getApi()
  },[])

  return (
    <div>Detail</div>
  )
}

export default Detail