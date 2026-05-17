// GROQ Queries for Sanity

export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  author,
  publishedAt,
  categories
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  author,
  publishedAt,
  categories,
  body
}`;

export const recentPostsQuery = `*[_type == "post"] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  author,
  publishedAt
}`;

export const postsByCategoryQuery = `*[_type == "post" && $category in categories] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  coverImage,
  author,
  publishedAt,
  categories
}`;
