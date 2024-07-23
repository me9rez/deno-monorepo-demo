import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { add } from "@scope/add";
import { subtract } from "@scope/subtract";

Deno.test("add test", () => {
    assertEquals(add(1, 2), 3);
});
Deno.test("subtract test", () => {
    assertEquals(subtract(2, 1), 1);
});
