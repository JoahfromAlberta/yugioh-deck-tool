import "reflect-metadata";

import { shallowMount } from "@vue/test-utils";
import YgoCard from "../../../src/components/YgoCard.vue";
import type { Card } from "../../../../core/src/main";
import { createCard } from "../../../../core/__tests__/helper/dataFactories";

describe("YgoCard.vue", () => {
    it("binds card name", () => {
        const card: Card = createCard({ passcode: "123", name: "foo" });

        const wrapper = shallowMount(YgoCard, {
            propsData: { card },
        });

        expect(wrapper.attributes()["data-name"]).toEqual("foo");
    });
});