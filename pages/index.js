import { data } from '../static/data'
import Layout from "../components/Layout";
import Stories from '../components/stories/Stories';
import HomeRightBar from '../components/HomeRightBar';
import FeedItem from '../components/feed/Item';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import EditPostModal from '../components/modals/EditPostModal';
import CreatePostModal from '../components/modals/CreatePostModal';

const style = {
  container: `homepage-feed lg:mr-8 flex flex-col`,
}

export default function Home() {
  // States to grab the post and open modals
  const [editPostModalOpen, setEditPostModalOpen] = useState(false)
  const [createPostModalOpen, setCreatePostModalOpen] = useState(false)
  const [currentEditPostID, setCurrentEditPostID] = useState(null)

  // Function to target which post is being edited
  const toggleEditPostModal = (value, postId, owner) => {
    setCurrentEditPostID(postId)


    setEditPostModalOpen(value)
  }

  //Static Data
  const wallet = "111111111111111111"

  const staticPosts = [
    {
      owner: 11111111111,
      id: 0,
      likes: 0,
      title: "A picture of Thapar",
      image: "/gettyimages-1288678545-1024x1024.jpg"
    },
    {
      owner: "Ac1nbnsdj1",
      id: 1,
      likes: 0,
      title: "Another picture of Thapar!",
      image: "/gettyimages-1288678566-1024x1024.jpg"
    },
    {
      owner: "rafeh.qazi",
      id: 2,
      likes: 0,
      title: "Yep, another one!",
      image: "/gettyimages-1288712765-1024x1024.jpg"
    },
  ]

  const staticCreatePost = () => {
    console.log(`Creating Post!!`)
  }




  return (
    <Layout
      setCreatePostModalOpen={setCreatePostModalOpen}
    >
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className={style.container}>
        <Stories stories={data.stories} />

        <>
          {/* Render posts */}
          {staticPosts
            ? staticPosts.map((post, i) => (
              <FeedItem
                data={post}
                key={i}
                walletKey={wallet?.publicKey}
                setEditPostModalOpen={setEditPostModalOpen}
                toggleEditPostModal={toggleEditPostModal}

              />
            ))
            : "Loading..."}
        </>
        <CreatePostModal createPost={staticCreatePost} createPostModalOpen={createPostModalOpen} setCreatePostModalOpen={setCreatePostModalOpen} />
        <EditPostModal editPostModalOpen={editPostModalOpen} setEditPostModalOpen={setEditPostModalOpen} currentEditPostID={currentEditPostID} />
      </div>
      <HomeRightBar data={data.suggestions} />
    </Layout>
  );
}
