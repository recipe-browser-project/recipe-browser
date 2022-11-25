import { test } from "vitest";
import { render } from "@testing-library/vue";
import Recipe from "../views/Recipe.vue";

test("It renders correctly", () => {
    const { getByText } = render(Recipe);
    getByText("All recipe");
});
