import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
        name: 'clientName',
        title: 'Client Name',
        type: 'string',
    }),
    defineField({
      name: 'projectSummary',
      title: 'Project Summary',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
        name: 'results',
        title: 'Results',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                {name: 'metric', type: 'string', title: 'Metric'},
                {name: 'value', type: 'string', title: 'Value'},
                {name: 'description', type: 'text', title: 'Description'}
            ]
        }]
    }),
    defineField({
        name: 'relatedService',
        title: 'Related Service',
        type: 'reference',
        to: [{type: 'service'}]
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'clientName',
      media: 'mainImage',
    },
  },
})
