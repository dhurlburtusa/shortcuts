# Make Notes

Make is a tool which is typically used to control the generation of executables and other non-source files of a program from the program's source files. More generally, Make can be used to run a series of instructions depending on what files have changed.


## Makefiles

Makefiles are used to help decide which parts of a large program need to be recompiled. In the vast majority of cases, C or C++ files are compiled.

It can be used beyond programs too, when you need a series of instructions to run depending on what files have changed.

### Syntax

A Makefile consists of a set of rules. A rule generally looks like this:

```Makefile
targets: prerequisites
	command
	command
	command
```

- The targets are file names, separated by spaces. Typically, there is only one per rule.
- The commands are a series of steps typically used to make the target(s). These need to start with a tab character, not spaces.
- The prerequisites are also file names, separated by spaces. These files need to exist before the commands for the target are run. These are also called dependencies.
