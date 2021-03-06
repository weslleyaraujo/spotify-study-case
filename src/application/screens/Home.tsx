import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../components/atoms/Icon/Icon";
import { View } from "../../components/atoms/View/View";
import { Section } from "../../components/molecules/Section/Section";
import { ScaleOut } from "../../components/utilities/ScaleOut/ScaleOut";
import { FadePresence } from "../../components/utilities/FadePresence/FadePresence";
import { LoadingView } from "../../components/utilities/LoadingView/LoadingView";
import { Scrollable } from "../../components/utilities/Scrollable/Scrollable";
import { Icons } from "../../foundations/icons";
import {
  GQLGetFeedQuery,
  GQLGetFeedQueryVariables,
  GQLSectionType
} from "../../graphql/generated";
import { useBodyBackground } from "../../hooks/use-body-background";
import {
  INTERACTIONS,
  useLazyInteractions
} from "../../hooks/use-interactions";
import { CardCircle } from "../components/CardCircle/CardCircle";
import { CardCover } from "../components/CardCover/CardCover";
import { ErrorView } from "../components/ErrorView/ErrorView";
import { SITEMAP } from "../site-map";
import { useScrollTopOnce } from "../../hooks/use-scroll-top-once";

const interactions = {
  [GQLSectionType.Artist]: INTERACTIONS.NAVIGATE_ARTIST,
  [GQLSectionType.Album]: INTERACTIONS.NAVIGATE_ALBUM,
  [GQLSectionType.Playlist]: INTERACTIONS.NAVIGATE_PLAYLIST
};

interface HomeProps {}

function Home(props: HomeProps) {
  useScrollTopOnce();
  const { data, loading, error } = useQuery<
    GQLGetFeedQuery,
    GQLGetFeedQueryVariables
  >(gql`
    query GetFeed {
      feed @client {
        id
        sections {
          id
          title
          items {
            id
            contentId
            name
            cover
            type
          }
        }
      }
    }
  `);

  const createInteraction = useLazyInteractions();

  useBodyBackground({
    color: "yellow",
    gradientStyle: "topLeft"
  });

  if (error) {
    return <ErrorView error={error} />;
  }

  if (loading) {
    return <LoadingView />;
  }

  return (
    <FadePresence>
      <ScaleOut
        disableBackground
        disableScaling
        content={
          <View justify="flex-end" padding="medium">
            <Link to={SITEMAP.SETTINGS}>
              <Icon<Icons> type="settings" color="absoluteLight" size="small" />
            </Link>
          </View>
        }
      >
        {data?.feed.sections.map(({ id, items, title }) => (
          <Section
            key={`feed-section-${id}`}
            title={title}
            head={{
              ...Section.defaultProps.head,
              align: "flex-start"
            }}
            padding={["medium", "none", "large", "none"]}
          >
            <Scrollable
              padding="small"
              horizontalPadding="medium"
              maxVisibleItems={2}
            >
              {items.map(({ id, name, cover, type, contentId }, index) => {
                const primary = createInteraction(interactions[type], {
                  id: contentId,
                  label: `Go to ${name}`
                });
                switch (type) {
                  case GQLSectionType.Artist: {
                    return (
                      <CardCircle
                        key={`feed-card-cover-${id}`}
                        title={name}
                        interactions={{
                          primary
                        }}
                        media={{
                          source: cover,
                          credits: "spotify",
                          type: "image"
                        }}
                      />
                    );
                  }

                  default: {
                    return (
                      <CardCover
                        key={`feed-card-cover-${id}`}
                        title={name}
                        interactions={{
                          primary
                        }}
                        media={{
                          source: cover,
                          credits: "spotify",
                          type: "image"
                        }}
                      />
                    );
                  }
                }
              })}
            </Scrollable>
          </Section>
        ))}
      </ScaleOut>
    </FadePresence>
  );
}

export { Home };
