import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (record, { desc }) => desc(record.id),
  })
  return (
    <main className="">
      <SignedOut>
        <div className="w-full text-2xl text-center h-full">
          Sign in to view images
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-wrap gap-4">
          {images.map((image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} />
              {image.name}
            </div>
          ))}
        </div>
      </SignedIn>
    </main>
  );
}
