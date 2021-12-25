import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Gio Cloud Tech</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Bem vindo ao Gio Cloud Tech!
        </h1>

        <p className="description">
          TI na Nuvem | Cloud Computing 
        </p>

        <div className="grid">
          <a href="/blog" className="card">
            <h3>Blog &rarr;</h3>
            <p>Tutoriais, dicas, resumos, checklists e muito mais!</p>
          </a>

          <a href="/links" className="card">
            <h3>Links &rarr;</h3>
            <p>Me encontre nas redes sociais Instagram . Youtube . LinkedIn</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feito por Gio Cloud Tech
        </a>
      </footer>


    </div>
  )
}