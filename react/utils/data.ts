// This file is a mock.
import short from 'short-uuid'

import { slugify } from './slugify'

const names = [
  'Pratical',
  'Steel',
  'Pizza',
  'Unbranded',
  'Soft',
  'Chicken',
  'Ergonomic',
  'Plastic',
  'Plants',
  'Generic',
  'Soap',
  'Small',
  'Bacon',
  'Rubber',
  'Hat',
  'Gorgeous',
  'Cheese',
  'Bike',
  'Fresh',
]

export const items: Item[] = Array.from(new Array(15)).map((_, index) => {
  const name = Array.from(new Array(3))
    .map(() => names[Math.floor(Math.random() * names.length)])
    .join(' ')
  const imageUrl = `https://avatars.dicebear.com/v2/jdenticon/${short.generate()}.svg`
  return {
    id: `${index}`,
    name,
    imageUrl,
    slug: slugify(name),
  }
})

export interface Item {
  id: string
  name: string
  imageUrl: string
  slug: string
}
