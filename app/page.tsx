export default function Page() {
  return (
    <div>
      <section className="mb-10">
        <h1 className="my-10 font-extrabold text-5xl text-center">
          <span>Captain Awesome</span>
        </h1>

        <p>
          Hello! This is a starter template to build your own blog with Blogster. Available in four
          themes minimal, sleek, newspaper and bubblegum. This blog is a demo for sleek theme. Get
          started with one simple command.
        </p>
      </section>

      <section>
        <p>Here are a few reasons why you will love this template: </p>

        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Sleek. A beautiful Astro theme built with Tailwind.</li>

          <li>
            Fast. Fast by default. Blogster templates are engineered to be performant and load
            before you could blink, even when not cached.
          </li>

          <li>
            Dark mode. Auto dark mode with a manual toggle. Hit that toggle button at the top of the
            page and see the mode change.
          </li>

          <li>Mobile first. Responsive and loads fast in all devices.</li>

          <li>Accessible. A well thought out semantic and accessible content.</li>

          <li>Perfect lighthouse score. 100 across the board.</li>

          <li>
            Content authoring for everyone. Author content using markdown (.md) from your code
            editor or directly in GitHub.
          </li>

          <li>
            Extended markdown with Markdoc. Type-safe custom components like YouTube embed, Twitter
            embed (or anything you want really) in your markdown (.md) files.
          </li>

          <li>Built-in RSS feed for you blog, excellent SEO and more.</li>
        </ul>
      </section>
    </div>
  );
}
