import { useSection } from "deco/hooks/useSection.ts";
import Section404 from "./404Game.tsx";

export interface Props {
  /**
   * @format rich-text
   * @description The description of heading.
   * @default Yay! You found the Capy 🦫!
   */
  heading?: string;
  /**
   * @format rich-text
   * @description The description of subText.
   * @default subtext!
   */
  subText?: string;

  /**
   * @format rich-text
   * @description The description of instructions.
   * @default instructions!
   */
  instructions?: string;
  /**
   * @format rich-text
   * @description The description of place.
   * @default place!
   */
  place?: string;
}

export default function Section({
  heading = "Oh no!! My Capy 🦫 is lost 😭",
  subText = "Please help me bring it home. He might be hungry and unsafe 🥹",
  instructions = "",
  place,
}: Props) {
  const propLink = (place) => {
    return {
      heading: `Oops! Capy 🦫 is not here in ${place}`,
      subText: "Try searching 🔎 him in another place.",
      place: place,
    };
  };
  /**
   * useSection is a nice hook for getting the HTMX link to render this section,
   * but with the following Props
   */

  const PLACES = {
    // ANTARCTICA: "Antarctica",
    // ICY_MOUNTAIN: "Icy Mountain",
    AMAZON_JUNGLE: "Amazon Jungle",
    GREAT_BARRIER_REEF: "Great Barrier Reef",
    HIMALAYAS: "Himalayas",
    SERENGETI_PLAINS: "Serengeti Plains",
    MOJAVE_DESERT: "Mojave Desert",
    SIBERIAN_TUNDRA: "Siberian Tundra",
    ROCKY_MOUNTAINS: "Rocky Mountains",
    GRAND_CANYON: "Grand Canyon",
    DEATH_VALLEY: "Death Valley",
    SAHARA_DESERT: "Sahara Desert",
  };
  const downLink = useSection({ props: {} }, Section404);
  const place1 = useSection({
    props: propLink(PLACES.AMAZON_JUNGLE),
  });
  const place2 = useSection({
    props: propLink(PLACES.GREAT_BARRIER_REEF),
  });
  const place3 = useSection({
    props: propLink(PLACES.HIMALAYAS),
  });
  const place4 = useSection({
    props: propLink(PLACES.SERENGETI_PLAINS),
  });
  const place5 = useSection({
    props: propLink(PLACES.DEATH_VALLEY),
  });
  const place6 = useSection({
    props: propLink(PLACES.SAHARA_DESERT),
  });
  const place7 = useSection({
    props: propLink(PLACES.SIBERIAN_TUNDRA),
  });
  const place8 = useSection({
    props: propLink(PLACES.ROCKY_MOUNTAINS),
  });
  const place9 = useSection({
    props: propLink(PLACES.GRAND_CANYON),
  });
  const place10 = useSection({
    props: propLink(PLACES.MOJAVE_DESERT),
  });

  return (
    <div
      id="it-works"
      class="container py-10 flex flex-col h-screen w-full items-center justify-center gap-16">
      <div
        class="leading-10 text-6xl"
        style="line-height: 5rem;"
        dangerouslySetInnerHTML={{
          __html: heading,
        }}
      />
      <div
        class="leading-10 text-xl"
        dangerouslySetInnerHTML={{
          __html: subText,
        }}
      />
      <div
        style="display: flex;
    flex-flow: row wrap;
    gap: 20px;
    padding: 20px;
    justify-content: center;
    align-items: center;">
        <button
          hx-target="#it-works"
          hx-swap="outerHTML"
          style="color: white; background: #2FD080;"
          hx-get={place1}
          class="btn">
          Search in {PLACES.AMAZON_JUNGLE}
        </button>
        <button
          hx-target="#it-works"
          hx-swap="outerHTML"
          style="color: white; background: #2FD080;"
          hx-get={place2}
          class="btn">
          He might be in {PLACES.GREAT_BARRIER_REEF}
        </button>
        <button
          hx-target="#it-works"
          hx-swap="outerHTML"
          style="color: white; background: #2FD080;"
          hx-get={place3}
          class="btn">
          He must be in {PLACES.HIMALAYAS}
        </button>
        <button
          hx-target="#it-works"
          hx-swap="outerHTML"
          style="color: white; background: #2FD080;"
          hx-get={place4}
          class="btn">
          Please be here in {PLACES.SERENGETI_PLAINS}
        </button>
        <button
          hx-target="#it-works"
          hx-swap="outerHTML"
          style="color: white; background: #2FD080;"
          hx-get={place5}
          class="btn">
          Surely he is here in {PLACES.DEATH_VALLEY}
        </button>
        <button
          hx-target="#it-works"
          hx-swap="outerHTML"
          style="color: white; background: #2FD080;"
          hx-get={place7}
          class="btn">
          Maybe he is in {PLACES.SIBERIAN_TUNDRA}
        </button>
        <a
          href="/sahara-desert"
          target="_self"
          class="btn"
          style="color: white; background: #2FD080;">
          He could be in {PLACES.SAHARA_DESERT}
        </a>
        <button
          hx-target="#it-works"
          hx-swap="outerHTML"
          style="color: white; background: #2FD080;"
          hx-get={place8}
          class="btn">
          Hopefully he should be in {PLACES.ROCKY_MOUNTAINS}
        </button>
        <button
          hx-target="#it-works"
          hx-swap="outerHTML"
          style="color: white; background: #2FD080;"
          hx-get={place9}
          class="btn">
          Definitely he is in {PLACES.GRAND_CANYON}
        </button>
        <button
          hx-target="#it-works"
          hx-swap="outerHTML"
          style="color: white; background: #2FD080;"
          hx-get={place10}
          class="btn">
          He should be in {PLACES.MOJAVE_DESERT} then
        </button>
      </div>
      <img src={""} />
      {/* <div class="text-sm">Powered by HTMX</div> */}
    </div>
  );
}
