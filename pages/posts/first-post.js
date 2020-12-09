import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

const Post = () => {
  return (
    <Layout>
    <Head>
      <title>First Post - Next.js Blog</title>
    </Head>

    <h1>First Post</h1>

    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita doloremque molestiae consequuntur nisi temporibus mollitia modi laboriosam veniam necessitatibus porro reiciendis et, perspiciatis odit ducimus minima iusto nostrum, vel eaque suscipit eum rerum aperiam consectetur. Culpa consequuntur reiciendis expedita neque illum, doloribus incidunt? Excepturi dolorum facilis natus corrupti qui iste?</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eligendi quisquam aspernatur, eveniet adipisci inventore harum consequatur nobis ipsum nemo animi culpa blanditiis dolorem consequuntur commodi odit? Voluptas, aliquid eaque.</p>
    <p>Recusandae facilis laudantium, soluta doloribus pariatur quis error voluptatibus magnam, vel assumenda cupiditate hic numquam reiciendis sit distinctio voluptate labore voluptates dolorem optio? Provident rem impedit repellat ut eveniet ab.</p>
    <p>Ut, nihil dignissimos doloribus atque quia doloremque hic vero nemo? Ipsam maxime dolore, ut quod sunt mollitia totam rem minus veniam harum pariatur quasi libero esse quos corrupti inventore unde?</p>

  </Layout>
  );
}

export default Post;