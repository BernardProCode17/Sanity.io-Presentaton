import { defineType, defineField } from 'sanity'
import { MdTextIncrease } from "react-icons/md";
export default defineType({
   name: 'sanity',
   title: 'One Page',
   type: 'document',
   icon: MdTextIncrease,
   fields: [
      defineField({
         name: 'page_title',
         title: 'Title',
         type: 'string'
      }),
      defineField({
         name: 'h1',
         title: 'H1 Title',
         type: 'string'
      }),
      defineField({
         name: 'short_text',
         title: 'Sub Title',
         type: 'text'
      }),
      defineField({
         name: 'long_text',
         title: 'Add Content',
         type: 'array',
         of: [{ type: 'block' }],
      }),
      defineField({
         name: 'number',
         title: 'Number Field',
         type: 'number',
      }),
      defineField({
         name: 'date',
         title: 'Date',
         type: 'date'
      }),
      defineField({
         name: 'file',
         title: 'File',
         type: 'file',
         fields: [
            {
               name: 'file_name',
               title: 'File Name',
               type: 'string'
            },
            {
               name: 'file_author',
               title: 'File Author',
               type: 'string'
            }
         ]
      }),
      defineField({
         name: 'image',
         title: 'Image',
         type: 'image',
         fields: [
            {
               name: 'caption',
               title: 'Caption',
               type: 'string'
            },
            {
               name: 'alt',
               title: 'Alt',
               type: 'string'
            }
         ]

      }),
      defineField({
         name: 'list',
         title: 'Array list',
         type: 'array',
         of: [{ type: 'string' }, { type: 'url' }]
      }),
      // More complex types of fields
      defineField({
         name: 'object_list',
         title: 'Object Array',
         type: 'array',
         of: [{
            type: 'object',
            fields: [
               { name: 'title', type: 'string', title: 'Title' },
               { name: 'description', type: 'string', title: 'Description' },
               { name: 'link', type: 'url', title: 'Link' },
               { name: 'number', type: 'number', title: 'Number' },
            ]
         }]
      }),
      // Presentation Demo
      // defineField([

      // ])
   ]
})