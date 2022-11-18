import { render } from "@testing-library/vue";
import Calorie_friendly from "../views/Calorie_friendly.vue";

test("It renders correctly", () => {
    const { getByText } = render(Calorie_friendly);
    getByText("Calorie friendly");
});
