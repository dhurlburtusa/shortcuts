# Web Performance Notes

Web performance is the objective measurements and the perceived user experience of load time and runtime. Web performance is how long a site takes to load, become interactive and responsive, and how smooth the content is during user interactions. The objective measurements include time to load, frames per second, and time to become interactive, and subjective experience means how long it feels like it takes for content to load.

See https://developer.mozilla.org/en-US/docs/Web/Performance for details.

## Fundamentals

Ultimately, user-perceived performance (UPP) is the only performance that matters. Users prefer, say, a responsive, smooth app that only processes 1,000 database transactions per second, over a choppy, unresponsive app that processes 100,000,000 per second.

### Responsiveness

Responsiveness means how fast the system provides outputs (possibly multiple ones) in response to user inputs.

### Frame Rate

Frame rate is the rate at which the system changes pixels displayed to the user.

### Memory Usage

Memory usage closely approximates "user state".

A well-designed system does not maximize the amount of free memory. Rather, a well-designed system has been optimized to use as much memory as possible to maintain user state, while meeting other UPP goals.

### Power Usage

A well-designed system minimizes power required, while meeting other UPP goals.

## Application Performance

### Startup Performance

Application startup is punctuated by three user-perceived events:

- Time to first paint (see [TTFB](https://developer.mozilla.org/en-US/docs/Glossary/Time_to_first_byte)).
- Time to interactivity (see [TTI](https://developer.mozilla.org/en-US/docs/Glossary/Time_to_interactive)).
- Time to full load.

The key to fast startup is to keep two things in mind: UPP is all that matters, and there's a "critical path" to each user-perceived event above. The critical path is exactly and only the code that must run to produce the event.

To reach a user-perceived startup event more quickly, the main "trick" is run only the code on the critical path. Shorten the critical path by simplifying the scene.

Another problem that can delay startup is idle time, caused by waiting for responses to requests (like database loads). To avoid this problem, applications should issue requests as early as possible in startup (this is called "front-loading").

## How Browsers Work

Two major issues in web performance are issues having to do with latency and issues having to do with the fact that for the most part, browsers are single-threaded.

### Navigation

The first step of navigating to a web page is finding where the assets for that page are located. If the IP address for the assets is not cached, then the browser must performa a **DNS lookup**. This can add significant latency, especially with cellular/satilite connected devices.

Once the IP address is known, the browser sets up a connection to the server via a **TCP three-way handshake**.

For secure connections established over HTTPS, the **TLS negotiation** is required. (This requires five more round trips to the server before the request for content is actually sent.)

After the eight round trips to the server, the browser is finally able to make the request.

### Parsing

Once the browser receives the first chunk of data, it can begin parsing the information received to build the DOM and CSSOM.

Typically, the first chunk of content is in the first 14KB of data. Even if the requested page's HTML is larger than the initial 14KB packet, the browser will begin parsing and attempting to render an experience based on the data it has. This is why it's important for web performance optimization to include everything the browser needs to start rendering a page — the CSS and HTML needed for the first render — in the first 14KB. But before anything is rendered to the screen, the HTML, CSS, and JavaScript have to be parsed.
