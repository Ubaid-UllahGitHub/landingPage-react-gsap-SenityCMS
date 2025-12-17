import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
    projectId: "2gsg4fgz",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});

const builder = createImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
