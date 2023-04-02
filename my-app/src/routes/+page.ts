// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import { client } from "../controller/sanity";
export const prerender = true;

export async function load() {
    const data = await client.fetch(`*[_type == "post"]`);
  
    if (data) {
      return {
        posts: data
      };
    }
    return {
      status: 500,
      body: new Error("Internal Server Error")
    };
  }
