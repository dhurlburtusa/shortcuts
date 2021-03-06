# ngrok Notes

`ngrok` exposes local web servers behind NATs and firewalls to the public
internet over secure tunnels.

`ngrok` not only works with web servers but it also works with any other process
using tcp.


## How it Works

`ngrok` is a program that you download and run on your local machine. It
connects to the `ngrok` cloud service which accepts traffic on a public address
and relays that traffic through to the `ngrok` process running on your machine
and then on to the local port you specified.


## Download

`ngrok` can be installed either as an native program or as an `npm` package.

**Native Program**

- Go to https://ngrok.com/download and download the correct version for your
  machine.
- Unzip the downloaded archive and save the executable somewhere on your system.
- Update the system `PATH` for easy access.

See https://ngrok.com/ for details.

**NPM Package**

```sh
npm install ngrok
```

See https://www.npmjs.com/package/ngrok for details.


## Setup

[Setup a free account][ngrok-register] if you want to enable more features.

**Config Tunnel Authtoken**

Get your authtoken at https://dashboard.ngrok.com/auth. Then run the following

```sh
ngrok authtoken <your_authtoken>
```


## Example Usage

Here are some examples of using `ngrok`. It works with Git Bash. However, it
does not display all the information it is designed to. It works better with
Window's regular cmd prompt or Windows PowerShell.

**Web Server Running on localhost:3000**

```sh
ngrok http 3000
```

[ngrok-register]: https://dashboard.ngrok.com/user/signup
