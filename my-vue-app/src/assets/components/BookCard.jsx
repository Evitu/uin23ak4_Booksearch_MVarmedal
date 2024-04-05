import { useEffect, useState } from "react"

export default function BookCard({query, setQuery}){
const [content, setContent] = useState([])
  

  const getBook = async() =>{
    try{
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`)
      const data = await response.json()
      setContent(data)
      console.log(data.docs[0].title)
    }catch{
     
    }
  }
  
    useEffect(()=>{
        getBook()
    },[query])
    return(
        <>
      <main>
        {content.docs?.map(item => (
            <div>
                
                <div>
                    <h2>{item.title}</h2>
                    <h3>By {item.author_name}</h3>
                    <p>Published {item.first_publish_year}</p>
                    <p>{item.ratings_average} of 5 stars</p>
                    <a href={`https://www.amazon.com/s?k=${item.id_amazon}`}>Buy this book!</a>
                </div>
                <img src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`} alt={item.title} />
            </div>
    /* mange flere bøker enn jeg trodde*/
        ))}
    </main>
        
        </>
    )
        
}