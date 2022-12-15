import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({data}) {

  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav />

      {/* Results */}
      <Results results={data.results}/>
    </div>
  )
}

export async function getServerSideProps(context) {

  let genre = context.query.genre;
  let movies;

  try {
    let request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
    .then(res => res.json())
    .then(data => movies = data)
  } catch(error) {
    console.log(error);
  }
    

  return {
    props: {
      data: movies,
    }
  }
}