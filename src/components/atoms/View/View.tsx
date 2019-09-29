/** @jsx jsx */

import {
  AlignItemsProperty,
  FlexDirectionProperty,
  FlexWrapProperty,
  GlobalsNumber,
  JustifyContentProperty,
  PropertiesFallback
} from "csstype";
import { CSSObject, CSSPseudosForCSSObject } from "@emotion/serialize";

import { Subtract } from "utility-types";
import { Units } from "../../../foundations/Theme";
import { jsx } from "@emotion/core";
import { useCallback } from "react";
import { useTheme } from "../../../foundations/useTheme";

type Value = keyof Units | "none";
type Spacing =
  | Value
  | [Value]
  | [Value, Value]
  | [Value, Value, Value]
  | [Value, Value, Value, Value];

interface ValidCSSProperties
  extends PropertiesFallback<number | string>,
    CSSPseudosForCSSObject {}

type ClashingCSSProperties =
  | "display"
  | "borderRadius"
  | "padding"
  | "paddingTop"
  | "paddingRight"
  | "paddingBottom"
  | "paddingLeft"
  | "margin"
  | "marginTop"
  | "marginRight"
  | "marginBottom"
  | "marginLeft"
  | "flexGrow"
  | "flex"
  | "flexDirection"
  | "flexWrap"
  | "alignItems"
  | "justifyContent";

type ViewStyles = Subtract<
  ValidCSSProperties,
  { [P in ClashingCSSProperties]?: CSSObject[P] }
>;

export interface Props {
  children: React.ReactNode;
  margin?: Spacing;
  padding?: Spacing;
  radius?: "small" | "medium" | "large";
  grow?: GlobalsNumber;
  justify?: JustifyContentProperty;
  align?: AlignItemsProperty;
  direction?: FlexDirectionProperty;
  wrap?: FlexWrapProperty;
  supportsTruncation?: boolean;
  style?: ViewStyles;
  debugTrace?: boolean;
}

interface DefaultProps extends Required<Pick<Props, "margin" | "padding">> {}

function useViewStyles(
  props: Pick<
    Props & DefaultProps,
    | "margin"
    | "padding"
    | "radius"
    | "style"
    | "supportsTruncation"
    | "wrap"
    | "align"
    | "justify"
    | "direction"
    | "grow"
    | "debugTrace"
  >
) {
  const {
    margin,
    radius,
    style,
    supportsTruncation,
    wrap: flexWrap,
    align: alignItems,
    justify: justifyContent,
    direction: flexDirection,
    grow: flexGrow,
    padding,
    debugTrace
  } = props;
  const theme = useTheme();
  const display = [
    justifyContent,
    alignItems,
    flexWrap,
    flexGrow,
    flexDirection
  ].some(Boolean)
    ? "flex"
    : undefined;

  const convert = useCallback(
    (unit: Spacing) =>
      unit === "none"
        ? 0
        : `${theme.units[unit as keyof typeof theme.units]}px`,
    [theme]
  );

  const mapSpacing = useCallback(
    function mapSpacing(value: Props["margin"] | Props["padding"]) {
      if (!value) {
        return 0;
      }

      return Array.isArray(value)
        ? value.map(convert).join(" ")
        : convert(value);
    },
    [convert]
  );

  const mapRadius = useCallback(
    function mapRadius(radius: Props["radius"]) {
      switch (radius) {
        case "small":
          return theme.constants.borderRadiusSmall;
        case "medium":
          return theme.constants.borderRadiusMedium;
        case "large":
          return theme.constants.borderRadiusLarge;
        default:
          return 0;
      }
    },
    [theme.constants]
  );

  return {
    ...style,
    display,
    justifyContent,
    alignItems,
    flexWrap,
    flexGrow,
    flexDirection: display ? flexDirection : "column",
    ...(debugTrace &&
      process.env.NODE_ENV === "development" && {
        outline: "1px dashed red"
      }),
    ...(radius && { borderRadius: mapRadius(radius) }),
    ...(supportsTruncation && { minWidth: 0 }),
    ...(margin && { margin: mapSpacing(margin) }),
    ...(padding && { padding: mapSpacing(padding) })
  };
}

function View(props: Props & DefaultProps) {
  const { children, style } = props;
  const view = useViewStyles(props);

  return (
    <div
      css={{
        ...view,
        ...style
      }}
      children={children}
    />
  );
}

const defaultProps: DefaultProps = {
  margin: "none",
  padding: "none"
};

View.defaultProps = defaultProps;

export { View, useViewStyles };
