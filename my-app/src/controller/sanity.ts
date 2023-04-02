import {createClient} from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: "yckey4u3",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
    token: 'skxPgWyAwP457vC8QbDMBchfJDX5ecrK1PUeaEyJ4cCD47WxUD7yAPHMhOrWzJXsVxbovNFVb21WjSi4xgAQQKRG9yWH1TwEw7sTYJ5F1u8uoWDt7zn99Q3H8Uli9Uwrl6BrAUMU4lBm2fyhPOw7O2uwfmboeYPfu3ksMx3feqVgfqexYicd'
});


const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
    return builder.image(source)
}