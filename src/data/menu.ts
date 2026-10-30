import type { Photo } from '../lib/photo.ts'
import { photos } from './photos.ts'

export interface MenuItem {
  name: string
  description?: string
  /** US dollars. */
  price: number
  badge?: string
  /** Puts the dish in "House favorites" with this photo and a short line of copy. */
  feature?: { photo: Photo; blurb: string }
}

export interface MenuSection {
  id: string
  title: string
  note?: string
  items: MenuItem[]
}

/**
 * Items and prices from The Alcove's DoorDash storefront (order.online), Oct 30, 2026.
 * TODO: have the owner check names, prices and descriptions before launch.
 */
export const menu: MenuSection[] = [
  {
    id: 'small-plates',
    title: 'Small Plates',
    note: 'Made for the middle of the table.',
    items: [
      {
        name: 'Chimichurri Truffle Fries',
        description: 'Crispy fries with house chimichurri, truffle and Parmesan.',
        price: 13,
        badge: 'Fan favorite',
        feature: {
          photo: photos.fries,
          blurb: 'Our most talked-about plate: house chimichurri, truffle and a snowfall of Parmesan.',
        },
      },
      {
        name: 'Alcove Fries',
        description: 'Herb-truffle Gruyère cheese fries with smoked chopped bacon.',
        price: 13,
      },
      {
        name: 'Skirt Steak Lollipops',
        description: 'Marinated skirt steak skewers with chimichurri, tomatoes and sautéed onions on mesclun.',
        price: 22,
        badge: 'Fan favorite',
        feature: {
          photo: photos.skewers,
          blurb: 'Chimichurri-marinated skirt steak skewers with tomatoes and sautéed onions.',
        },
      },
      {
        name: 'Wings',
        description: 'Ten Gorgonzola-crusted wings: BBQ, spicy Buffalo, or chimichurri truffle Parmesan (+).',
        price: 18,
        feature: {
          photo: photos.wings,
          blurb: 'Ten Gorgonzola-crusted wings — BBQ, spicy Buffalo, or chimichurri truffle Parmesan.',
        },
      },
      {
        name: 'Alcove Nachos',
        description:
          'Tortilla chips layered with black beans, melted Jack cheddar, pico de gallo, sour cream, guacamole and jalapeños. Add chicken or carne asada.',
        price: 17,
        badge: 'Most liked',
      },
      {
        name: 'Guacamole',
        description: 'Crushed avocado with cilantro, tomato and onion, with tri-color tortilla chips.',
        price: 18,
        feature: {
          photo: photos.guacamole,
          blurb: 'Crushed avocado, cilantro, tomato and onion, with a pile of tri-color chips.',
        },
      },
      { name: 'Chorizo Guacamole', price: 23 },
      {
        name: 'Patacones',
        description: 'Fried green plantains topped with mushroom duxelles, roast pork and guacamole.',
        price: 15,
      },
      {
        name: 'Truffled Garlic Bread',
        description: 'Stuffed with prosciutto and Jack cheddar, with chimichurri on the side.',
        price: 20,
      },
      { name: 'Smoked Salmon Bruschetta', price: 20 },
      { name: 'Quesadilla', price: 17 },
    ],
  },
  {
    id: 'tacos',
    title: 'Tacos',
    note: 'Three to an order. Add an extra taco for a little more.',
    items: [
      {
        name: 'Alcove Tacos',
        description:
          'Spicy chorizo and chicken, carne asada, and roast pork shoulder, topped with pico de gallo and house-made guacamole.',
        price: 21,
      },
      {
        name: 'Birria Tacos',
        description: 'Slow-cooked beef birria in corn tortillas with melted cheese, cilantro and onion, plus consommé for dipping.',
        price: 24,
        feature: {
          photo: photos.tacos,
          blurb: 'Slow-cooked beef birria and melted cheese, with consommé on the side for dipping.',
        },
      },
      {
        name: 'Fish Tacos',
        description: 'Grilled fish in corn tortillas with cabbage, shredded carrot, avocado and chipotle aioli.',
        price: 21,
      },
    ],
  },
  {
    id: 'burgers',
    title: 'Burgers',
    note: 'Served with fries. Upgrade to Alcove fries or chimichurri truffle Parmesan fries for a little extra.',
    items: [
      {
        name: 'Alcove Burger',
        description:
          '8 oz Angus beef, crunchy potato sticks, mozzarella, smoked bacon, pink rosemary sauce, pineapple sauce, coleslaw and a fried quail egg.',
        price: 25,
        badge: '#1 most liked',
        feature: {
          photo: photos.burger,
          blurb: 'Angus beef stacked with potato sticks, bacon, pineapple sauce and a fried quail egg.',
        },
      },
      {
        name: 'Classic Angus Burger',
        description: '8 oz Angus beef with lettuce, tomato, onion and pickle. Add cheese, avocado, egg or bacon.',
        price: 17,
      },
      {
        name: 'BBQ Pulled Pork Burger',
        description: 'Sautéed onions, mozzarella, smoked bacon, lettuce, tomato, raw onion and rosemary sauce.',
        price: 21,
      },
      {
        name: 'Portobello Burger',
        description: 'Grilled portobello, roasted red peppers, fresh mozzarella, basil and tomato with a balsamic reduction.',
        price: 21,
      },
      {
        name: 'Alcove Sliders (4)',
        description: 'Angus beef, American cheese, lettuce, tomato, sautéed onions, pickles and rosemary sauce.',
        price: 21,
      },
    ],
  },
  {
    id: 'sandwiches',
    title: 'Sandwiches & Wraps',
    note: 'Served with fries. Upgrade to Alcove fries or chimichurri truffle Parmesan fries for a little extra.',
    items: [
      {
        name: 'Alcove Cuban',
        description: 'Roasted pork shoulder and ham with Swiss, pickles, Dijon and garlic aioli.',
        price: 22,
        badge: 'Most liked',
      },
      {
        name: 'Alcove Cheesesteak',
        description: 'Carne asada steak, sautéed onions, bell peppers, mozzarella, greens and chipotle mayo.',
        price: 25,
      },
      {
        name: 'Alcove Chicken Cheesesteak',
        description: 'Grilled chicken, melted cheese, sautéed onions and bell peppers on a hoagie roll.',
        price: 23,
      },
      {
        name: 'The Alcove Hot Dog',
        description:
          'Colombian-style, piled with potato sticks, mozzarella, smoked bacon, coleslaw, rosemary and pineapple sauces, and a quail egg.',
        price: 11,
      },
      {
        name: 'Birria Burrito',
        description: 'Birria, black beans, Jack cheddar, red onion, lettuce, tomato and chipotle mayo.',
        price: 24,
      },
      { name: 'Burrito Wrap', price: 22 },
      { name: 'Tilapia a la Plancha Wrap', price: 21 },
      { name: 'Grilled Cheese on Challah', price: 20 },
    ],
  },
  {
    id: 'salads',
    title: 'Salads',
    note: 'Add grilled chicken or carne asada to any salad.',
    items: [
      {
        name: 'House Salad',
        description: 'Spring mix, shredded carrot, grapes, sliced almonds, roasted red pepper and avocado with house cranberry dressing.',
        price: 15,
      },
      {
        name: 'Kale Salad',
        description: 'Kale, walnuts, golden raisins, Parmesan and avocado with apple cider vinaigrette.',
        price: 15,
      },
      {
        name: 'Quinoa Salad',
        description: 'Spring mix, red quinoa, oregano, red onion, avocado, cilantro and marinated cucumber with lime and olive oil.',
        price: 15,
      },
      {
        name: 'Couscous Salad',
        description: 'Spring mix, roasted corn and asparagus, tomatoes, herbs and avocado with lemon and olive oil.',
        price: 15,
      },
      {
        name: 'Stuffed Avocado Salad',
        description:
          'Roasted asparagus and corn, red peppers, onion, marinated cucumber and Gorgonzola over mesclun with raspberry vinaigrette.',
        price: 17,
      },
    ],
  },
]
