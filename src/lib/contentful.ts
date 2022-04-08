import { createClient } from "contentful";
import { Fields } from "../types";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string;

const client = createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchEntries() {
  try {
    const entries = await client.getEntries<Fields>();
    if (entries.items) {
      return [entries.items, null];
    } else {
      throw new Error("items not found");
    }
  } catch (error) {
    return [null, error as any];
  }
}
