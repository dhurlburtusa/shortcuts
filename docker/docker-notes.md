# Docker Notes

Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. Docker provides the ability to package and run an application in a loosely isolated environment called a container. By taking advantage of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.

## Editions

Dockers comes in different editions.

**Docker Enterprise**

- Paid
- Runs on Windows or Linux
- Known as EE (Enterprise Edition)

**Docker Desktop**

- Free
- Runs on Windows and Mac
- Known as CE (Community Edition)


## What is a Container

**Features**

- Not a virtual machine
- Software-based
- Stand-alone
- Executable
- Secure
- Flexible
	+ Any applicatio, Windows or Linux, can be containerized.
- Lightweight
	+ No new OS has to be installed as the host's kernel is shared with the running containers.
- Interchangeable
	+ Easily updated or replaced as needed.
- Portable
	+ Easily moved from local laptop to the data center or the cloud.
- Scalable
	+ Easily add and remove as demands increase or decrease.
- Stackable
	+ Can create stacks of containers in a hierarchy of interrelated services that share dependencies and can be orchestrated and scaled together.


## Docker Images and Containers

- A packaged application, ready to be run as a container.
- Executable packages that include the application (code), runtime, libraries, variables, and configuration files.

A container is the executed/running image.


## Docker Engine

Docker creates simple tooling and a universal packaging approach that bundles up all application dependencies inside a container which is then run on Docker Engine.

- Industry’s de facto container runtime.
- Runs on various Linux (CentOS, Debian, Fedora, Oracle Linux, RHEL, SUSE, and Ubuntu) and Windows Server OSes across hybrid/multi-cloud and validated to work with Kubernetes CRI.
- Enables containerized applications to run anywhere consistently on any infrastructure, solving “dependency hell” for developers and operations teams, and eliminating the “it works on my laptop!” problem.
- Supports any type of application - legacy to cloud-native, monolithic to 12-factor.
- Built with security in mind.


## To Be Categorized

- Commands
	+ docker
		* build -t imageName dir
		* images
		* info
		* ps
		* pull imageName
		* push ...
		* rmi imageId
		* run ...
		* start containerId
		* stop containerId
	+ docker-compose
		* build
		* up
		* down
- Files
	+ .dockerignore
	+ docker-compose.yml
	+ Dockerfile
		* CMD [ "executable", "parameter", ... ]
		* COPY [flags] source ... dest
		* EXPOSE port
		* FROM baseImageName
		* RUN command parameter ...
		* WORKDIR /the/workdir/path
