let geolocation, watchId;

if (navigator.geolocation) {
  geolocation = navigator.geolocation;

  geolocation.getCurrentPosition(
    /**
     * @param {!Position} position - The position of the device.
     * @param {!Coordinates} position.coords - The coordinates of the position.
     * @param {number} position.coords.accuracy - The accuracy of the latitude and
     *   longitude properties, expressed in meters.
     * @param {number} position.coords.altitude - The altitude in meters or `null`.
     * @param {number} position.coords.altitudeAccuracy - The accuracy of the
     *   altitude expressed in meters.
     * @param {number} position.coords.heading - The direction in which the device is
     *   traveling.  The value indicates how far off from heading true north the
     *   device is.  0 degrees represents true north, and the direction is determined
     *   clockwise (which means that east is 90 degrees and west is 270 degrees).  If
     *   `speed` is 0, heading is `NaN`.  If the device is unable to provide heading
     *   information, this value is `null`.
     * @param {number} position.coords.latitude - The latitude in decimal degrees.
     * @param {number} position.coords.longitude  - The longitude in decimal degrees.
     * @param {number} position.coords.speed - The velocity of the device in meters
     *   per second.
     * @param {!DOMTimeStamp|number} position.timestamp - The time at which the
     *   location was retrieved which is the number of milliseconds since the Epoch.
     */
    (position) => {
      // TODO: Do something with position data.
    },
    /**
     * @param {!PositionError} posErr - The position error.
     * @param {number} posErr.code - The error code.  The following values are
     *   possible: `PositionError.PERMISSION_DENIED` - The acquisition of the
     *   geolocation information failed because the page didn't have the permission
     *   to do it.  `PositionError.POSITION_UNAVAILABLE` - The acquisition of the
     *   geolocation failed because at least one internal source of position returned
     *   an internal error.  `PositionError.TIMEOUT` - The time allowed to acquire
     *   the geolocation, defined by `PositionOptions.timeout` information was
     *   reached before the information was obtained.
     * @param {!DOMString|string} posErr.message - A human-readable message describing
     *   the details of the error.
     */
    (posErr) => {
      let code = posErr.code,
          message = posErr.message;

      // For some reason, PositionError is not available.  (Seen in Chrome 59.)
      // However, accessing the error code constants through the PositionError instance
      // works.
      switch (code) {
        case posErr.PERMISSION_DENIED:
          // TODO: Handle permission denied error.
          break;
        case posErr.POSITION_UNAVAILABLE:
          // TODO: Handle position unavailable error.
          break;
        case posErr.TIMEOUT:
          // TODO: Handle timeout error.
          break;
        default:
          // This should never happen but it would be good to know when an unexpected
          // code is received.
          console.error(`Unexpected error code: ${message}`);
      }
    },
    // Optionally set some options:
    {
      maximumAge: Number.MAX_SAFE_INTEGER,
      timeout: 10000
    }
  );

  /**
   * This has the same parameter signature as `getCurrentPosition` but it will be
   * called every time the position changes.
   *
   * This can be used to get the current position too.  That is, you don't have to
   * call `getCurrentPosition` just to get the initial position.  `watchPosition`
   * will call your callback as soon as it acquires the position.
   *
   * Although you could just use `watchPosition`, you may want to use a combination
   * of `getCurrentPosition` and `watchPosition`.  Call `getCurrentPosition`
   * without enabling high accuracy so that you can at least have a basic idea of
   * where the device is.  Then call `watchPosition` with high accuracy enabled.
   * When the more accurate position is determined (which could take quite some
   * time), the `watchPosition` callbacks will be called.
   */
  watchId = geolocation.watchPosition(
    (position) => {
      // ...
    },
    (posErr) => {
      // ...
    },
    {
      enableHighAccuracy: true
    }
  );

  // At some later point
  geolocation.clearWatch(watchId);
}
