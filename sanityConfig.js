import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: '2023-10-04', // use current date (YYYY-MM-DD) to target the latest API version
  })

const builder = imageUrlBuilder(client)

function urlFor(source) {
    return builder.image(source);
  }

export async function getData(section){
    const data = await client.fetch(section)
    return data
}
export function urlToImage(data){
    for (let i = 0; i < data.length; i++) {
      if (data[i].image)
        data[i].image = urlFor(data[i].image).url()
      if (data[i].poster)
        data[i].poster = urlFor(data[i].poster).url()
    }
    return data
}