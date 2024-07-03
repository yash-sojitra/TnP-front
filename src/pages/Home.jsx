import { useEffect, useState } from "react"


const Home = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1:8000")
    const data = await response.json()
    console.log(data)
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
        <h1>Home</h1>
        <div>
            {data.announcements && data.announcements.map((announcement, index) => (
                <div key={index}>
                    <h2>{announcement.title}</h2>
                    <p>{announcement.content}</p>
                    <p>{announcement.attachmentLink}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Home
