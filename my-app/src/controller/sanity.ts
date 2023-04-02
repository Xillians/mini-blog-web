import {createClient} from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: "yckey4u3",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
});


const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
    return builder.image(source)
}