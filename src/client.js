import client from "@sanity/client";

export default client({
  projectId: "s71scqva",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-05-14",
});
