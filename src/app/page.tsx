import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  'https://utfs.io/f/2e6ecdc3-44d7-4503-852d-72eca42ae881-l6jqi8.png',
  'https://utfs.io/f/9d645c28-c3df-4a54-8d09-06fe3c6bdfbb-l6jqgl.png',
  'https://utfs.io/f/c69e4491-da14-4917-abf7-a8e7e1e16523-l6kdeb.png',
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {
  const posts = db.query.posts.findMany()
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {(await posts).map((post) => post.name)}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
