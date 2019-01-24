# Serial Communication Notes

Serial communication is basically the transfer of bits one at a time.

See https://learn.sparkfun.com/tutorials/serial-communication for a great
explanation on the topic.

## Serial Interfaces

Some well-known and common serial interfaces include USB, Ethernet, SPI, and
I2C.  Serial interfaces can be sorted into one of two groups: synchronous or
asynchronous. 

A synchronous serial interface always pairs its data line(s) with a clock
signal, so all devices on a synchronous serial bus share a common clock.  This
makes for a more straightforward, often faster serial transfer, but it also
requires at least one extra wire between communicating devices. Examples of
synchronous interfaces include SPI and I2C.

Asynchronous means that data is transferred without support from an external
clock signal.
