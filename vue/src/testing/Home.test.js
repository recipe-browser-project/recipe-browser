import { test } from "vitest";
import { render } from "@testing-library/vue";
import Home from "../views/Home.vue";

test("It renders correctly", () => {
    const { getByText } = render(Home);
    getByText("Explore different recipes");
});
