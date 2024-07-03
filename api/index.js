export async function getRecepes() {
  try {
    // const response = await fetch(
    //   "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723&diet=balanced&cuisineType=Indian&mealType=Dinner&mealType=Lunch&mealType=Snack&imageSize=REGULAR&random=true&field=uri&field=label&field=image&field=source&field=ingredientLines&field=totalTime"
    // );
    // if (!response.ok) {
    //   throw new Error("Server response was not  okay");
    // }
    // const Recepes = await response.json();
    // return Recepes.hits;
    return [
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_0450da44878f023f67cdce69713d1ace",
          label: "Black Beluga Lentils",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/70b/70b09d223b62afe2c8e6c4cdc9d99506.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1b7a91703ea966e37da38fc1f25d14d94c48ad900e6a837ac85771f6de929219",
          source: "tastykitchen.com",
          ingredientLines: [
            "2 slices Thick Slab Bacon",
            "2 Tablespoons Olive Oil",
            "3 whole Shallots, Finely Diced",
            "2 cloves Garlic, Minced",
            "3 whole Carrots, Small Diced",
            "2 stalks Celery, Small Diced",
            "4 sprigs Oregano, Chopped",
            "Salt And Pepper, to taste",
            "1 cup Black Beluga Lentils, Rinsed Well And Picked Over",
            "2-½ cups Chicken Broth",
            "Parsley, For Garnish",
          ],
          totalTime: 45,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/0450da44878f023f67cdce69713d1ace?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_74cbabe6d5c54b518694be50e2bcdd99",
          label: "Iranian albalu polo (sour cherry rice)",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/77a/77a73194815a16054259f1491259b14f.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c57265bfbc2a3498c21eb3ed6aeab0f1b6d798b519b2a73382f42719d4092109",
          source: "Food52",
          ingredientLines: [
            "350 grams / 2 cups frozen, stoned sour cherries",
            "150 grams / ⅔ cup sugar",
            "1 chicken cut into 4, or 4 chicken thighs",
            "3 tablespoons butter or olive oil",
            "1 large onion, finely chopped",
            "200 grams / 7 oz. minced meat (lamb, veal or beef)",
            "1 good pinch ground saffron",
            "2 tablespoons boiling water",
            "2 tablespoons olive oil",
            "180 grams / 1 cup basmati rice",
            "½ teaspoons salt",
            "500 milliliters / 2 cups boiling water",
            "1 tablespoon toasted slithered almonds, to serve (optional)",
          ],
          totalTime: 0,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/74cbabe6d5c54b518694be50e2bcdd99?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_4b2e9a3a2471a005b7831f010a8dcd23",
          label: "Golden Couscous",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/2fd/2fd35acd859ed167ad247f4e515813e3.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=501acb6af61b78bdc2a7cb8363a0fb86298727a26db2431e21cb03a35a09d508",
          source: "food.com",
          ingredientLines: [
            "3 tablespoons butter",
            "3 tablespoons olive oil or 3 tablespoons vegetable oil",
            "3 medium onions, finely chopped (or use 2 large onion)",
            "1 teaspoon brown sugar",
            "1 tablespoon fresh minced garlic (optional)",
            "1 pinch cayenne pepper",
            "3 teaspoons turmeric",
            "2 teaspoons cumin",
            "1 -2 teaspoon fresh ground black pepper",
            "3 cups couscous",
            "6 cups hot low sodium chicken broth",
            "3⁄4 cup currants",
            "1⁄2 cup slivered almonds",
            "seasoning salt (to taste) or white salt (to taste)",
          ],
          totalTime: 25,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/4b2e9a3a2471a005b7831f010a8dcd23?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_05d62707aebc5a69469d6d476f67c08e",
          label: "Dinner Tonight: Curried Butternut Soup",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/040/0403e80be6749c2cb2a00a55d6ea959e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=59b19291a5ec84c0abb98243109fa9f8ab29d0cb0c14b01bf880fb4b82d9578b",
          source: "Serious Eats",
          ingredientLines: [
            "1 tablespoon canola oil",
            "1 medium onion, diced",
            "2 cloves garlic, minced",
            "1 large butternut squash, peeled, seeded, and cut into 1 inch cubes",
            "6 cups of vegetable or chicken stock",
            "6 teaspoons curry powder",
            "2 tablespoon honey",
            "Salt and pepper",
          ],
          totalTime: 0,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/05d62707aebc5a69469d6d476f67c08e?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_f638c1c1d58a8ea9733ced51a488e76f",
          label: "Dirty Rice Dressing",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/856/856d185de9f73c6af8ba979cf0150aaa.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0970038b3fa376547ad18278aa2bc2cdb48cd07a89bd4342fdabe4c49da0b4d8",
          source: "Food Network",
          ingredientLines: [
            "1 pound chicken livers",
            "2 tablespoons chicken bouillon granules",
            "2 large eggplant, diced",
            "1 pound ground beef",
            "5 stalks celery with leaves, chopped",
            "1 medium onion, chopped",
            "1 pound breakfast sausage",
            "3/4 stick butter",
            "1 bell pepper, chopped",
            "Cajun seasoning mix",
            "2 to 4 cups uncooked long grain rice",
            "1 cup green onion tops, chopped",
          ],
          totalTime: 150,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/f638c1c1d58a8ea9733ced51a488e76f?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_971131ad4a2e8282051e80ef5df560f6",
          label: "Butternut Squash With Couscous and Chutney",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/b80/b8050f6c85c9c226cbe2312ea8cb003d.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9516802b7795c167a7e6cf61b05e6851b8fbe7ce00f9ed194fb7e30e4f1dcb43",
          source: "Real Simple",
          ingredientLines: [
            "2 tablespoons vegetable oil",
            "1 large onion, sliced into 1/2-inch half-rounds",
            "2 cloves garlic, minced",
            "1 2- to 2 1/2-pound butternut squash—peeled, seeded, and diced (4 to 5 cups)",
            "1 tablespoon curry powder",
            "kosher salt",
            "2 cups vegetable or chicken broth",
            "1/2 cup heavy cream",
            "2 cups instant couscous",
            "1/2 cup chopped peanuts",
            "1/2 cup prepared chutney",
          ],
          totalTime: 40,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/971131ad4a2e8282051e80ef5df560f6?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_c65d5f48e68c48b1a08c9e78ce705673",
          label: "Mango Chicken Curry",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/614/6145d9d6bb61753d26a0d11010e9a870?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=86557bffcad03051ceaaf2a5bc98a1937054b7d8507c1d3b53730bcc0567523b",
          source: "Real Simple",
          ingredientLines: [
            "1 cup jasmine rice",
            "4 teaspoons olive oil, divided",
            "2 12-oz. mangoes, chopped (about 3 cups), divided",
            "1 sweet onion, halved and thinly sliced (about 1 cup)",
            "4 cloves garlic, finely chopped",
            "2 teaspoons grated fresh ginger",
            "1 ½ tablespoons curry powder",
            "1 ¼ teaspoons kosher salt",
            "1 14-oz. can unsweetened full-fat coconut milk, shaken",
            "½ cup chicken broth",
            "1 pound boneless, skinless chicken thighs, cut into 1/2-in. pieces",
            "2 tablespoons lime juice (from 1 lime)",
            "Fresh cilantro leaves, for serving",
          ],
          totalTime: 30,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/c65d5f48e68c48b1a08c9e78ce705673?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_295bb3b3b215d816e44297860120705d",
          label: "Mulligatawny Soup",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/5c7/5c7462ec77f0d1690f2d0a6f0570ef7c.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=332cdc5e2177436315eb1d3e2353e1ddb24cade9e3e2e832ad30fa0a6e80cf2b",
          source: "Food Network",
          ingredientLines: [
            "4 tablespoons unsalted butter",
            "1 large Spanish onion, chopped",
            "6 cloves garlic, finely chopped",
            "3 tablespoons finely chopped peeled, fresh ginger",
            "1/2 jalapeno, stemmed, seeded, and chopped",
            "1 tablespoon ground coriander",
            "2 teaspoons ground cumin",
            "1 1/2 teaspoons ground turmeric",
            "1/4 cup all-purpose flour",
            "1 3/4 cups red or pink lentils",
            "9 cups chicken broth, homemade or low-sodium canned",
            "3 tablespoons minced fresh coriander (cilantro) leaves, plus 12 sprigs",
            "1 cup unsweetened canned coconut milk",
            "1/4 cup freshly squeezed lemon juice, plus lemon wedges for garnish",
            "2 teaspoons kosher salt",
            "Freshly ground black pepper",
          ],
          totalTime: 100,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/295bb3b3b215d816e44297860120705d?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_32cec6496df16d1e300a2e3b68036c2b",
          label: "Chicken Pelau",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/d5b/d5bee1638c1228f7f17693abb4e5a8e9.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8367f2864edc40293c7cf34799eaa21fd099e343cacc9f541345775cc58cfc99",
          source: "Epicurious",
          ingredientLines: [
            "1 cup dry or 1 (12-ounce) can pigeon peas, pinto beans, or black-eyed peas",
            "2 cups long-grain rice",
            "3 tablespoons canola oil",
            "3/4 cup sugar (white or brown)",
            "1 (3-pound) chicken, cut into 8 pieces, skin removed",
            "1 small onion, chopped",
            "1 clove garlic, finely chopped",
            "1 cup coconut milk",
            "1 bay leaf",
            "2 teaspoons Green Seasoning",
            "1/2 cup chopped parsley",
            "1 sprig thyme",
            "2 carrots, peeled and chopped",
            "5 scallions, chopped (white and green parts)",
            "Kosher salt",
            "2 cups cubed fresh calabaza or butternut squash",
            "1 small whole Scotch bonnet pepper",
            "1/2 cup ketchup",
            "1 tablespoon butter",
          ],
          totalTime: 0,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/32cec6496df16d1e300a2e3b68036c2b?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_8f3651c73ef6f0fb9f65dae8c1471e89",
          label: "Pancetta and Saffron Rice",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/cfc/cfc98709d4ab777b8e2846a2fa5c7239.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a0bfc1567aadbb13e6799baeedf25c1b829e900f4c1ce25e72d488ff61245e11",
          source: "Food Network",
          ingredientLines: [
            "1 tablespoon olive oil",
            "1 (8-ounce) piece pancetta, cut into 1/4-inch pieces",
            "2 tablespoons unsalted butter, at room temperature",
            "1 medium onion, finely chopped",
            "2 1/4 cups white basmati rice",
            "4 cups low-sodium chicken stock",
            "2 teaspoons kosher salt",
            "3/4 teaspoon saffron threads",
          ],
          totalTime: 52,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/8f3651c73ef6f0fb9f65dae8c1471e89?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_bd46b8e21bc1457fa28a21dae5b3142d",
          label:
            "Lal Masala Is the Superpowered Flavor Booster I Always Keep on Hand",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/0be/0beb544895a4e0b61049495883452205?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0cb856b66757bed82a2ea35786c4e005d71cbae029846dcfffd5054f8681279c",
          source: "The Kitchn",
          ingredientLines: [
            "11 cloves garlic",
            "1/3 cup Kashmiri chili powder",
            "2 tablespoons apple cider vinegar",
            "2 teaspoons ground cumin",
          ],
          totalTime: 10,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/bd46b8e21bc1457fa28a21dae5b3142d?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_2eb9f9a6df6b9a5b28fcddeaa0566687",
          label: "Indian-Spiced Cauliflower with Chickpeas & Farro",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/a12/a125e22519eca17277b7194bd09644b4.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cca134aa1de018e72dab42c94f33654d8c09207a47ed515e5a04600abdca6288",
          source: "campbells.com",
          ingredientLines: [
            "1/4cup sliced almonds",
            "1 tablespoon oil",
            "1 large onion, chopped (about 1 cup)",
            "1 clove garlic, minced",
            "1 tablespoon garam masala",
            "1 1/2cups Swanson® Chicken Broth or Swanson® Certified Organic Chicken Broth or Swanson® Natural Goodness® Chicken Broth",
            "1/2cup farro, rinsed",
            "4 cups cauliflower florets",
            "1 can (about 15 ounces) chickpeas (garbanzo beans), rinsed and drained",
            "1 teaspoon grated orange zest",
            "1 tablespoon chopped fresh parsley",
          ],
          totalTime: 30,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/2eb9f9a6df6b9a5b28fcddeaa0566687?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_e05113d677af4e1dac93ac5188c0fda2",
          label: "Sri Lankan curry pie with cauliflower mash topping recipes",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/c1a/c1af81544aaa55872ba05d565c7c7955?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=47464024571c89dd5f5f5177939c5329badf43a8e9349e01ec69c664d5a837c1",
          source: "opticook.org",
          ingredientLines: [
            "1 medium cauliflower, cut into chunky florets including the stem",
            "1 tsp chicken or vegetable stock powder",
            "1 1/2 tbs coconut oil",
            "1 onion",
            "2 garlic cloves, minced",
            "2 tsp ginger, minced",
            "2 1/2 tsp turmeric",
            "2 tsp paprika",
            "3 tsp garam masala",
            "1 1/2 tsp ground cumin",
            "1 1/2 tsp ground coriander",
            "1/2 tsp cinnamon",
            "1 tsp coconut essence",
            "1 fresh chilli, minced or 1/4 tsp chilli powder",
            "6 fresh or dried curry leaves",
            "2 carrots, diced",
            "2 stalks celery, diced",
            "1 cup green beans, trimmed and chopping into 1 cm long pieces",
            "1 medium zucchini , diced",
            "1/2 cup fresh coriander, chopped roughly",
          ],
          totalTime: 80,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/e05113d677af4e1dac93ac5188c0fda2?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_26bcc68b31b340e196869554446fee32",
          label: "Indian Chicken Pilaf or Pulao",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/1a4/1a453308650fe93efefa524b72a37bcd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=33fc9926a9e5dd7fe9ede62d6ab42f0beddc744899f1abb602ce9ae65c774ef6",
          source: "Honest Cooking",
          ingredientLines: [
            "Chicken with bone : 500 gm",
            "Basmati rice : 2 cups",
          ],
          totalTime: 0,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/26bcc68b31b340e196869554446fee32?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_e08e6667e89e3c68cee1bb794e8b10fb",
          label: "Warm Rotisserie Chicken And Veggie Pesto Naan Stackers",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/588/58853cebd496830054022a87c5cf39ea.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=899cd3e7f55e880c0050095dde8b0fbca0495898ae9e9fbf98de6ed499278cf4",
          source: "alifedelicious.com",
          ingredientLines: [
            "6 mini Tandoor Baked Naan",
            "Sabra Roasted Garlic Hummus",
            "1 half breast Rotisserie Chicken, chopped",
            "2 tbsp Basil Pesto",
            "1 medium Zucchini, diced",
            "1 cup Sweet Corn",
            "2 handfuls Mini Tomatoes, halved",
            "Extra Virgin Olive Oil",
            "Salt and Pepper",
          ],
          totalTime: 0,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/e08e6667e89e3c68cee1bb794e8b10fb?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_2e65d24b7fe248c08664fb1167119600",
          label: "Curried Cabbage",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/6e8/6e864a1d73d4bef20cb1f2087d72d56c?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ef62da283d3aaa48bdafba2d4d9847c3dc14c6d6139c1359ec29a5ec822aee9",
          source: "My Recipes",
          ingredientLines: [
            "1 tablespoon vegetable oil",
            "½ cup minced shallots",
            "2 garlic cloves, minced",
            "2 tablespoons whole-grain Dijon mustard",
            "2 teaspoons curry powder",
            "1 teaspoon ground turmeric",
            "12 cups thinly sliced green cabbage (about 3 pounds)",
            "¼ cup fat-free, less-sodium chicken broth",
            "¼ cup rice vinegar",
            "½ teaspoon salt",
            "¼ teaspoon black pepper",
          ],
          totalTime: 0,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/2e65d24b7fe248c08664fb1167119600?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_3ccebfdac9aa8b9100cb8f51bf1a1237",
          label: "Slow Cooker Curry Chicken",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/afb/afb3a5f6df43d1c56739dae8b27fea79.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=db5355fdafef14546a90089f7164b84001d237f773c763182eb313f10c1242d8",
          source: "heritagefarmersmarket.blogspot.com",
          ingredientLines: [
            "116 oz of choice stew vegetables (carrots,celery,potatoes etc)",
            "4large chicken thighs, skin and bones removed (1 1/2 to 1 3/4 pounds) *bones may also be removed after cooked in the slow cooker.*",
            "Salt and ground black pepper to taste",
            "110 oz can condensed cream of potato soup",
            "2teaspoons curry powder",
            "1tablespoon snipped fresh cilantro",
          ],
          totalTime: 0,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/3ccebfdac9aa8b9100cb8f51bf1a1237?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_e00f3564e6ec9e54905f3273a19a1e82",
          label: "Pumpkin Curry With Coconut Rice",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/e25/e25947eef7fd7c61b9c7d73a5a0ca563.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c8dedc719401d5dd63854c9180b6921cd4b487aae36014a2d216648344b4c5d3",
          source: "completerecipes.com",
          ingredientLines: [
            "1 14.5 oz can diced tomatoes",
            "1 15 oz can chickpeas (garbanzo beans)",
            "1 15 oz can pumpkin puree",
            "1/2 cup of canned coconut milk (unsweetened, full fat)",
            "1/2 cup chicken broth",
            "2 Tbs arrowroot powder",
            "2 tsp salt",
            "1/2 tsp pepper",
            "3 tsp garam masala",
            "2 tsp curry powder",
            "~~ For The Coconut Rice ~~",
            "2 cups rice (I use basmati)",
            "3 cups chicken broth",
            "1 cup coconut milk",
            "2 tsp salt",
          ],
          totalTime: 0,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/e00f3564e6ec9e54905f3273a19a1e82?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_bc178feabd382db17976b56f2bf80f0c",
          label: "Tandoori Chicken Wraps",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/f7f/f7f6f9eddb02a2a6ec5f91e52253d739.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=25a2bf948588a3a7e022d804a017fd21d20943820e9160413fde569cfe133eee",
          source: "eazypeazymealz.com",
          ingredientLines: [
            "2 chicken breasts approx 3 cups diced",
            "1 Tbs tandoori paste",
            "1/2 cup sour cream",
            "1 tbsp corn oil + 1 tsp",
            "4-8 flatbread wraps",
            "2 cups cooked white rice",
            "1/4 cup tzatziki",
            "coriander for garnish",
          ],
          totalTime: 0,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/bc178feabd382db17976b56f2bf80f0c?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
      {
        recipe: {
          uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_a33da3dc63e5285c47a1bf9f0a02a2e5",
          label: "Chicken Tandoori Pizza",
          image:
            "https://edamam-product-images.s3.amazonaws.com/web-img/f05/f05993071ae45622e27ad2d93026dc49.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIC2HsXRLRhZ3VAaRqoQvddjbgWiF80cmtKpjD3AkU0EmAiBPfzD6kifxZf0LrO2ItpZqVKxU9EbDVJap%2BF5zNnHXpyq4BQh4EAAaDDE4NzAxNzE1MDk4NiIMgYGJ%2Be7i1FzOPIErKpUFjDfGhz%2BgFyZt81cSVPQA44zwMrLQNDUlPEv86j4%2FxU%2BOnNNRuki85%2FUDrjTHMEYP9pUsKx0wPwDnJ0Ktxp%2B4aRfMDqYZMo%2Bj9fmXLRKuUyxdAlCwaHNtMEuawyHob8h9QvQ5wzC6lF0U5KOFAFBuwGihFl%2FdlfOvQ4eQQwUq4tB6chmYdK%2BbWI%2F%2Ff2bPkjx1uOP7hEpbml20AVsd6RM9UP5tsvOWpNGWi9%2BDcaSyM8K9i%2FvsDhzjdWyOSE9O0RWDe57%2FbyvbrsUDwIhOmnfKn%2FJb3pSfuI6i58AAT96D4KcNANzvDKQesV8i4dUgm%2B4gHX4iGbKigAXhGK2Bqx3CLOXdi2klqPXDRDKslcvvwt2Rp%2BJBk0Zd0MetdvlOgOTW7bFXcsuw4bC84QOg0vIDTdKpBpFwtvVAhIwkmJv7Bg8%2F9GK8CufVjZjv87EXiN29%2FpJGhzMuIETxtxpAkL10RUbCQdrqTkv00MgpBVCNHsfPuPC%2BA1oVM3BFYvJc1qUEodmKomHmcVNvDfLyulwAP2QMbgHWJHA3tG3rUuMFIrMwSGn0f3umHjreIZVu1XjFAdUKle7xIqV4%2FQEY8hlalVQ46rFfvcuqiaCzWeivv2kW%2BplHZRyIvMtlsPzx1gWKbMEg0%2FjuqvMRj9CbKI7%2FrXt6Njfo9O2VWnoO4Em01Fehkb9lC%2FtbNiWSkfVzOr9wHiUJ%2Fvj7GLcQzdGnGYSPfUH9KGOGxn1Y7LPyNv456po6QGo3GlGNN0UuBMZfuRfri3z9Sa2qnelpVsK4CyUYPSINELtpeX0K%2BUdKsipmXTKcwZ1thsBYJmYDIvYuf1yuJL74wjTkI2bF1jjy%2BrC4UGorOF9Jq902pVahP7j9JopZ0AVuXDCFqZC0BjqyAdDcne%2BEp8ALA%2BBHr%2BJgVB%2BkT1bJS6%2BUaNDFtxdH7b9E%2Fp8MX4z9ai8gv1whE4oYR1D1lUZdrpdq0YD2aSLGiy2UNsqoeZc8RBpQ%2BGCtQB2ucm1iOnFW3gdUmEEBpp5lf5cl2UUoIL64TYKfHXI%2Bz5W6bgCQgqYYRqOLguRccEQIwNh2La7Rx8Qgo%2B%2FdLgTAbJuxQTbByJuSZkFg2jgt1GtMTee%2Bie%2BKdV%2B7RAzkYczqB8w%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240702T155631Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFCHONBYUS%2F20240702%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=adc3746ed04f38f956c5abe6541000666b07cff43ef248c6091e0b73a62c7ae8",
          source: "recipezazz.com",
          ingredientLines: [
            "400 grams raw chicken tenderloins",
            "1/4 cup tandoori paste",
            "1 tablespoon lemon juice",
            "1/2 cup yogurt (natural)",
            "2 tablespoons oil (vegetable oil)",
            "4 naan bread (75 grams each)",
            "2 tablespoons mango chutney",
            "1 red capsicum (small finely chopped)",
            "2 tablespoons raisins (coarsely chopped)",
            "2 tablespoons slivered almonds",
            "1/3 cup tasty cheese, grated (or cheddar)",
            "1/4 cup fresh coriander (leaves)",
          ],
          totalTime: 0,
        },
        _links: {
          self: {
            title: "Self",
            href: "https://api.edamam.com/api/recipes/v2/a33da3dc63e5285c47a1bf9f0a02a2e5?type=public&app_id=19935929&app_key=%20c9e19a19139e42c68e4503e45dca5723",
          },
        },
      },
    ];
  } catch (error) {
    console.log(error);
    return null;
  }
}
