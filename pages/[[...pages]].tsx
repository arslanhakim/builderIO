import React from "react";
import { useRouter } from "next/router";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";
import { TextImage } from "../components/TextImage";

// Replace with your Public API Key
builder.init("8879e5a8d4304915875e7f28bd2b0465");

Builder.registerComponent(
  dynamic(() => import("../components/TextComp")),
  {
    name: "TextAndImage",
    inputs: [
      { name: "topHeading", type: "text" },
      { name: "heading", type: "text" },
      { name: "description", type: "text" },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("../components/MealComponent")),
  {
    name: "MealComponent",
    inputs: [
      { name: "type", type: "text" },
      { name: "title", type: "text" },
      { name: "calories", type: "text" },
      { name: "score", type: "text" },
      { name: "ratings", type: "text" },
      { name: "img", type: "text" },
    ],
  }
);
Builder.registerComponent(
  dynamic(() => import("../components/list")),
  {
    name: "List",
    inputs: [{ name: "text", type: "text" }],
  }
);
Builder.registerComponent(
  dynamic(() => import("../components/socialMedia")),
  {
    name: "socialMediaLinks",
  }
);

export async function getStaticProps({ params }: any) {
  // Fetch the builder content
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (params?.page?.join("/") || ""),
      },
    })
    .toPromise();

  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  // Get a list of all pages in builder
  const pages = await builder.getAll("page", {
    // We only need the URL field
    fields: "data.url",
    options: { noTargeting: true },
  });

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  };
}

export default function Page({ page }: any) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>{page?.data.title}</title>
      </Head>
      <TextImage />
      {/* Render the Builder page */}
      <BuilderComponent model="page" content={page} />
    </>
  );
}
