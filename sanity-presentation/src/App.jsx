import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import client from '../src/sanity'
import imageUrlBuilder from '@sanity/image-url'

const urlBuilder = imageUrlBuilder(client)
const imageRef = (image) => urlBuilder.image(image).url() //Make the URL reusable as a function

function App() {

  const [Info, setInfo] = useState([])
  useEffect(() => {
    const sanityFetch = async () => {

      const infoQuery = `*[_type == 'sanity']
      {
        page_title,
        h1,
        short_text,
        'long_text': long_text[0].children[0].text,
        number,
        date,
        'file': file.asset._ref,
        'file_name': file.file_name,
        'file_author': file.file_author,
        'image': image.asset._ref,
        'image_alt': image.alt,
        'image_caption': image.caption,
        list,
        'object_list': object_list[0]
      }`
      try {
        const data = await client.fetch(infoQuery);
        setInfo(data);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    sanityFetch();
  }, [])

  return (
    <>
      <header className='header'>
        <img src={viteLogo} alt="vite logo" />
        <h1>{Info[0]?.h1}</h1>
      </header>

      <main className='main'>

        {/* Basic types */}
        <section className="basic">
          <h2>Basic Field Types</h2>
          <p>{Info[0]?.short_text}</p>
          <p>{Info[0]?.long_text}</p>

          <div>
            <p>Number: {Info[0]?.number}</p>
            <p>{Info[0]?.date}</p>
          </div>

        </section>

        {/* file type */}
        <section className='file'>

          <h2>File Type</h2>
          <p>{Info[0]?.file_name}</p>

          <a href={Info[0]?.file} download={Info[0]?.file} target='_blank'>TTC_Street_Car.PDF</a>

          <p>{Info[0]?.file_author}</p>
        </section>

        {/* Image Type */}
        <section className='image'>
          <h2>Image Type</h2>
          <img src={Info && Info[0] && Info[0].image && imageRef(Info[0]?.image)} alt={Info[0]?.alt} />
          <p>{Info[0]?.image_caption}</p>
        </section>
        {/* {console.log(Info[0].list)} */}
        {/* Array */}
        <section className='array'>
          <h2>Array Type</h2>
          <p>{Info[0]?.list[0]}</p>
          <a href={Info[0]?.list[1]}>{Info[0]?.list[1]}</a>
          <p>Tel. {Info[0]?.list[2]}</p>
        </section>

        {/* Object */}
        <section className='object'>

          <h2>Object Type</h2>

          <h3>{Info[0]?.object_list.title}</h3>

          <p>{Info[0]?.object_list.description}</p>

          <a href={Info[0]?.object_list.link}> {Info[0]?.object_list.title}</a>

          <span>Number: {Info[0]?.object_list.number}</span>
        </section>


        {/* demo */}
        {/* <section>
          <p>{Info[0]?.}</p>
        </section> */}

      </main>

      <footer className='footer'>
        <p>Sanity.io Presentation</p>
        <p>Team 5 Co.</p>
        <p>&#169;2024</p>
      </footer>
    </>
  )
}

export default App
