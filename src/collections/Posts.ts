
import { CollectionConfig } from 'payload/types'

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title'
  },
  fields: [
    {
      name: 'title',
      type: 'text'
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        {
          slug: 'example-block',
          fields: [
            {
              name: 'ExampleText',
              type: 'text'
            }
          ]
        }
      ]
    }
  ],
}

export default Posts
