import { MenuItem } from '../../model/menu-item';
import { Ingredient } from '../../model/ingredient';

export class MenuList {
    items: MenuItem[] = [
        {
          name: "Pepperoni",
          regularPrice: 100.00,
          familyPrice: 200.00,
          partyPrice: 300.00,
          imageUrl: '../../../assets/img/pepperoni.jpg',
          ingredients: Ingredient[1] = [
            {
                name: "Pepperoni Ingredient 1",
            },
            {
                name: "Pepperoni Ingredient 2",
            },
            {
                name: "Pepperoni Ingredient 3",
            },
            {
                name: "Pepperoni Ingredient 4",
            },
            {
                name: "Pepperoni Ingredient 5",
            }
          ]
        },
        {
          name: "BBQ",
          regularPrice: 100.00,
          familyPrice: 200.00,
          partyPrice: 300.00,
          imageUrl: '../../../assets/img/bbq.jpg',
          ingredients: Ingredient[1] = [            
            {
                name: "BBQ Ingredient 3",
            },
            {
                name: "BBQ Ingredient 4",
            },
            {
                name: "BBQ Ingredient 5",
            }
          ]
        },
        {
          name: "Chicken BBQ",
          regularPrice: 100.00,
          familyPrice: 200.00,
          partyPrice: 300.00,
          imageUrl: '../../../assets/img/chickenbbq.jpg',
          ingredients: Ingredient[1] = [
            {
                name: "Chicken BBQ Ingredient 1",
            },
            {
                name: "Chicken BBQ Ingredient 2",
            },
            {
                name: "Chicken BBQ Ingredient 3",
            },
            {
                name: "Chicken BBQ Ingredient 4",
            },
            {
                name: "Chicken BBQ Ingredient 5",
            }
          ]
        },
        {
          name: "Hawaiian",
          regularPrice: 100.00,
          familyPrice: 200.00,
          partyPrice: 300.00,
          imageUrl: '../../../assets/img/hawaiian.jpg',
          ingredients: Ingredient[1] = [
            {
                name: "Hawaiian Ingredient 2",
            },
            {
                name: "Hawaiian Ingredient 3",
            },
            {
                name: "Hawaiian Ingredient 4",
            },
            {
                name: "Hawaiian Ingredient 5",
            }
          ]
        },
        {
          name: "Bacon Ranch",
          regularPrice: 100.00,
          familyPrice: 200.00,
          partyPrice: 300.00,
          imageUrl: '../../../assets/img/baconranch.jpg',
          ingredients: Ingredient[1] = [
            {
                name: "Bacon Ranch Ingredient 1",
            },
            {
                name: "Bacon Ranch Ingredient 2",
            },
            {
                name: "Bacon Ranch Ingredient 4",
            },
            {
                name: "Bacon Ranch Ingredient 5",
            }
          ]
        },
        {
          name: "Four Cheese",
          regularPrice: 100.00,
          familyPrice: 200.00,
          partyPrice: 300.00,
          imageUrl: '../../../assets/img/fourcheese.jpg',
          ingredients: Ingredient[1] = [
            {
                name: "Four Cheese Ingredient 1",
            },
            {
                name: "Four Cheese Ingredient 3",
            },
            {
                name: "Four Cheese Ingredient 4",
            },
            {
                name: "Four Cheese Ingredient 5",
            }
          ]
        },
        {
          name: "Cheese Overload",
          regularPrice: 100.00,
          familyPrice: 200.00,
          partyPrice: 300.00,
          imageUrl: '../../../assets/img/cheeseoverload.jpg',
          ingredients: Ingredient[1] = [
            {
                name: "Cheese Overload Ingredient 1",
            },
            {
                name: "Cheese Overload Ingredient 2",
            },
            {
                name: "Cheese Overload Ingredient 3",
            }
          ]
        }
      ];
}
