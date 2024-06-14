import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries"
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function SignedInHomepage() {
  const images = await getMyImages();
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {images.map((image) => (
        <div key={image.id} className="w-48 h-48">
          <Link href={`/img/${image.id}`}>
            <Image src={image.url} alt={image.name} style={{ objectFit: 'contain' }} width={192} height={192} />
            {image.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default async function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className="w-full text-2xl text-center h-full">
          Sign in to view images
        </div>
      </SignedOut>
      <SignedIn>
        <SignedInHomepage />
      </SignedIn>
    </main>
  );
}
