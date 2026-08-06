# NASM Notes

The Netwide Assembler (NASM) is a cross-platform x86 assembler with an Intel-like syntax portable to nearly every modern platform.

See [NASM website](https://www.nasm.us/).


## Tutorials

- https://cs.lmu.edu/~ray/notes/nasmtutorial/

## With MacOS

**System Calls**

MacOS uses different IDs for system calls. For example, `0x2000001` for `exit`. (I

**Object File Format**

MacOS uses the Mach-O object format. You need to let nasm know to use this format by passing `macho`, `macho32`, or `macho64` to the `-f` option.

```sh
nasm -f macho64 ...
```

Use the following to print a list of formats: `nasm -hf`.

**Linker**

The `ld` command on MacOS is different than on Linux. It needs different options. Here is an example:

```sh
ld -ld_classic -macos_version_min 14.0 -static -e _start test_nasm.o -o test_nasm
ld -ld_classic -macos_version_min 14.0 -L/Library/Developer/CommandLineTools/SDKs/MacOSX.sdk/usr/lib -lSystem -e _start test_nasm.o -o test_nasm
```
