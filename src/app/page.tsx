import HeroesSwiper from "@/components/swiper-hero/SwiperHero";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Home() {
  return (
    <article className="container mx-auto">
      <HeroesSwiper /> {/** Render it like this in your component */}
      <section>
        <h1 className="font-semibold text-xl">Instructions</h1>
        <ol className="list-decimal list-inside flex flex-col gap-y-2">
          <li>
            After cloning this project, run:{" "}
            <pre className="inline">npm install</pre>.
          </li>
          <li>
            Run: <pre className="inline">npm run dev</pre> to start the app.
          </li>
          <li>
            On the homepage, you'll see the slider with the grid images and
            these instructions.
          </li>
          <li>
            Run the following command if you haven't already.
            <SyntaxHighlighter language="bash" style={monokai}>
              npm install swiper
            </SyntaxHighlighter>
          </li>
          <li>
            Locate the folder <pre className="inline">swiper-hero</pre> at{" "}
            <pre className="inline">
              joana-swiperjs-example/src/components/swiper-hero
            </pre>
          </li>
          <li>
            Copy the entire <em>swiper-hero</em> folder and paste it in the{" "}
            <pre className="inline">components</pre> folder of{" "}
            <em>your project.</em>
          </li>
          <li>
            Render the SwiperHero component where you want it to be displayed in{" "}
            <em>your project</em> as show on <em>line 8</em> of this file:{" "}
            <pre className="inline">
              joana-swiperjs-example/src/app/page.tsx
            </pre>
            :
            <SyntaxHighlighter language="typescript" style={monokai}>
              {`  <article className="container mx-auto">
      <HeroesSwiper /> {/** Render it like this in your component*/}
      <section>
        <h1 className="font-semibold text-xl">Instructions</h1>
        <ol className="list-decimal list-inside flex flex-col gap-y-2"> ...`}
            </SyntaxHighlighter>
          </li>
          <li>
            Everything should now look exactly as the swiper with grid images
            above
          </li>
          <li>
            To change the images, locate the component at{" "}
            <pre className="inline">
              joana-swiperjs-example/src/components/swiper-hero/SwiperHero.tsx
            </pre>{" "}
            in <em>your project</em>.
          </li>
          <li>
            On <em>line 16</em>, you'll find an array called{" "}
            <pre className="inline">SLIDES</pre> as shown below
          </li>
          <SyntaxHighlighter language="typescript" style={monokai}>
            {`const SLIDES = [
  [
    {
      title: "Jane",
      src: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Deborah",
      src: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Christina",
      src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Joshua",
      src: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Thomas",
      src: "https://images.pexels.com/photos/14697557/pexels-photo-14697557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Regina",
      src: "https://images.pexels.com/photos/12698454/pexels-photo-12698454.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Regulera",
      src: "https://images.pexels.com/photos/4974360/pexels-photo-4974360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ] ......,`}
          </SyntaxHighlighter>
          This array is an array containing sub arrays. Each sub array is
          responsible for displaying a SwiperSlide(each dot, with the images
          grid).
          <li>
            Replace the <em>src</em> property value of each object with the{" "}
            <em>path of your image</em>
          </li>
          <li>
            Replace the title property value with <em>your title</em>
          </li>
          <li>
            For instance, your <pre className="inline">SLIDES</pre> array may
            now look like this:
            <SyntaxHighlighter language="typescript" style={monokai}>
              {`const SLIDES = [
  [
    {
      title: "Thomas G, CEO",
      src: "/path/to/thomas-g-ce0/image",
    },
   {
      title: "Derrick S, COO",
      src: "/path/to/derrick-s-coo/image",
    },
    {
      title: "Christina",
      src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
   {
      title: "Zeeshan K, CTO",
      src: "/path/to/zeeshan-h-cto/image",
    },
   {
      title: "Marcel H, CFO",
      src: "/path/to/marcel-h-cfo/image",
    },
 
 
  ] ......,`}{" "}
              and so on
            </SyntaxHighlighter>
          </li>
          <li>
            You can change the height of the entire Swiper Slide at{" "}
            <em>line 118</em> of the <pre className="inline">SwiperHero</pre>{" "}
            component
          </li>
          <li>
            You can change the height of all the images at <em>line 123</em> of
            the <pre className="inline">SwiperHero</pre> component
          </li>
          <li>Happy hacking!!! 😊</li>
        </ol>
      </section>
    </article>
  );
}
