import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function StrapiBlocks({ content }) {
  if (!content) return null;

  return <BlocksRenderer content={content} />;
}
