import { useRouter } from "next/router";
import Image from "next/image";

export default {
  logo: (
    <span>
      <Image
        width="36"
        height="36"
        style={{
          display: "inline-block",
          borderRadius: "50%",
          overflow: "hidden",
        }}
        src="/img/avatar.jpg"
        alt="Benjie"
      />{" "}
      benjie.dev
    </span>
  ),
  project: {
    link: "https://github.com/benjie/benjie.dev",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – benjie.dev",
      };
    }
  },
  head: (
    <>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Benjie on GraphQL" />
      <meta
        property="og:description"
        content="A guide to various best practices in GraphQL from Benjie, a GraphQL TSC member"
      />
    </>
  ),
};
