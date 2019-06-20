/** @jsx jsx */
import { jsx } from "@emotion/core";
import { View, useViewStyles } from "../../atoms/View/View";
import { TextLine } from "../../atoms/TextLine/TextLine";
import { Fragment } from "react";

interface Props
  extends Pick<
    React.ComponentProps<typeof View>,
    "padding" | "justify" | "align"
  > {
  title: string;
  children: React.ReactNode;
  subtitle?: string;
  head: Pick<
    React.ComponentProps<typeof View>,
    "padding" | "justify" | "align"
  >;
}

interface DefaultProps
  extends Required<Pick<Props, "head" | "padding" | "justify" | "align">> {}

function Section({
  title,
  children,
  subtitle,
  padding,
  justify,
  head
}: Props & DefaultProps) {
  const view = useViewStyles({
    margin: "none",
    justify,
    padding
  });
  return (
    <Fragment>
      <View {...head} direction="column">
        <TextLine text={title} color="white" type="heading" />
        {subtitle && <TextLine text={subtitle} color="complementaryDarkest" />}
      </View>
      <div
        css={{
          ...view,
          display: "initial"
        }}
      >
        {children}
      </div>
    </Fragment>
  );
}

const defaultProps: DefaultProps = {
  justify: "center",
  align: "center",
  padding: "medium",
  head: {
    align: "center",
    justify: "center",
    padding: ["small", "medium"]
  }
};

Section.defaultProps = defaultProps;

export { Section };
