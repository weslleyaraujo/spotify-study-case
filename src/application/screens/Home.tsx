import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../components/atoms/Icon/Icon";
import { Picture } from "../../components/atoms/Picture/Picture";
import { View } from "../../components/atoms/View/View";
import { Section } from "../../components/molecules/Section/Section";
import { FadePresence } from "../../components/utilities/FadePresence/FadePresence";
import { Scrollable } from "../../components/utilities/Scrollable/Scrollable";
import { Icons } from "../../foundations/icons";
import { useBodyBackground } from "../../hooks/use-body-background";
import { SITEMAP } from "../site-map";
import { AnimatedMinimize } from "../../components/utilities/AnimatedMinimize/AnimatedMinimize";

interface Props {}

function Home(props: Props) {
  useBodyBackground({
    color: "yellow",
    gradientStyle: "topLeft"
  });

  return (
    <FadePresence>
      <AnimatedMinimize
        content={
          <>
            {/* <View justify="flex-end" padding="medium">
              <Link to={SITEMAP.SETTINGS}>
                <Icon<Icons>
                  type="settings"
                  color="absoluteLight"
                  size="small"
                />
              </Link>
            </View> */}
            <View margin={["large", "medium"]} justify="center">
              <Picture
                width={250}
                height={250}
                source="https://i.scdn.co/image/7f587bc2606cdd9907d7452e92a2158c63fa8a6e?a"
                alt="Release Radar"
                aspectRatio="square"
              />
            </View>
          </>
        }
      >
        {[...new Array(10)].map((item, index) => (
          <Section
            key={`home-section-${index}`}
            title="Your heavy rotation"
            subtitle="The music you've had on repeat this month."
            padding={["medium", "none", "large", "none"]}
          >
            <Scrollable
              padding="small"
              horizontalPadding="medium"
              maxVisibleItems={2}
            >
              {[...new Array(5)].map((item, index) => (
                <Picture
                  key={`home-section-picture-${index}`}
                  source="https://i.scdn.co/image/7f587bc2606cdd9907d7452e92a2158c63fa8a6e?a"
                  alt="Release Radar"
                  aspectRatio="square"
                />
              ))}
            </Scrollable>
          </Section>
        ))}
      </AnimatedMinimize>
    </FadePresence>
  );
}

export { Home };
