import React from "react";
import { Text, View } from "react-native";
import { Trans } from "@lingui/macro";

export const Repro = () => (
  <View>
    <Text>Unwrapped text</Text>
    <Text>
      <Trans>In Trans</Trans>
    </Text>
  </View>
);
