<div class="flex min-h-32 flex-row p-4">
  <div class="bg-primary text-on-primary flex-grow basis-0 p-2">Primary</div>
  <div class="bg-on-primary text-primary flex-grow basis-0 p-2">On primary</div>
  <div class="bg-primary-container text-on-primary-container flex-grow basis-0 p-2">
    Primary container
  </div>
  <div class="bg-on-primary-container text-primary-container flex-grow basis-0 p-2">
    On primary container
  </div>
</div>
<div class="flex min-h-32 flex-row p-4">
  <div class="bg-error text-on-error flex-grow basis-0 p-2">Error</div>
  <div class="bg-on-error text-error flex-grow basis-0 p-2">On error</div>
  <div class="bg-error-container text-on-error-container flex-grow basis-0 p-2">
    Error container
  </div>
  <div class="bg-on-error-container text-error-container flex-grow basis-0 p-2">
    On error container
  </div>
</div>
<div class="flex min-h-32 flex-row p-4">
  <div class="bg-surface text-on-surface flex-grow basis-0 p-2">Surface</div>
  <div class="bg-on-surface text-surface flex-grow basis-0 p-2">On surface</div>
  <div class="bg-surface-variant text-on-surface-variant flex-grow basis-0 p-2">
    Surface variant
  </div>
  <div class="bg-on-surface-variant text-surface-variant flex-grow basis-0 p-2">
    On surface variant
  </div>
</div>
<div class="flex min-h-32 flex-row p-4">
  <div class="bg-surface-container-highest text-on-surface flex-grow basis-0 p-2">
    Surface container highest
  </div>
  <div class="bg-surface-container-high text-on-surface flex-grow basis-0 p-2">
    Surface container high
  </div>
  <div class="bg-surface-container text-on-surface flex-grow basis-0 p-2">Surface container</div>
  <div class="bg-surface-container-low text-on-surface flex-grow basis-0 p-2">
    Surface container low
  </div>
  <div class="bg-surface-container-lowest text-on-surface flex-grow basis-0 p-2">
    Surface container lowest
  </div>
</div>
<div class="flex min-h-32 flex-row p-4">
  <div class="bg-inverse-surface text-inverse-on-surface flex-grow basis-0 p-2">
    Inverse surface
  </div>
  <div class="bg-inverse-on-surface text-inverse-surface flex-grow basis-0 p-2">
    Inverse on surface
  </div>
  <div class="bg-inverse-primary text-inverse-surface flex-grow basis-0 p-2">Inverse primary</div>
</div>
<article class="prose prose-surface prose-xl mx-auto">
  <p class="lead">
    Until now, trying to style an article, document, or blog post with Tailwind has been a very
    tedious task.
  </p>

  <p>
    The @tailwindcss/typography plugin is our attempt to give you what you <u>actually</u>
    want, without any of the downsides of doing something stupid like disabling our base styles.
  </p>
  <blockquote>
    Why is Tailwind removing the default styles on my h1 elements? How do I disable this? What do
    you mean I lose all the other base styles too?
  </blockquote>

  <p>
    For more information about how to use the plugin and the features it includes, <a href={"#"}>
      read the documentation
    </a>
  </p>
  <hr />
  <h2>This is a heading</h2>
  <ol>
    <li>We want everything to look good out of the box.</li>
    <li>Really just the first reason, that's the whole point of the plugin.</li>
    <li>
      Here's a third pretend reason though a list with three items looks more realistic than a list
      with two items. Now <strong>I'm going to show you</strong> an example of an unordered list to
      make sure that looks good, too:
      <ul>
        <li>So here is the first item in this list.</li>
        <li>In this example we're keeping the items short.</li>
      </ul>
    </li>
  </ol>

  <table>
    <thead>
      <tr>
        <th align="left">Wrestler</th>
        <th align="left">Origin</th>
        <th align="left">Finisher</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bret "The Hitman" Hart</td>
        <td>Calgary, AB</td>
        <td>Sharpshooter</td>
      </tr>
      <tr>
        <td>Stone Cold Steve Austin</td>
        <td>Austin, TX</td>
        <td>Stone Cold Stunner</td>
      </tr>
      <tr>
        <td>Randy Savage</td>
        <td>Sarasota, FL</td>
        <td>Elbow Drop</td>
      </tr>
      <tr>
        <td>Vader</td>
        <td>Boulder, CO</td>
        <td>Vader Bomb</td>
      </tr>
      <tr>
        <td>Razor Ramon</td>
        <td>Chuluota, FL</td>
        <td>Razor's Edge</td>
      </tr>
    </tbody>
  </table>

  <figure>
    <img
      src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&h=500&q=80"
      alt=""
    />
    <figcaption>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
      classical Latin literature from 45 BC, making it over 2000 years old.
    </figcaption>
  </figure>

  <p>And that's the end of our little demo.</p>
</article>
