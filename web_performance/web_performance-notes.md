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

- Time to first paint.
- Time to interactivity.
- Time to full load.

The key to fast startup is to keep two things in mind: UPP is all that matters, and there's a "critical path" to each user-perceived event above. The critical path is exactly and only the code that must run to produce the event.

To reach a user-perceived startup event more quickly, the main "trick" is run only the code on the critical path. Shorten the critical path by simplifying the scene.

Another problem that can delay startup is idle time, caused by waiting for responses to requests (like database loads). To avoid this problem, applications should issue requests as early as possible in startup (this is called "front-loading").
