"use client"

import { useEffect, useState } from "react";

export default function FETCHPOSTPAGE (){
    const [posts, setPosts] = useState([])
    const [error, setError] = useState ("")
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
    fetch("/api/external")
.then((res)=>res.json())
.then((data)=>{
    if(data.success){
        setPosts(data.data)
    } else{
        setError(data.message)
    }
})
.catch(() => setError("An expected error"))
.finally(()=>setLoading(false))
},[])

if (loading) return <p className="text-center text-gray-600">Loading...</p>;
if (error) return <p className="text-center text-red-600">Error: {error}</p>;

return (
        <div className="max-w-4xl mx-auto px-4 py-8">
    
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
            {posts.map((posts:{id: number,title:string,body:string })=> (

             <div key={posts.id}className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold text-blue-600 mb-2">{posts.title}</h2>
                <p className="text-gray-700">{posts.body}</p>
                </div>
                
        ))}
        </div>
    </div>
);
}



