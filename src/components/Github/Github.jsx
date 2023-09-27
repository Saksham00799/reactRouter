import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Github() {
    const [data,setData] = useState([]);
    const {userid} = useParams();
    useEffect(() => {
        fetch(`https://api.github.com/users/${userid ? userid : 'saksham00799'}`)
        .then(res => res.json())
        .then(data=>{setData(data)})
    })
    return (
    <div className='text-center  m-4 bg-gray-600 text-white p4 text-3xl'>
        Github followers : {data.followers}
        <img src={data.avatar_url}  alt="" /></div>
  )
}

export default Github

// ${userid ? userid : saksham00799}