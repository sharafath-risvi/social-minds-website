import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  groups: [
    {name: 'basic', title: 'Basic Information', default: true},
    {name: 'media', title: 'Media'},
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO'},
    {name: 'options', title: 'Blog Options'},
    {name: 'social', title: 'Social Sharing'},
    {name: 'extra', title: 'Extra Information'},
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
      description: 'The URL identifier for this post (auto-generated from title).',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('A unique URL slug is required.'),
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Excerpt / Summary',
      type: 'text',
      group: 'basic',
      rows: 3,
      description: 'A 2–3 line summary of the post used for blog cards, social previews, and SEO.',
      validation: (Rule) => Rule.max(300).warning('Keep excerpts under 300 characters for optimal card display and SEO.'),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      group: 'basic',
      to: {type: 'author'},
      description: 'Select the author credited for writing this blog post.',
      validation: (Rule) => Rule.required().error('An author must be selected.'),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      group: 'basic',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
      description: 'Assign one or more categories to classify this post (the first category will be treated as primary).',
      validation: (Rule) => Rule.required().min(1).error('At least one category is required.'),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'basic',
      of: [defineArrayMember({type: 'string'})],
      options: {
        layout: 'tags',
      },
      description: 'Allow multiple keywords or tags to further organize and filter this blog post.',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      group: 'basic',
      description: 'The date and time when this article is considered published.',
      validation: (Rule) => Rule.required().error('A published date is required.'),
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time',
      type: 'string',
      group: 'basic',
      description: 'Formatted reading time displayed on cards and details page (Example: "5 min read").',
      validation: (Rule) => Rule.max(30),
    }),

    // ==========================================
    // MEDIA
    // ==========================================
    defineField({
      name: 'mainImage',
      title: 'Featured Image',
      type: 'image',
      group: 'media',
      description: 'The primary visual for the blog post, used on cards and at the top of the article.',
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
      validation: (Rule) => Rule.required().error('A featured image is required for blog cards and previews.'),
    }),
    defineField({
      name: 'featuredVideo',
      title: 'Featured Video (Optional)',
      type: 'object',
      group: 'media',
      description: 'Optional video content for the post. Allow video upload OR video URL.',
      fields: [
        defineField({
          name: 'videoUrl',
          title: 'Video URL',
          type: 'url',
          description: 'YouTube, Vimeo, or external video link.',
        }),
        defineField({
          name: 'videoFile',
          title: 'Video Upload',
          type: 'file',
          options: {
            accept: 'video/*',
          },
          description: 'Upload a local video file (MP4, WebM, etc.).',
        }),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery (Optional)',
      type: 'array',
      group: 'media',
      description: 'Multiple supplementary images related to this blog post.',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption',
            }),
          ],
        }),
      ],
    }),

    // ==========================================
    // CONTENT
    // ==========================================
    defineField({
      name: 'body',
      title: 'Blog Body',
      type: 'blockContent',
      group: 'content',
      description: 'The main article content written in rich Portable Text. Supports headings, paragraphs, lists, quotes, code blocks, images, tables, and embedded videos.',
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
    defineField({
      name: 'seoKeywords',
      title: 'SEO Keywords',
      type: 'array',
      group: 'seo',
      of: [defineArrayMember({type: 'string'})],
      options: {
        layout: 'tags',
      },
      description: 'Target keywords and search queries for SEO ranking and metadata.',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      group: 'seo',
      description: 'Custom social preview image for Facebook, LinkedIn, Twitter, etc. Defaults to Featured Image if left empty. Recommended size: 1200x630px.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }),
      ],
    }),

    // ==========================================
    // BLOG OPTIONS
    // ==========================================
    defineField({
      name: 'featured',
      title: 'Featured Blog',
      type: 'boolean',
      group: 'options',
      initialValue: false,
      description: 'Turn on to highlight this post as a featured article on the blog homepage.',
    }),
    defineField({
      name: 'status',
      title: 'Draft / Published Status',
      type: 'string',
      group: 'options',
      description: 'Editorial workflow status for this blog post.',
      options: {
        list: [
          {title: 'Draft', value: 'draft'},
          {title: 'In Review', value: 'review'},
          {title: 'Published', value: 'published'},
          {title: 'Archived', value: 'archived'},
        ],
        layout: 'radio',
      },
      initialValue: 'published',
    }),
    defineField({
      name: 'allowComments',
      title: 'Allow Comments',
      type: 'boolean',
      group: 'options',
      initialValue: true,
      description: 'Enable or disable reader comments and discussion on this blog post.',
    }),
    defineField({
      name: 'estimatedReadTime',
      title: 'Estimated Read Time (Minutes)',
      type: 'number',
      group: 'options',
      description: 'Numeric estimated reading time in minutes (e.g., 5). Useful for sorting, filtering, and API calculations.',
      validation: (Rule) => Rule.min(1).max(120),
    }),

    // ==========================================
    // SOCIAL SHARING
    // ==========================================
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL (Optional)',
      type: 'url',
      group: 'social',
      description: 'Optional original URL if this post was syndicated or republished from another source.',
    }),
    defineField({
      name: 'socialTitle',
      title: 'Social Share Title (Optional)',
      type: 'string',
      group: 'social',
      description: 'Optional title specifically tailored for social media sharing (Facebook, LinkedIn, Twitter/X).',
      validation: (Rule) => Rule.max(70).warning('Keep under 70 characters for best display on social platforms.'),
    }),
    defineField({
      name: 'socialDescription',
      title: 'Social Share Description (Optional)',
      type: 'text',
      group: 'social',
      rows: 3,
      description: 'Optional description tailored for social sharing cards.',
      validation: (Rule) => Rule.max(200).warning('Keep under 200 characters for optimal social previews.'),
    }),

    // ==========================================
    // EXTRA INFORMATION
    // ==========================================
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated Date',
      type: 'datetime',
      group: 'extra',
      description: 'The timestamp when this article was last revised or updated.',
    }),
    defineField({
      name: 'internalNotes',
      title: 'Internal Notes',
      type: 'text',
      group: 'extra',
      rows: 4,
      description: 'Private editorial notes, instructions, or TODOs. Visible only inside the CMS and never exposed to website visitors.',
    }),
    defineField({
      name: 'relatedPosts',
      title: 'Related Blogs',
      type: 'array',
      group: 'extra',
      description: 'Select 2–4 related blog posts to display at the bottom of the article for further reading.',
      of: [defineArrayMember({type: 'reference', to: {type: 'post'}})],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      status: 'status',
    },
    prepare(selection) {
      const {author, status} = selection
      const statusText = status ? ` [${status.toUpperCase()}]` : ''
      return {
        ...selection,
        subtitle: author ? `by ${author}${statusText}` : `No author${statusText}`,
      }
    },
  },
})
