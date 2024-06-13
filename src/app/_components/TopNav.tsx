import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function TopNav() {
    return (
        <nav className="flex w-full items-center justify-between bg-purple-500 p-4 text-xl font-semibold border-b-4">
            <div>Gallery</div>
            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}
