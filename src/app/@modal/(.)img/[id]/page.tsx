import { getImage } from "~/server/queries";

export default async function ImgModal({
    params: { id: photoId },
}: {
    params: { id: string };
}) {
    // photoId is provided by the path params as a string
    const idAsNumber = Number(photoId)
    if (Number.isNaN(idAsNumber)) throw new Error("invalid photo id")
    const image = await getImage(idAsNumber)
    return (
        <div>
            <img src={image.url} className="w-96" />
        </div>
    );
}
