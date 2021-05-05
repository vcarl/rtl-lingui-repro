import React from "react";
import { render } from "helpers/testUtils";
import { Repro } from "components/Repro";

describe("Repro", () => {
  test("renders", async () => {
    try {
      const { findByText, debug } = render(<Repro />);

      debug();
      await findByText("Unwrapped text");
      await findByText("ES In Trans");
    } catch (e) {
      console.error(e);
      throw e;
    }
  });
});
