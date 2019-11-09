import { Button } from "../../components/molecules/Button/Button";
import { Colors } from "../../foundations/Colors";
import React from "react";
import { TextLine } from "../../components/atoms/TextLine/TextLine";
import { Theme } from "../../foundations/Theme";
import { View } from "../../components/atoms/View/View";
import { useBodyBackground } from "../../hooks/use-body-background";
import { useTheme } from "emotion-theming";

interface Props {}

function Development(props: Props) {
  useBodyBackground();
  const theme = useTheme<Theme>();
  return (
    <>
      <Section title="Buttons">
        <Button size="small" rounded display="inline" label="Normal button" />
        <Button
          size="small"
          rounded
          display="inline"
          type="primary"
          label="Shuffle play"
        />
        <Button
          size="small"
          rounded
          display="inline"
          type="secondary"
          label="Secondary"
        />

        <Button rounded display="inline" label="Normal button" />
        <Button rounded display="inline" type="primary" label="Shuffle play" />
        <Button rounded display="inline" type="secondary" label="Secondary" />

        <Button size="large" rounded display="inline" label="Normal button" />
        <Button
          size="large"
          rounded
          display="inline"
          type="primary"
          label="Shuffle play"
        />
        <Button
          size="large"
          rounded
          display="inline"
          type="secondary"
          label="Secondary"
        />
      </Section>
      <Section title="Colors">
        {Object.keys(theme.colors).map(key => (
          <View
            key={key}
            padding="large"
            style={{
              backgroundColor: theme.colors[key as keyof Colors]
            }}
          >
            <TextLine text={key} numberOfLines={2} />
          </View>
        ))}
      </Section>
      <Section title="Random Svg's">
        <svg shapeRendering="crispEdges" viewBox="0 0 36 36">
          <path d="m28 20h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"></path>
        </svg>
        <svg viewBox="0 0 8 8">
          <path d="M4,0A4,4,0,1,0,8,4,4,4,0,0,0,4,0ZM4,6A2,2,0,1,1,6,4,2,2,0,0,1,4,6Z"></path>
        </svg>
        <svg viewBox="0 0 60 100">
          <path
            fill="white"
            d="M0 8c0-5 3-8 8-8s9 3 9 8v84c0 5-4 8-9 8s-8-3-8-8V8zm43 0c0-5 3-8 8-8s8 3 8 8v84c0 5-3 8-8 8s-8-3-8-8V8z"
          >
            <title>PAUZEREN</title>
          </path>
        </svg>
        <svg viewBox="0 0 85 100">
          <path
            fill="white"
            d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"
          >
            <title>AFSPELEN</title>
          </path>
        </svg>
        <svg viewBox="0 0 85 100">
          <path
            fill="white"
            d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z"
          >
            <title>AFSPELEN</title>
          </path>
        </svg>
        <svg height="16" role="img" width="16" viewBox="0 0 24 24">
          <polygon
            points="21.57 12 5.98 3 5.98 21 21.57 12"
            fill="white"
          ></polygon>
        </svg>
        <svg height="24" role="img" width="24" viewBox="0 0 24 24">
          <path
            d="M4.93,4.93,19.07,19.07m-14.14,0L19.07,4.93"
            fill="none"
            stroke="white"
            stroke-miterlimit="10"
          ></path>
        </svg>
        <svg height="24" role="img" width="24" viewBox="0 0 24 24">
          <path
            d="M12,11.25a.75.75,0,1,0,.75.76A.74.74,0,0,0,12,11.25Z"
            fill="white"
            stroke="white"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M5.25,11.25A.75.75,0,1,0,6,12,.74.74,0,0,0,5.25,11.25Z"
            fill="white"
            stroke="white"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M18.75,11.25a.75.75,0,1,0,.75.76A.74.74,0,0,0,18.75,11.25Z"
            fill="white"
            stroke="white"
            stroke-miterlimit="10"
          ></path>
        </svg>
        <svg height="24" role="img" width="24" viewBox="0 0 24 24">
          <polygon
            points="21.57 12 5.98 3 5.98 21 21.57 12"
            fill="white"
          ></polygon>
        </svg>
        <svg
          height="24"
          role="img"
          width="24"
          viewBox="0 0 512 512"
          aria-hidden="true"
        >
          <path
            d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
            fill="white"
          ></path>
        </svg>
        <svg
          height="32"
          role="img"
          width="32"
          viewBox="-25 -22 100 100"
          aria-hidden="true"
        >
          <path
            d="M35.711 34.619l-4.283-2.461a1.654 1.654 0 0 1-.808-1.156 1.65 1.65 0 0 1 .373-1.36l3.486-4.088a14.3 14.3 0 0 0 3.432-9.293V14.93c0-3.938-1.648-7.74-4.522-10.435C30.475 1.764 26.658.398 22.661.661c-7.486.484-13.35 6.952-13.35 14.725v.875c0 3.408 1.219 6.708 3.431 9.292l3.487 4.089a1.656 1.656 0 0 1-.436 2.516l-8.548 4.914A14.337 14.337 0 0 0 0 49.513V53.5h2v-3.987c0-4.417 2.388-8.518 6.237-10.705l8.552-4.916a3.648 3.648 0 0 0 1.783-2.549 3.643 3.643 0 0 0-.822-2.999l-3.488-4.091a12.297 12.297 0 0 1-2.951-7.993v-.875c0-6.721 5.042-12.312 11.479-12.729 3.449-.22 6.725.949 9.231 3.298a12.182 12.182 0 0 1 3.89 8.976v1.331c0 2.931-1.048 5.77-2.952 7.994l-3.487 4.089a3.653 3.653 0 0 0-.822 3 3.653 3.653 0 0 0 1.782 2.548l3.036 1.745a11.959 11.959 0 0 1 2.243-1.018zM45 25.629v15.289a7.476 7.476 0 0 0-5.501-2.418c-4.135 0-7.5 3.365-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.365 7.5-7.5V29.093l5.861 3.384 1-1.732L45 25.629zM39.499 51.5a5.506 5.506 0 0 1-5.5-5.5c0-3.033 2.467-5.5 5.5-5.5s5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5z"
            fill="white"
            fillRule="evenodd"
          ></path>
        </svg>
        <svg viewBox="0 0 1134 340">
          <title>Spotify</title>
          <path
            fill="white"
            d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
          ></path>
        </svg>
        <svg viewBox="0 0 1134 340">
          <title>Spotify</title>
          <path
            fill="white"
            d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
          ></path>
        </svg>
        <svg viewBox="0 0 167.5 167.5">
          <title>Spotify</title>
          <path
            fill="white"
            d="M83.7 0C37.5 0 0 37.5 0 83.7c0 46.3 37.5 83.7 83.7 83.7 46.3 0 83.7-37.5 83.7-83.7S130 0 83.7 0zM122 120.8c-1.4 2.5-4.6 3.2-7 1.7-19.8-12-44.5-14.7-73.7-8-2.8.5-5.6-1.2-6.2-4-.2-2.8 1.5-5.6 4-6.2 32-7.3 59.6-4.2 81.6 9.3 2.6 1.5 3.4 4.7 1.8 7.2zM132.5 98c-2 3-6 4-9 2.2-22.5-14-56.8-18-83.4-9.8-3.2 1-7-1-8-4.3s1-7 4.6-8c30.4-9 68.2-4.5 94 11 3 2 4 6 2 9zm1-23.8c-27-16-71.6-17.5-97.4-9.7-4 1.3-8.2-1-9.5-5.2-1.3-4 1-8.5 5.2-9.8 29.6-9 78.8-7.2 109.8 11.2 3.7 2.2 5 7 2.7 10.7-2 3.8-7 5-10.6 2.8z"
          ></path>
        </svg>
        <svg viewBox="0 0 167.5 167.5">
          <title>Spotify</title>
          <path
            fill="white"
            d="M83.7 0C37.5 0 0 37.5 0 83.7c0 46.3 37.5 83.7 83.7 83.7 46.3 0 83.7-37.5 83.7-83.7S130 0 83.7 0zM122 120.8c-1.4 2.5-4.6 3.2-7 1.7-19.8-12-44.5-14.7-73.7-8-2.8.5-5.6-1.2-6.2-4-.2-2.8 1.5-5.6 4-6.2 32-7.3 59.6-4.2 81.6 9.3 2.6 1.5 3.4 4.7 1.8 7.2zM132.5 98c-2 3-6 4-9 2.2-22.5-14-56.8-18-83.4-9.8-3.2 1-7-1-8-4.3s1-7 4.6-8c30.4-9 68.2-4.5 94 11 3 2 4 6 2 9zm1-23.8c-27-16-71.6-17.5-97.4-9.7-4 1.3-8.2-1-9.5-5.2-1.3-4 1-8.5 5.2-9.8 29.6-9 78.8-7.2 109.8 11.2 3.7 2.2 5 7 2.7 10.7-2 3.8-7 5-10.6 2.8z"
          ></path>
        </svg>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Download icon</title>
          <path
            d="M12 11.657V6h-1v5.65L9.076 9.414l-.758.65 3.183 3.702 3.195-3.7-.758-.653L12 11.657zM11.5 2C7.358 2 4 5.358 4 9.5c0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5C19 5.358 15.642 2 11.5 2zm0 14C7.916 16 5 13.084 5 9.5S7.916 3 11.5 3 18 5.916 18 9.5 15.084 16 11.5 16z"
            fill="white"
            fillRule="evenodd"
          ></path>
        </svg>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Download icon</title>
          <path
            d="M12 11.657V6h-1v5.65L9.076 9.414l-.758.65 3.183 3.702 3.195-3.7-.758-.653L12 11.657zM11.5 2C7.358 2 4 5.358 4 9.5c0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5C19 5.358 15.642 2 11.5 2zm0 14C7.916 16 5 13.084 5 9.5S7.916 3 11.5 3 18 5.916 18 9.5 15.084 16 11.5 16z"
            fill="white"
            fillRule="evenodd"
          ></path>
        </svg>
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
            fill="white"
          ></path>
        </svg>
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
            fill="white"
          ></path>
        </svg>
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
            fill="white"
          ></path>
        </svg>
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
            fill="white"
          ></path>
        </svg>
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z"
            fill="white"
          ></path>
        </svg>
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z"
            fill="white"
          ></path>
        </svg>
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
            fill="white"
            fillRule="evenodd"
          ></path>
        </svg>
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
            fill="white"
            fillRule="evenodd"
          ></path>
        </svg>
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M357.079 341.334l94.476 110.73-32.508 27.683-94.222-110.476q-45.714 30.476-100.826 30.476-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 23.365-5.841 45.714t-16.635 41.651-25.778 35.555zM224 357.079q28.19 0 53.841-11.048t44.19-29.587 29.587-44.19 11.048-53.841-11.048-53.841-29.587-44.191-44.19-29.587-53.841-11.047-53.841 11.047-44.191 29.588-29.587 44.19-11.047 53.841 11.047 53.841 29.588 44.19 44.19 29.587 53.841 11.048z"
            fill="white"
          ></path>
        </svg>
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M357.079 341.334l94.476 110.73-32.508 27.683-94.222-110.476q-45.714 30.476-100.826 30.476-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 23.365-5.841 45.714t-16.635 41.651-25.778 35.555zM224 357.079q28.19 0 53.841-11.048t44.19-29.587 29.587-44.19 11.048-53.841-11.048-53.841-29.587-44.191-44.19-29.587-53.841-11.047-53.841 11.047-44.191 29.588-29.587 44.19-11.047 53.841 11.047 53.841 29.588 44.19 44.19 29.587 53.841 11.048z"
            fill="white"
          ></path>
        </svg>
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
            fill="white"
          ></path>
        </svg>
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z"
            fill="white"
          ></path>
        </svg>
        <svg shape-rendering="crispEdges" viewBox="0 0 36 36">
          <path d="m28 20h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"></path>
        </svg>
        <svg viewBox="0 0 8 8">
          <path d="M4,0A4,4,0,1,0,8,4,4,4,0,0,0,4,0ZM4,6A2,2,0,1,1,6,4,2,2,0,0,1,4,6Z"></path>
        </svg>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Download icon</title>
          <path
            d="M12 11.657V6h-1v5.65L9.076 9.414l-.758.65 3.183 3.702 3.195-3.7-.758-.653L12 11.657zM11.5 2C7.358 2 4 5.358 4 9.5c0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5C19 5.358 15.642 2 11.5 2zm0 14C7.916 16 5 13.084 5 9.5S7.916 3 11.5 3 18 5.916 18 9.5 15.084 16 11.5 16z"
            fill="white"
            fillRule="evenodd"
          ></path>
        </svg>
        <svg
          width="80"
          height="90"
          viewBox="0 0 80 90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>User Icon</title>
          <path
            d="M67.74 61.78l-14.5-8.334c-.735-.422-1.24-1.145-1.385-1.98-.145-.835.088-1.685.638-2.33l5.912-6.93c3.747-4.378 5.81-9.967 5.81-15.737v-2.256c0-6.668-2.792-13.108-7.658-17.67C51.622 1.92 45.17-.386 38.392.054c-12.677.82-22.607 11.772-22.607 24.934v1.483c0 5.77 2.063 11.36 5.81 15.736l5.912 6.933c.55.644.783 1.493.638 2.33-.143.834-.648 1.556-1.383 1.98l-14.494 8.33C4.7 66.077 0 74.15 0 82.844v6.76h3.333v-6.76c0-7.5 4.055-14.46 10.59-18.174l14.5-8.334c1.597-.918 2.692-2.487 3.007-4.302.315-1.815-.19-3.66-1.387-5.06l-5.913-6.936c-3.23-3.775-5.01-8.594-5.01-13.57v-1.484c0-11.41 8.562-20.9 19.488-21.608 5.85-.377 11.415 1.61 15.67 5.598 4.26 3.992 6.605 9.404 6.605 15.24v2.254c0 4.976-1.778 9.796-5.01 13.57l-5.915 6.935c-1.195 1.4-1.7 3.246-1.386 5.06.313 1.816 1.41 3.385 3.008 4.303l14.507 8.338c6.525 3.71 10.58 10.67 10.58 18.17v6.76H80v-6.76c0-8.695-4.7-16.768-12.26-21.063z"
            fill="white"
            fillRule="evenodd"
          ></path>
        </svg>
        <svg
          height="24"
          role="img"
          width="24"
          viewBox="0 0 512 512"
          aria-hidden="true"
        >
          <path
            d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
            fill="white"
          ></path>
        </svg>
        <svg height="24" role="img" width="24" viewBox="0 0 24 24">
          <path
            d="M4.93,4.93,19.07,19.07m-14.14,0L19.07,4.93"
            fill="none"
            stroke="white"
            stroke-miterlimit="10"
          ></path>
        </svg>
        <svg height="24" role="img" width="24" viewBox="0 0 24 24">
          <polygon
            points="21.57 12 5.98 3 5.98 21 21.57 12"
            fill="white"
          ></polygon>
        </svg>
        <svg height="16" role="img" width="16" viewBox="0 0 24 24">
          <polygon
            points="21.57 12 5.98 3 5.98 21 21.57 12"
            fill="white"
          ></polygon>
        </svg>
        <svg height="24" role="img" width="24" viewBox="0 0 24 24">
          <path
            d="M12,11.25a.75.75,0,1,0,.75.76A.74.74,0,0,0,12,11.25Z"
            fill="white"
            stroke="white"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M5.25,11.25A.75.75,0,1,0,6,12,.74.74,0,0,0,5.25,11.25Z"
            fill="white"
            stroke="white"
            stroke-miterlimit="10"
          ></path>
          <path
            d="M18.75,11.25a.75.75,0,1,0,.75.76A.74.74,0,0,0,18.75,11.25Z"
            fill="white"
            stroke="white"
            stroke-miterlimit="10"
          ></path>
        </svg>
        <svg
          height="32"
          role="img"
          width="32"
          viewBox="-25 -22 100 100"
          aria-hidden="true"
        >
          <path
            d="M35.711 34.619l-4.283-2.461a1.654 1.654 0 0 1-.808-1.156 1.65 1.65 0 0 1 .373-1.36l3.486-4.088a14.3 14.3 0 0 0 3.432-9.293V14.93c0-3.938-1.648-7.74-4.522-10.435C30.475 1.764 26.658.398 22.661.661c-7.486.484-13.35 6.952-13.35 14.725v.875c0 3.408 1.219 6.708 3.431 9.292l3.487 4.089a1.656 1.656 0 0 1-.436 2.516l-8.548 4.914A14.337 14.337 0 0 0 0 49.513V53.5h2v-3.987c0-4.417 2.388-8.518 6.237-10.705l8.552-4.916a3.648 3.648 0 0 0 1.783-2.549 3.643 3.643 0 0 0-.822-2.999l-3.488-4.091a12.297 12.297 0 0 1-2.951-7.993v-.875c0-6.721 5.042-12.312 11.479-12.729 3.449-.22 6.725.949 9.231 3.298a12.182 12.182 0 0 1 3.89 8.976v1.331c0 2.931-1.048 5.77-2.952 7.994l-3.487 4.089a3.653 3.653 0 0 0-.822 3 3.653 3.653 0 0 0 1.782 2.548l3.036 1.745a11.959 11.959 0 0 1 2.243-1.018zM45 25.629v15.289a7.476 7.476 0 0 0-5.501-2.418c-4.135 0-7.5 3.365-7.5 7.5s3.364 7.5 7.5 7.5 7.5-3.365 7.5-7.5V29.093l5.861 3.384 1-1.732L45 25.629zM39.499 51.5a5.506 5.506 0 0 1-5.5-5.5c0-3.033 2.467-5.5 5.5-5.5s5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5z"
            fill="white"
            fillRule="evenodd"
          ></path>
        </svg>
        <svg
          width="80"
          height="81"
          viewBox="0 0 80 81"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Playlist Icon</title>
          <path
            d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z"
            fill="white"
            fillRule="evenodd"
          ></path>
        </svg>
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="white" fillRule="evenodd">
            <path
              d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
              fillRule="nonzero"
            ></path>
            <path d="M10 8h4v3h-4z"></path>
          </g>
        </svg>
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M357.079 341.334l94.476 110.73-32.508 27.683-94.222-110.476q-45.714 30.476-100.826 30.476-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 23.365-5.841 45.714t-16.635 41.651-25.778 35.555zM224 357.079q28.19 0 53.841-11.048t44.19-29.587 29.587-44.19 11.048-53.841-11.048-53.841-29.587-44.191-44.19-29.587-53.841-11.047-53.841 11.047-44.191 29.588-29.587 44.19-11.047 53.841 11.047 53.841 29.588 44.19 44.19 29.587 53.841 11.048z"
            fill="white"
          ></path>
        </svg>
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"
            fill="white"
          ></path>
        </svg>
        <svg
          viewBox="0 0 512 512"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z"
            fill="white"
          ></path>
        </svg>
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="white" fillRule="evenodd">
            <path
              d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
              fillRule="nonzero"
            ></path>
            <path d="M10 8h4v3h-4z"></path>
          </g>
        </svg>
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="white" fillRule="evenodd">
            <path
              d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
              fillRule="nonzero"
            ></path>
            <path d="M10 8h4v3h-4z"></path>
          </g>
        </svg>
        <svg
          width="80"
          height="79"
          viewBox="0 0 80 79"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Album</title>
          <path
            d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z"
            fill="white"
            fillRule="evenodd"
          ></path>
        </svg>
        <svg
          width="80"
          height="79"
          viewBox="0 0 80 79"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Artist Icon</title>
          <path
            d="M53.043 50.486L46.68 46.83c-.636-.366-1.074-.99-1.2-1.716-.125-.725.077-1.462.555-2.02l5.178-6.072c3.287-3.84 5.097-8.743 5.097-13.803V21.24c0-5.85-2.447-11.497-6.716-15.5C45.266 1.686 39.596-.343 33.66.048c-11.12.718-19.83 10.326-19.83 21.87v1.3c0 5.063 1.81 9.964 5.096 13.802l5.18 6.074c.476.558.678 1.295.553 2.02-.127.723-.563 1.35-1.202 1.717l-12.697 7.3C4.124 57.9 0 64.982 0 72.61v5.92h2.97v-5.92c0-6.562 3.548-12.653 9.265-15.902l12.702-7.3c1.407-.81 2.372-2.19 2.65-3.788.276-1.598-.17-3.22-1.222-4.454l-5.18-6.077C18.356 31.787 16.8 27.57 16.8 23.216v-1.3c0-9.982 7.49-18.287 17.05-18.906 5.124-.326 9.99 1.41 13.712 4.9 3.727 3.493 5.778 8.227 5.778 13.332v1.977c0 4.352-1.557 8.57-4.385 11.872l-5.18 6.074c-1.05 1.234-1.496 2.858-1.22 4.456.278 1.597 1.242 2.977 2.647 3.785l4.51 2.59c1.048-.61 2.16-1.12 3.33-1.51zM66.84 37.133v22.71c-2.038-2.203-4.942-3.592-8.17-3.592-6.143 0-11.14 5-11.14 11.14 0 6.143 4.996 11.14 11.14 11.14 6.142 0 11.14-4.997 11.14-11.14V42.28l8.705 5.027L80 44.732l-13.16-7.6zM58.67 75.56c-4.504 0-8.17-3.664-8.17-8.17 0-4.504 3.664-8.168 8.17-8.168 4.504 0 8.168 3.664 8.168 8.17 0 4.504-3.664 8.168-8.17 8.168z"
            fill="white"
            fillRule="evenodd"
          ></path>
        </svg>
        <svg
          width="80"
          height="81"
          viewBox="0 0 80 81"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Playlist Icon</title>
          <path
            d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z"
            fill="white"
            fillRule="evenodd"
          ></path>
        </svg>
        <svg
          width="80"
          height="81"
          viewBox="0 0 80 81"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Playlist Icon</title>
          <path
            d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z"
            fill="white"
            fillRule="evenodd"
          ></path>
        </svg>
        <svg
          width="80"
          height="90"
          viewBox="0 0 80 90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>User Icon</title>
          <path
            d="M67.74 61.78l-14.5-8.334c-.735-.422-1.24-1.145-1.385-1.98-.145-.835.088-1.685.638-2.33l5.912-6.93c3.747-4.378 5.81-9.967 5.81-15.737v-2.256c0-6.668-2.792-13.108-7.658-17.67C51.622 1.92 45.17-.386 38.392.054c-12.677.82-22.607 11.772-22.607 24.934v1.483c0 5.77 2.063 11.36 5.81 15.736l5.912 6.933c.55.644.783 1.493.638 2.33-.143.834-.648 1.556-1.383 1.98l-14.494 8.33C4.7 66.077 0 74.15 0 82.844v6.76h3.333v-6.76c0-7.5 4.055-14.46 10.59-18.174l14.5-8.334c1.597-.918 2.692-2.487 3.007-4.302.315-1.815-.19-3.66-1.387-5.06l-5.913-6.936c-3.23-3.775-5.01-8.594-5.01-13.57v-1.484c0-11.41 8.562-20.9 19.488-21.608 5.85-.377 11.415 1.61 15.67 5.598 4.26 3.992 6.605 9.404 6.605 15.24v2.254c0 4.976-1.778 9.796-5.01 13.57l-5.915 6.935c-1.195 1.4-1.7 3.246-1.386 5.06.313 1.816 1.41 3.385 3.008 4.303l14.507 8.338c6.525 3.71 10.58 10.67 10.58 18.17v6.76H80v-6.76c0-8.695-4.7-16.768-12.26-21.063z"
            fill="white"
            fillRule="evenodd"
          ></path>
        </svg>
        <svg
          width="80"
          height="90"
          viewBox="0 0 80 90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>User Icon</title>
          <path
            d="M67.74 61.78l-14.5-8.334c-.735-.422-1.24-1.145-1.385-1.98-.145-.835.088-1.685.638-2.33l5.912-6.93c3.747-4.378 5.81-9.967 5.81-15.737v-2.256c0-6.668-2.792-13.108-7.658-17.67C51.622 1.92 45.17-.386 38.392.054c-12.677.82-22.607 11.772-22.607 24.934v1.483c0 5.77 2.063 11.36 5.81 15.736l5.912 6.933c.55.644.783 1.493.638 2.33-.143.834-.648 1.556-1.383 1.98l-14.494 8.33C4.7 66.077 0 74.15 0 82.844v6.76h3.333v-6.76c0-7.5 4.055-14.46 10.59-18.174l14.5-8.334c1.597-.918 2.692-2.487 3.007-4.302.315-1.815-.19-3.66-1.387-5.06l-5.913-6.936c-3.23-3.775-5.01-8.594-5.01-13.57v-1.484c0-11.41 8.562-20.9 19.488-21.608 5.85-.377 11.415 1.61 15.67 5.598 4.26 3.992 6.605 9.404 6.605 15.24v2.254c0 4.976-1.778 9.796-5.01 13.57l-5.915 6.935c-1.195 1.4-1.7 3.246-1.386 5.06.313 1.816 1.41 3.385 3.008 4.303l14.507 8.338c6.525 3.71 10.58 10.67 10.58 18.17v6.76H80v-6.76c0-8.695-4.7-16.768-12.26-21.063z"
            fill="white"
            fillRule="evenodd"
          ></path>
        </svg>
      </Section>
    </>
  );
}

const Section: React.FunctionComponent<{ title: string }> = function Section({
  title,
  children
}) {
  return (
    <View padding="large">
      <View margin={["none", "none", "large", "none"]}>
        <TextLine text={title} type="display" color="absoluteLight" />
      </View>
      {React.Children.map(children, item => (
        <View margin={["large", "none"]}>{item}</View>
      ))}
    </View>
  );
};

export { Development, Development as default };
