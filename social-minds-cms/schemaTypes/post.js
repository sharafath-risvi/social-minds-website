import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    {name: 'basic', title: 'Basic Information', default: true},
    {name: 'media', title: 'Media'},
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    // ==========================================
    // BASIC INFORMATION
    // ==========================================
    defineField({
      name: 'title',
      title: 'Blog Title',
      type: 'string',
      group: 'basic',
      description: 'The main title of the blog post. This will be displayed on the blog card and article page.',
      validation: (Rule) => Rule.required().error('A blog title is required.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'basic',
      description: 'The URL identifier for this post (auto-generated from Blog Title).',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('A unique URL slug is required.'),
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Description / Excerpt',
      type: 'text',
      group: 'basic',
      rows: 3,
      description: 'Used on blog cards.',
      validation: (Rule) => Rule.required().max(300).error('A short description / excerpt is required (max 300 characters).'),
    }),
    defineField({
      name: 'instagramReelUrl',
      title: 'Instagram Reel URL',
      type: 'url',
      group: 'basic',
      description: 'Paste the Instagram Reel URL here.\nExample: https://www.instagram.com/reel/xxxxxxxx/',
    }),

    // ==========================================
    // MEDIA
    // ==========================================
    defineField({
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      group: 'media',
      description: 'The primary visual for the blog post, used on blog cards.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility. Describe what is seen in the image.',
        }),
      ],
      validation: (Rule) => Rule.required().error('A featured image is required.'),
    }),

    // ==========================================
    // CONTENT
    // ==========================================
    defineField({
      name: 'body',
      title: 'Blog Content / Body',
      type: 'blockContent',
      group: 'content',
      description: 'The main article content written in rich Portable Text.',
      validation: (Rule) => Rule.required().error('Blog content is required.'),
    }),

    // ==========================================
    // SEO
    // ==========================================
    defineField({
      name: 'seoTitle',
      title: 'SEO Meta Title',
      type: 'string',
      group: 'seo',
      description: 'Custom title for search engines (defaults to Blog Title if left blank). Ideal length is 50–60 characters.',
      validation: (Rule) => Rule.max(60).warning('Should be under 60 characters to prevent truncation in search results.'),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Meta Description',
      type: 'text',
      group: 'seo',
      rows: 3,
      description: 'Summary displayed in search engine results. Ideal length is 150–160 characters.',
      validation: (Rule) => Rule.max(160).warning('Should be under 160 characters to prevent truncation in Google search results.'),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      excerpt: 'excerpt',
      media: 'mainImage',
      reelUrl: 'instagramReelUrl',
    },
    prepare(selection) {
      const {excerpt, reelUrl} = selection
      return {
        ...selection,
        subtitle: reelUrl ? `🎥 Reel: ${reelUrl}` : excerpt || 'No description',
      }
    },
  },
})
