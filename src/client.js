import SanityClient  from "@sanity/client";
import ImageUrlBuilder  from "@sanity/image-url";

export const client = SanityClient({
    projectId: 'rocat49a',
    dataset:'production',
    apiVersion:'2022-12-14',
    useCdn: false,
    ignoreBrowserTokenWarning: true,
    token:  "skrPJ1w3MkxFpCIdsn2fjCj4pomHe0Wk6arPSMixc0813mgn2XZ33ErSSNHdgXVolg027sn0s60vgQFtGnUcr9wvblKrgbAEOlwKu7IZUfW5ik5iNERiUSUbWMr1JHrIfNh2VgV0ERGFDIK7b5vTRYLmntWccf5L0eflK80EQQlV4OyGLIvV"
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);