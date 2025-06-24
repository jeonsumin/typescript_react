import { usePostList } from 'widgets/post-list/model/usePostList'

export const PostList = () => {
  const { post, isLoading } = usePostList()

  if (isLoading) return <div>LOGING...</div>

  return (
    <div>
      {post?.map((item, index) => (
        <>
          <ul>
            <li>{item.title}</li>
          </ul>
        </>
      ))}
    </div>
  )
}
