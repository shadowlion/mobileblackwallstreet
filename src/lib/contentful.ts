import { createClient } from "contentful";
import type { Event } from "../types";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string;
const entryId = process.env.NEXT_PUBLIC_CONTENTFUL_ENTRY_ID as string;

const client = createClient({
  space: space,
  accessToken: accessToken,
});

export const fetchEntry = async (): Promise<[Event, null] | [null, Error]> => {
  try {
    const event = await client.getEntry<Event>(entryId);
    return [event as unknown as Event, null];
  } catch (error) {
    return [null, error as unknown as Error];
  }
};
